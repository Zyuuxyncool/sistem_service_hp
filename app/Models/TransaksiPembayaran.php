<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransaksiPembayaran extends Model
{
    protected $table = 'transaksi_pembayaran';
    
    protected $fillable = [
        'pekerjaan_servis_id',
        'user_id',
        'total_bayar',
        'metode_bayar',
        'status_pembayaran',
        'waktu_bayar'
    ];

    public const STATUS_PEMBAYARAN = [
        1 => 'Belum Bayar',
        2 => 'Lunas'
    ];

    public function pekerjaanServis()
    {
        return $this->belongsTo(PekerjaanServis::class, 'pekerjaan_servis_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
