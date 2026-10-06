# Kode Lengkap Migration & Model - Sistem Service HP

Dokumen ini berisi seluruh skema database (Migration) dan struktur Eloquent (Model), termasuk penambahan tabel `users` untuk sistem otentikasi Google dan pengaturan Hak Akses.

---

## BAGIAN 1: FILE MIGRATION

Pastikan urutan pembuatan file migration mengikuti urutan di bawah ini agar relasi (`foreignId`) tidak bermasalah.

### A. Migration `users`
Tabel standar Laravel yang dimodifikasi untuk dukungan login Google dan Hak Akses.
```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable(); // Dibuat nullable karena bisa login via Google
            $table->string('google_id')->nullable()->unique(); // Menyimpan ID dari Google
            $table->string('avatar')->nullable(); // Menyimpan foto profil Google
            $table->smallInteger('akses'); 
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user');
    }
};
```

### B. Migration `pelanggan`
```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('pelanggan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('user')->onDelete('cascade');
            $table->string('nama_pelanggan');
            $table->string('nomor_wa');
            $table->text('alamat')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pelanggan');
    }
};
```

### C. Migration `pekerjaan_servis`
```php
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
            $table->foreignId('user_id')->nullable()->constrained('user')->onDelete('set null'); // teknisi/admin yang menangani
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
```

### D. Migration `suku_cadang`
```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('suku_cadang', function (Blueprint $table) {
            $table->id();
            $table->string('nama_barang');
            $table->integer('jumlah_stok')->default(0);
            $table->integer('harga_modal');
            $table->integer('harga_jual');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('suku_cadang');
    }
};
```

### E. Migration `detail_penggunaan_part`
```php
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
```

### F. Migration `transaksi_pembayaran`
```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('transaksi_pembayaran', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pekerjaan_servis_id')->constrained('pekerjaan_servis')->onDelete('cascade');
            $table->foreignId('user_id')->nullable()->constrained('user')->onDelete('set null'); // kasir yang menerima pembayaran
            $table->integer('total_bayar');
            $table->string('metode_bayar'); // Tunai, Transfer, dll
            $table->smallInteger('status_pembayaran')->default(1);
            $table->timestamp('waktu_bayar')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('transaksi_pembayaran');
    }
};
```

---

## BAGIAN 2: FILE MODEL

### A. `app/Models/User.php`
```php
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
```

### B. `app/Models/Pelanggan.php`
```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelanggan extends Model
{
    protected $table = 'pelanggan';
    
    protected $fillable = [
        'user_id',
        'nama_pelanggan',
        'nomor_wa',
        'alamat'
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
```

### C. `app/Models/PekerjaanServis.php`
```php
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
```

### D. `app/Models/SukuCadang.php`
```php
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
```

### E. `app/Models/DetailPenggunaanPart.php`
```php
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
```

### F. `app/Models/TransaksiPembayaran.php`
```php
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
```