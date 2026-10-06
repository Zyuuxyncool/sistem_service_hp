<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SukuCadang extends Model
{
    protected $table = 'suku_cadang';
    
    protected $fillable = [
        'nama_barang',
        'jumlah_stok',
        'harga_modal',
        'harga_jual'
    ];

    public function riwayatPenggunaan()
    {
        return $this->hasMany(DetailPenggunaanPart::class, 'suku_cadang_id', 'id');
    }
}
