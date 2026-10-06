<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\PelangganService;
use Inertia\Inertia;

class PelangganController extends Controller
{
    protected $service;
    
    public function __construct()
    {
        $this->service = new PelangganService();
    }

    public function index(Request $request)
    {
        $pelanggan = $this->service->search($request->all());
        $filters = $request->only(['nama', 'no_wa']);

        return Inertia::render('Pelanggan/Index', compact('pelanggan', 'filters'));
    }

    public function store(Request $request)
    {
        $this->service->store($request->all());
        return redirect()->back()->with('message', 'Data Pelanggan berhasil disimpan!'); 
    }

    public function update(Request $request, $id)
    {
        $this->service->update($request->all(), $id);
        return redirect()->back()->with('message', 'Data Pelanggan berhasil diubah!');
    }

    public function destroy($id)
    {
        $this->service->delete($id);
        return redirect()->back()->with('message', 'Data Pelanggan berhasil dihapus!');
    }
}
