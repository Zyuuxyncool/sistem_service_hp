<?php

namespace App\Http\Controllers\Admin;

use App\Services\SukuCadangService;

use App\Services\PekerjaanServisService;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\DetailPenggunaanPartService;
use Inertia\Inertia;

class DetailPenggunaanPartController extends Controller
{
    protected $service, $pekerjaanServisService, $sukuCadangService;
    
    public function __construct()
    {
        $this->service = new DetailPenggunaanPartService();
        $this->pekerjaanServisService = new PekerjaanServisService();
        $this->sukuCadangService = new SukuCadangService();
    }

    public function index(Request $request)
    {
        $detail_penggunaan_part = $this->service->search($request->all());
        $filters = $request->only(['pekerjaan_servis_id', 'suku_cadang_id']);

        $pekerjaan_servis_list = $this->pekerjaanServisService->search(['limit' => 1000, 'with' => 'pelanggan'])->map(function($item) {
            $item->id_label = ($item->pelanggan->nama_pelanggan ?? 'Unknown') . " - (Service #" . $item->id . " / " . ($item->tipe_hp ?? 'HP') . ")";
            return $item;
        });
        $suku_cadang_list = $this->sukuCadangService->search(['limit' => 1000]);

        return Inertia::render('DetailPenggunaanPart/Index', compact('detail_penggunaan_part', 'filters', 'pekerjaan_servis_list', 'suku_cadang_list'));
    }

    public function store(Request $request)
    {
        $this->service->store($request->all());
        return redirect()->back()->with('message', 'Penggunaan Part berhasil disimpan!'); 
    }

    public function update(Request $request, $id)
    {
        $this->service->update($request->all(), $id);
        return redirect()->back()->with('message', 'Penggunaan Part berhasil diubah!');
    }

    public function destroy($id)
    {
        $this->service->delete($id);
        return redirect()->back()->with('message', 'Penggunaan Part berhasil dihapus!');
    }
}
