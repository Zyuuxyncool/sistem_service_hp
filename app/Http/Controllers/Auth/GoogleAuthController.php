<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            $user = User::where('google_id', $googleUser->id)->orWhere('email', $googleUser->email)->first();

            if (!$user) {
                $user = User::create([
                    'name' => $googleUser->name,
                    'email' => $googleUser->email,
                    'google_id' => $googleUser->id,
                    'avatar' => $googleUser->avatar,
                    'password' => Hash::make(Str::random(16)),
                    'akses' => 'Pelanggan', 
                ]);

                \App\Models\Pelanggan::create([
                    'user_id' => $user->id,
                    'nama_pelanggan' => $googleUser->name,
                    'nomor_wa' => '', 
                    'alamat' => '',
                ]);
            } else {
                $user->update([
                    'google_id' => $googleUser->id,
                    'avatar' => $googleUser->avatar,
                ]);
            }
            
            if (!$user->pelanggan) {
                \App\Models\Pelanggan::create([
                    'user_id' => $user->id,
                    'nama_pelanggan' => $user->name,
                    'nomor_wa' => '', 
                    'alamat' => '',
                ]);
                // Refresh relasi
                $user->load('pelanggan');
            }

            Auth::login($user);

            return redirect()->route('dashboard');

        } catch (\Exception $e) {
            return redirect()->route('login')->with('error', 'Gagal login menggunakan Google. Pesan: ' . $e->getMessage());
        }
    }
}
