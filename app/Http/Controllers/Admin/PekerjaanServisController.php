<?php

namespace App\Http\Controllers\Admin;

use App\Services\PelangganService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\PekerjaanServisService;
use Inertia\Inertia;

class PekerjaanServisController extends Controller
{
    protected $service, $pelangganService;
    
    public function __construct()
    {
        $this->service = new PekerjaanServisService();
        $this->pelangganService = new PelangganService();
        Inertia::share('list_status', $this->service->list_status());
    }

    public function index(Request $request)
    {
        $pekerjaan_servis = $this->service->search($request->all());
        $filters = $request->only(['status_servis', 'tipe_hp']);

        $pelanggan_list = $this->pelangganService->search(['limit' => 1000]);

        return Inertia::render('PekerjaanServis/Index', compact('pekerjaan_servis', 'filters', 'pelanggan_list'));
    }

    public function store(Request $request)
    {
        $this->service->store($request->all());
        return redirect()->back()->with('message', 'Pekerjaan Servis berhasil disimpan!'); 
    }

    public function update(Request $request, $id)
    {
        $this->service->update($request->all(), $id);
        return redirect()->back()->with('message', 'Pekerjaan Servis berhasil diubah!');
    }

    public function destroy($id)
    {
        $this->service->delete($id);
        return redirect()->back()->with('message', 'Pekerjaan Servis berhasil dihapus!');
    }
}
