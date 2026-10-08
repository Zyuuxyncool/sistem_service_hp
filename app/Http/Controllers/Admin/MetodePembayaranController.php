<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MetodePembayaran;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MetodePembayaranController extends Controller
{
    public function index(Request $request)
    {
        $query = MetodePembayaran::query();

        if ($request->has('nama') && $request->nama != '') {
            $query->where('nama', 'like', '%' . $request->nama . '%');
        }

        $metodePembayaran = $query->latest()->paginate(10);
        $filters = $request->only(['nama']);

        return Inertia::render('MetodePembayaran/Index', compact('metodePembayaran', 'filters'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'no_rekening' => 'nullable|string|max:255',
            'atas_nama' => 'nullable|string|max:255',
            'foto_qris' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $data = $request->except('foto_qris');
        $data['is_active'] = $request->boolean('is_active', true);

        if ($request->hasFile('foto_qris')) {
            $data['foto_qris'] = $request->file('foto_qris')->store('qris', 'public');
        }

        MetodePembayaran::create($data);

        return redirect()->back()->with('message', 'Data Metode Pembayaran berhasil disimpan!');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'no_rekening' => 'nullable|string|max:255',
            'atas_nama' => 'nullable|string|max:255',
            'foto_qris' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $metode = MetodePembayaran::findOrFail($id);
        $data = $request->except('foto_qris');
        $data['is_active'] = $request->boolean('is_active', true);

        if ($request->hasFile('foto_qris')) {
            if ($metode->foto_qris) {
                Storage::disk('public')->delete($metode->foto_qris);
            }
            $data['foto_qris'] = $request->file('foto_qris')->store('qris', 'public');
        }

        $metode->update($data);

        return redirect()->back()->with('message', 'Data Metode Pembayaran berhasil diubah!');
    }

    public function destroy($id)
    {
        $metode = MetodePembayaran::findOrFail($id);
        if ($metode->foto_qris) {
            Storage::disk('public')->delete($metode->foto_qris);
        }
        $metode->delete();

        return redirect()->back()->with('message', 'Data Metode Pembayaran berhasil dihapus!');
    }
}
