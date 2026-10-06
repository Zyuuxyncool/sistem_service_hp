<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\TransaksiPembayaranService;
use Inertia\Inertia;

class TransaksiPembayaranController extends Controller
{
    protected $service;
    
    public function __construct()
    {
        $this->service = new TransaksiPembayaranService();
        Inertia::share('list_status', $this->service->list_status());
    }

    public function index(Request $request)
    {
        $transaksi = $this->service->search($request->all());
        $filters = $request->only(['metode_bayar']);

        return Inertia::render('TransaksiPembayaran/Index', compact('transaksi', 'filters'));
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
