<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('detail_penggunaan_part', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pekerjaan_servis_id')->constrained('pekerjaan_servis')->onDelete('cascade');
            $table->foreignId('suku_cadang_id')->constrained('suku_cadang')->onDelete('cascade');
            $table->integer('jumlah_dipakai')->default(1);
            $table->integer('subtotal_harga');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('detail_penggunaan_part');
    }
};
