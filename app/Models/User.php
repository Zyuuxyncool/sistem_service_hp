<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'google_id',
        'avatar',
        'akses',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // Konstanta Hak Akses Pegawai/Pengguna
    public const HAK_AKSES = [
        1 => 'Admin',
        2 => 'Pelanggan',
    ];

    public function pelanggan()
    {
        return $this->hasOne(Pelanggan::class, 'user_id', 'id');
    }

    public function pekerjaanServis()
    {
        return $this->hasMany(PekerjaanServis::class, 'user_id', 'id');
    }

    public function transaksiPembayaran()
    {
        return $this->hasMany(TransaksiPembayaran::class, 'user_id', 'id');
    }
}
