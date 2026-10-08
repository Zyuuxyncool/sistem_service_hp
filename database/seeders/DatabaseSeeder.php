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
                'password' => Hash::make('superService'),
                'akses' => 'Admin',
            ]
        );

    }
}
