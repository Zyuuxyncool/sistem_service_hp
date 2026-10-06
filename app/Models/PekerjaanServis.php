<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PekerjaanServis extends Model
{
    protected $table = 'pekerjaan_servis';
    
    protected $fillable = [
        'pelanggan_id',
        'user_id',
        'tipe_hp',
        'nomor_imei',
        'keluhan',
        'biaya_jasa',
        'status_servis',
        'catatan_teknisi',
        'lama_garansi',
        'batas_garansi'
    ];

    public const STATUS_SERVIS = [
        1 => 'Diterima',
        2 => 'Sedang Dikerjakan',
        3 => 'Menunggu Sparepart',
        4 => 'Selesai',
        5 => 'Diambil / Lunas',
        6 => 'Batal'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function pelanggan()
    {
        return $this->belongsTo(Pelanggan::class, 'pelanggan_id', 'id');
    }

    public function detailPenggunaanPart()
    {
        return $this->hasMany(DetailPenggunaanPart::class, 'pekerjaan_servis_id', 'id');
    }

    public function transaksiPembayaran()
    {
        return $this->hasOne(TransaksiPembayaran::class, 'pekerjaan_servis_id', 'id');
    }
}
