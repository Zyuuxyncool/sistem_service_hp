<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Pelanggan\DashboardController::class, 'index']);

Route::name('.')->group(function () {
    // Pendaftaran Servis
    Route::get('/pendaftaran-servis', [\App\Http\Controllers\Pelanggan\PendaftaranServisController::class, 'index'])->name('pendaftaran_servis.index');
    Route::post('/pendaftaran-servis', [\App\Http\Controllers\Pelanggan\PendaftaranServisController::class, 'store'])->name('pendaftaran_servis.store');

    // Riwayat Servis
    Route::get('/riwayat-servis', [\App\Http\Controllers\Pelanggan\RiwayatServisController::class, 'index'])->name('riwayat_servis.index');
    Route::post('/riwayat-servis/{id}/bayar', [\App\Http\Controllers\Pelanggan\RiwayatServisController::class, 'bayar'])->name('riwayat_servis.bayar');
    Route::post('/riwayat-servis/{id}/cancel', [\App\Http\Controllers\Pelanggan\RiwayatServisController::class, 'cancel'])->name('riwayat_servis.cancel');

    // Penilaian (Kosong dulu)
    Route::inertia('/penilaian-servis', 'Pelanggan/Penilaian/Index')->name('penilaian_servis.index');
    
    // Katalog (Kosong dulu)
    Route::inertia('/katalog', 'Pelanggan/Katalog/Index')->name('katalog.index');
});
