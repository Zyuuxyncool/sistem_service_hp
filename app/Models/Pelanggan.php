<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelanggan extends Model
{
    protected $table = 'pelanggan';
    
    protected $fillable = [
        'nama_pelanggan',
        'nomor_wa',
        'alamat',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function pekerjaanServis()
    {
        return $this->hasMany(PekerjaanServis::class, 'pelanggan_id', 'id');
    }
}
