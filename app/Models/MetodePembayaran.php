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

    protected $appends = ['foto_qris_url'];

    public function getFotoQrisUrlAttribute()
    {
        return $this->foto_qris ? \Illuminate\Support\Facades\Storage::disk('s3')->url($this->foto_qris) : null;
    }
}
