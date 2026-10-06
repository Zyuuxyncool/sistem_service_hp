<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\User;
use App\Models\Pelanggan;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules, ProfileValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            ...$this->profileRules(),
            'password' => $this->passwordRules(),
        ])->validate();

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => $input['password'],
            'akses' => 'Pelanggan', // Default untuk registrasi mandiri
        ]);

        // Buat data pelanggan kosong untuk profil mereka nanti
        Pelanggan::create([
            'user_id' => $user->id,
            'nama_pelanggan' => $input['name'],
            'nomor_wa' => '', // Bisa diisi nanti di profil pelanggan
            'alamat' => '',
        ]);

        return $user;
    }
}
