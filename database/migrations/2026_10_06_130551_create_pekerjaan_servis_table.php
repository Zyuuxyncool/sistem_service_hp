<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('pekerjaan_servis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pelanggan_id')->constrained('pelanggan')->onDelete('cascade');
            $table->string('tipe_hp');
            $table->string('nomor_imei')->nullable();
            $table->text('keluhan');
            $table->integer('biaya_jasa')->default(0);
            $table->smallInteger('status_servis')->default(1);
            $table->text('catatan_teknisi')->nullable();
            $table->integer('lama_garansi')->default(0); // dalam hari
            $table->date('batas_garansi')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pekerjaan_servis');
    }
};
