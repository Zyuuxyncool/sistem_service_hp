<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MetodePembayaran extends Model
{
    protected $fillable = [
        'nama',
        'foto_qris',
        'no_rekening',
        'atas_nama',
        'is_active',
    ];
}
