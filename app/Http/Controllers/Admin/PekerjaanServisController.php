<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\PekerjaanServisService;
use Inertia\Inertia;

class PekerjaanServisController extends Controller
{
    protected $service;
    
    public function __construct()
    {
        $this->service = new PekerjaanServisService();
        Inertia::share('list_status', $this->service->list_status());
    }

    public function index(Request $request)
    {
        $pekerjaan_servis = $this->service->search($request->all());
        $filters = $request->only(['status_servis', 'tipe_hp']);

        return Inertia::render('PekerjaanServis/Index', compact('pekerjaan_servis', 'filters'));
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
