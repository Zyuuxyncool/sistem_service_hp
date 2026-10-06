<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\SukuCadangService;
use Inertia\Inertia;

class SukuCadangController extends Controller
{
    protected $service;
    
    public function __construct()
    {
        $this->service = new SukuCadangService();
    }

    public function index(Request $request)
    {
        $suku_cadang = $this->service->search($request->all());
        $filters = $request->only(['nama_barang']);

        return Inertia::render('SukuCadang/Index', compact('suku_cadang', 'filters'));
    }

    public function store(Request $request)
    {
        $this->service->store($request->all());
        return redirect()->back()->with('message', 'Suku Cadang berhasil disimpan!'); 
    }

    public function update(Request $request, $id)
    {
        $this->service->update($request->all(), $id);
        return redirect()->back()->with('message', 'Suku Cadang berhasil diubah!');
    }

    public function destroy($id)
    {
        $this->service->delete($id);
        return redirect()->back()->with('message', 'Suku Cadang berhasil dihapus!');
    }
}
