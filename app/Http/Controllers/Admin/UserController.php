<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\UserService;
use Inertia\Inertia;

class UserController extends Controller
{
    protected $service;
    
    public function __construct()
    {
        $this->service = new UserService();
        Inertia::share('list_akses', $this->service->list_akses());
    }

    public function index(Request $request)
    {
        $users = $this->service->search($request->all());
        $filters = $request->only(['name', 'email']);

        return Inertia::render('User/Index', compact('users', 'filters'));
    }

    public function store(Request $request)
    {
        $this->service->store($request->all());
        return redirect()->back()->with('message', 'Data User berhasil disimpan!'); 
    }

    public function update(Request $request, $id)
    {
        $this->service->update($request->all(), $id);
        return redirect()->back()->with('message', 'Data User berhasil diubah!');
    }

    public function destroy($id)
    {
        $this->service->delete($id);
        return redirect()->back()->with('message', 'Data User berhasil dihapus!');
    }
}
