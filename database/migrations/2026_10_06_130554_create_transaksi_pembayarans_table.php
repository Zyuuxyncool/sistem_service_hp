<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('transaksi_pembayaran', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pekerjaan_servis_id')->constrained('pekerjaan_servis')->onDelete('cascade');
            $table->integer('total_bayar');
            $table->string('metode_bayar'); // Tunai, Transfer, dll
            $table->smallInteger('status_pembayaran')->default(1);
            $table->timestamp('waktu_bayar')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('transaksi_pembayaran');
    }
};
