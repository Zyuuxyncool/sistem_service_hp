<?php
namespace App\Http\Controllers\Pelanggan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\PekerjaanServis;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $pelanggan = $user->pelanggan;

        if (!$pelanggan) {
            // Jaga-jaga jika pelanggan belum ada
            return Inertia::render('Pelanggan/Dashboard', [
                'stats' => ['totalServis' => 0, 'servisAktif' => 0],
                'riwayat' => []
            ]);
        }

        $riwayat = PekerjaanServis::where('pelanggan_id', $pelanggan->id)
            ->orderBy('id', 'desc')
            ->take(5)
            ->get()
            ->map(function($item) {
                return [
                    'id' => $item->id,
                    'tipe_hp' => $item->tipe_hp,
                    'status_id' => $item->status_servis,
                    'status_text' => config('status.list_status')[$item->status_servis] ?? 'Menunggu',
                    'keluhan' => $item->keluhan,
                    'waktu' => $item->created_at->diffForHumans(),
                ];
            });

        $stats = [
            'totalServis' => PekerjaanServis::where('pelanggan_id', $pelanggan->id)->count(),
            'servisAktif' => PekerjaanServis::where('pelanggan_id', $pelanggan->id)->whereNotIn('status_servis', [4, 6])->count(),
        ];

        return Inertia::render('Pelanggan/Dashboard', [
            'stats' => $stats,
            'riwayat' => $riwayat
        ]);
    }
}
