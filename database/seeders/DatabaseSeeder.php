<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Pelanggan;
use App\Models\SukuCadang;
use App\Models\PekerjaanServis;
use App\Models\DetailPenggunaanPart;
use App\Models\TransaksiPembayaran;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID'); // Use Indonesian faker

        // 1. Create Admin
        $admin = User::firstOrCreate(
            ['email' => 'admin@service.com'],
            [
                'name' => 'Admin Service',
                'password' => Hash::make('password'),
                'akses' => 'Admin',
            ]
        );

        // 2. Create Suku Cadang (Spare Parts)
        $sukuCadangs = [];
        $parts = [
            ['nama' => 'LCD Samsung A51', 'modal' => 350000, 'jual' => 500000],
            ['nama' => 'Baterai iPhone 11', 'modal' => 150000, 'jual' => 300000],
            ['nama' => 'Flexible Charger Redmi Note 10', 'modal' => 25000, 'jual' => 75000],
            ['nama' => 'IC Power', 'modal' => 45000, 'jual' => 150000],
            ['nama' => 'Thermal Paste', 'modal' => 15000, 'jual' => 50000],
            ['nama' => 'LCD iPhone X', 'modal' => 450000, 'jual' => 650000],
            ['nama' => 'Speaker Poco X3', 'modal' => 35000, 'jual' => 85000],
            ['nama' => 'Konektor Cas Type C', 'modal' => 5000, 'jual' => 50000],
            ['nama' => 'Kamera Belakang iPhone 12', 'modal' => 600000, 'jual' => 850000],
            ['nama' => 'SSD 512GB NVMe', 'modal' => 350000, 'jual' => 550000],
        ];

        foreach ($parts as $part) {
            $sukuCadangs[] = SukuCadang::create([
                'nama_barang' => $part['nama'],
                'jumlah_stok' => $faker->numberBetween(5, 50),
                'harga_modal' => $part['modal'],
                'harga_jual' => $part['jual'],
            ]);
        }

        // 3. Create Pelanggan (No longer linked to users)
        $pelanggans = [];
        for ($i = 1; $i <= 10; $i++) {
            $pelanggan = Pelanggan::create([
                'nama_pelanggan' => $faker->name,
                'nomor_wa' => $faker->phoneNumber,
                'alamat' => $faker->address,
            ]);

            $pelanggans[] = $pelanggan;
        }

        // 4. Create Pekerjaan Servis, Detail Part, and Pembayaran
        $statuses = array_keys(PekerjaanServis::STATUS_SERVIS);
        
        $gadgets = ['Samsung Galaxy S22', 'iPhone 13 Pro', 'Xiaomi Redmi Note 11', 'Asus ROG Phone 5', 'Poco F3', 'Oppo Reno 8', 'Vivo V25'];
        $keluhans = ['Mati Total', 'Ganti LCD', 'Ganti Baterai', 'Sinyal Hilang', 'Speaker Cempreng', 'Konektor Cas Longgar', 'Bootloop'];

        foreach (range(1, 15) as $index) {
            $pelanggan = $faker->randomElement($pelanggans);
            $status = $faker->randomElement($statuses);
            $biayaJasa = $faker->randomElement([50000, 100000, 150000, 200000, 300000]);
            
            $servis = PekerjaanServis::create([
                'pelanggan_id' => $pelanggan->id,
                'tipe_hp' => $faker->randomElement($gadgets),
                'nomor_imei' => $faker->numerify('###############'),
                'keluhan' => $faker->randomElement($keluhans),
                'biaya_jasa' => $biayaJasa,
                'status_servis' => $status, // 1 to 6
                'catatan_teknisi' => $status > 3 ? $faker->sentence() : null,
                'lama_garansi' => $faker->randomElement([7, 14, 30, 90]), // days
                'batas_garansi' => null, // Set later if status is Selesai/Diambil
            ]);

            $totalPart = 0;
            
            // Randomly attach 0 to 2 parts for this service if status > 1 (Diterima)
            if ($status > 1 && $faker->boolean(70)) {
                $numParts = $faker->numberBetween(1, 2);
                $usedParts = $faker->randomElements($sukuCadangs, $numParts);

                foreach ($usedParts as $part) {
                    $qty = 1;
                    $subtotal = $part->harga_jual * $qty;
                    $totalPart += $subtotal;

                    DetailPenggunaanPart::create([
                        'pekerjaan_servis_id' => $servis->id,
                        'suku_cadang_id' => $part->id,
                        'jumlah_dipakai' => $qty,
                        'subtotal_harga' => $subtotal,
                    ]);

                    // Deduct stock
                    $part->decrement('jumlah_stok', $qty);
                }
            }

            // Set batas_garansi if finished
            if (in_array($status, [4, 5])) {
                $servis->update([
                    'batas_garansi' => Carbon::now()->addDays($servis->lama_garansi)->format('Y-m-d')
                ]);
            }

            // Create Transaksi Pembayaran if status is Selesai or Diambil/Lunas
            if ($status == 5) {
                TransaksiPembayaran::create([
                    'pekerjaan_servis_id' => $servis->id,
                    'total_bayar' => $servis->biaya_jasa + $totalPart,
                    'metode_bayar' => $faker->randomElement(['Cash', 'Transfer Bank', 'Qris']),
                    'status_pembayaran' => 2, // Lunas
                    'waktu_bayar' => Carbon::now()->subDays($faker->numberBetween(0, 5)),
                ]);
            } elseif ($status == 4) { // Selesai tapi blm diambil
                 TransaksiPembayaran::create([
                    'pekerjaan_servis_id' => $servis->id,
                    'total_bayar' => $servis->biaya_jasa + $totalPart,
                    'metode_bayar' => 'Belum Ditentukan',
                    'status_pembayaran' => 1, // Belum Bayar
                    'waktu_bayar' => null,
                ]);
            }
        }
    }
}
