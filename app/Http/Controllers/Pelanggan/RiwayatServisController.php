<?php
namespace App\Http\Controllers\Pelanggan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\PekerjaanServis;
use App\Models\TransaksiPembayaran;

class RiwayatServisController extends Controller
{
    public function index(Request $request)
    {
        $pelanggan = $request->user()->pelanggan;
        if (!$pelanggan) abort(403);

        $riwayat = PekerjaanServis::where('pelanggan_id', $pelanggan->id)
            ->with(['detailPenggunaanPart.sukuCadang'])
            ->orderBy('id', 'desc')
            ->get();

        // Cari transaksi jika ada
        $transaksi = TransaksiPembayaran::whereIn('pekerjaan_servis_id', $riwayat->pluck('id'))->get()->keyBy('pekerjaan_servis_id');

        $riwayat = $riwayat->map(function($item) use ($transaksi) {
            return [
                'id' => $item->id,
                'tipe_hp' => $item->tipe_hp,
                'keluhan' => $item->keluhan,
                'catatan_teknisi' => $item->catatan_teknisi,
                'biaya_jasa' => $item->biaya_jasa,
                'status_id' => $item->status_servis,
                'status_text' => config('status.list_status')[$item->status_servis] ?? 'Menunggu',
                'waktu' => $item->created_at->format('d M Y H:i'),
                'parts' => $item->detailPenggunaanPart->map(function($part) {
                    return [
                        'nama' => $part->sukuCadang->nama_barang,
                        'jumlah' => $part->jumlah_dipakai,
                        'subtotal' => $part->subtotal_harga,
                    ];
                }),
                'total_biaya' => $item->biaya_jasa + $item->detailPenggunaanPart->sum('subtotal_harga'),
                'transaksi' => $transaksi[$item->id] ?? null
            ];
        });

        return Inertia::render('Pelanggan/RiwayatServis/Index', [
            'riwayat' => $riwayat
        ]);
    }

    public function bayar(Request $request, $id)
    {
        $request->validate([
            'metode_bayar' => 'required|string'
        ]);

        $servis = PekerjaanServis::findOrFail($id);
        
        // Cek keamanan
        if ($servis->pelanggan_id != $request->user()->pelanggan->id) abort(403);

        $total = $servis->biaya_jasa + $servis->detailPenggunaanPart->sum('subtotal_harga');

        TransaksiPembayaran::updateOrCreate(
            ['pekerjaan_servis_id' => $servis->id],
            [
                'total_bayar' => $total,
                'metode_bayar' => $request->metode_bayar,
                'status_pembayaran' => 1, // 1 = Belum Lunas/Menunggu Konfirmasi
                'waktu_bayar' => now()
            ]
        );

        return redirect()->back()->with('message', 'Permintaan pembayaran dengan metode ' . $request->metode_bayar . ' berhasil dikirim! Silakan ikuti instruksi pembayaran.');
    }
}
