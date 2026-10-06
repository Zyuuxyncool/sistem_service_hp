<?php
namespace App\Http\Controllers\Pelanggan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\PekerjaanServis;

class PendaftaranServisController extends Controller
{
    public function index()
    {
        return Inertia::render('Pelanggan/PendaftaranServis/Index');
    }

    public function store(Request $request)
    {
        $request->validate([
            'tipe_hp' => 'required|string|max:255',
            'nomor_imei' => 'nullable|string|max:50',
            'keluhan' => 'required|string',
        ]);

        $pelanggan = $request->user()->pelanggan;

        if (!$pelanggan) {
            return redirect()->back()->withErrors(['message' => 'Profil pelanggan tidak ditemukan.']);
        }

        PekerjaanServis::create([
            'pelanggan_id' => $pelanggan->id,
            'tipe_hp' => $request->tipe_hp,
            'nomor_imei' => $request->nomor_imei,
            'keluhan' => $request->keluhan,
            'status_servis' => 1, // 1 = Menunggu/Pending
        ]);

        return redirect()->route('pelanggan.riwayat_servis.index')
            ->with('message', 'Pendaftaran servis berhasil dikirim! Silakan bawa HP kamu ke toko atau tunggu teknisi menghubungi kamu.');
    }
}
