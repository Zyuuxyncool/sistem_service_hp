<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\DashboardController::class, 'index']);

Route::name('.')->group(function () {
    // Data Master
    Route::resource('pelanggan', App\Http\Controllers\Admin\PelangganController::class);
    Route::resource('suku_cadang', App\Http\Controllers\Admin\SukuCadangController::class);

    // Transaksi Servis
    Route::resource('pekerjaan_servis', App\Http\Controllers\Admin\PekerjaanServisController::class);
    Route::resource('detail_penggunaan_part', App\Http\Controllers\Admin\DetailPenggunaanPartController::class);
    Route::resource('transaksi_pembayaran', App\Http\Controllers\Admin\TransaksiPembayaranController::class);

    // Pengaturan
    Route::resource('user', App\Http\Controllers\Admin\UserController::class);
});
