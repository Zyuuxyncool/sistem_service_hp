<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailPenggunaanPart extends Model
{
    protected $table = 'detail_penggunaan_part';
    
    protected $fillable = [
        'pekerjaan_servis_id',
        'suku_cadang_id',
        'jumlah_dipakai',
        'subtotal_harga'
    ];

    public function pekerjaanServis()
    {
        return $this->belongsTo(PekerjaanServis::class, 'pekerjaan_servis_id', 'id');
    }

    public function sukuCadang()
    {
        return $this->belongsTo(SukuCadang::class, 'suku_cadang_id', 'id');
    }
}
