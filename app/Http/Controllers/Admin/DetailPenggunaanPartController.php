<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\DetailPenggunaanPartService;
use Inertia\Inertia;

class DetailPenggunaanPartController extends Controller
{
    protected $service;
    
    public function __construct()
    {
        $this->service = new DetailPenggunaanPartService();
    }

    public function index(Request $request)
    {
        $detail_penggunaan_part = $this->service->search($request->all());
        $filters = $request->only(['pekerjaan_servis_id', 'suku_cadang_id']);

        return Inertia::render('DetailPenggunaanPart/Index', compact('detail_penggunaan_part', 'filters'));
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
