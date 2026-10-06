<?php

namespace App\Http\Controllers\Admin;

use App\Services\PekerjaanServisService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\TransaksiPembayaranService;
use Inertia\Inertia;

class TransaksiPembayaranController extends Controller
{
    protected $service, $pekerjaanServisService;
    
    public function __construct()
    {
        $this->service = new TransaksiPembayaranService();
        $this->pekerjaanServisService = new PekerjaanServisService();
        Inertia::share('list_status', $this->service->list_status());
    }

    public function index(Request $request)
    {
        $transaksi = $this->service->search($request->all());
        $filters = $request->only(['metode_bayar']);

        $pekerjaan_servis_list = $this->pekerjaanServisService->search(['limit' => 1000, 'with' => 'pelanggan'])->map(function($item) {
            $item->id_label = ($item->pelanggan->nama_pelanggan ?? 'Unknown') . " - (Service #" . $item->id . " / " . ($item->tipe_hp ?? 'HP') . ")";
            return $item;
        });

        return Inertia::render('TransaksiPembayaran/Index', compact('transaksi', 'filters', 'pekerjaan_servis_list'));
    }

    public function store(Request $request)
    {
        $this->service->store($request->all());
        return redirect()->back()->with('message', 'Transaksi berhasil disimpan!'); 
    }

    public function update(Request $request, $id)
    {
        $this->service->update($request->all(), $id);
        return redirect()->back()->with('message', 'Transaksi berhasil diubah!');
    }

    public function destroy($id)
    {
        $this->service->delete($id);
        return redirect()->back()->with('message', 'Transaksi berhasil dihapus!');
    }
}
