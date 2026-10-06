<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\PelangganService;
use App\Services\PekerjaanServisService;
use App\Services\SukuCadangService;
use App\Services\TransaksiPembayaranService;
use Inertia\Inertia;

class DashboardController extends Controller
{
    protected $pelangganService, $pekerjaanServisService, $sukuCadangService, $transaksiPembayaranService;
    public function __construct()
    {
        $this->pelangganService = new PelangganService();
        $this->pekerjaanServisService = new PekerjaanServisService();
        $this->sukuCadangService = new SukuCadangService();
        $this->transaksiPembayaranService = new TransaksiPembayaranService();
    }

    public function index()
    {
        return Inertia::render('Dashboard', [
            'stats' => [
                'totalPelanggan' => $this->pelangganService->search(['count' => true]),
                'servisAktif' => $this->pekerjaanServisService->getActiveCount(),
                'stokMenipis' => $this->sukuCadangService->getLowStockCount(),
                'pendapatanBulanan' => $this->transaksiPembayaranService->getMonthlyRevenue(),
            ],
            'recentActivity' => $this->pekerjaanServisService->getRecentActivity()
        ]);
    }
}