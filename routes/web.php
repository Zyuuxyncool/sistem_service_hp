<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Landing/Index')->name('home');
Route::inertia('/layanan', 'Landing/Layanan')->name('layanan');
Route::inertia('/prosedur', 'Landing/Prosedur')->name('prosedur');



Route::middleware(['auth', 'verified', 'io'])->group(function () {
    Route::get('/dashboard', function (Illuminate\Http\Request $request) {
        $role = $request->user()->akses ?? '';
        return redirect()->route((new \App\Services\MenuService())->home_route($role));
    })->name('dashboard');

    Route::prefix('admin')->name('admin')->group(base_path('routes/admin.php'));
    Route::prefix('pelanggan')->name('pelanggan')->group(base_path('routes/pelanggan.php'));
});

require __DIR__.'/settings.php';
