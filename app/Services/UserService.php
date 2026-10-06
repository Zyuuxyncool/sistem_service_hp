<?php
namespace App\Services;

use App\Models\User;

class UserService extends Service
{
    public function search($params = [])
    {
        $user = User::query()->orderBy('id');

        $name = $params['name'] ?? '';
        if ($name !== '') $user->where('name', 'like', "%{$name}%");

        $email = $params['email'] ?? '';
        if ($email !== '') $user->where('email', 'like', "%{$email}%");

        $user = $this->searchFilter($params, $user, ['akses']);

        return $this->searchResponse($params, $user);
    }

    public function find($value, $column = 'id')
    {
        return User::where($column, $value)->first();
    }

    public function exists_by_email($email)
    {
        if (empty($email)) {
            return false;
        }

        return User::where('email', $email)->exists();
    }

    public function store($params)
    {
        $params = $this->clean_password($params);
        return User::create($params);
    }

    public function update($params, $id)
    {
        $params = $this->clean_password($params);
        $user = User::find($id);
        if ($user) {
            $user->update($params);
        }
        return $user;
    }

    public function delete($id)
    {
        $user = User::find($id);
        if ($user) {
            try {
                $user->delete();
            } catch (\Exception $e) {
                return ['error' => 'Delete failed! This data currently being used'];
            }
        }
        return $user;
    }

    public function dropdown($params = []): array
    {
        $params['limit'] = $params['limit'] ?? 100;
        $result = [];
        foreach ($this->search($params) as $key => $value) {
            $label = $value->name ?? ("#" . $value->id);
            $result[$value->id] = $label;
        }
        return $result;
    }

    public function clean_password($params)
    {
        $password = $params['password'] ?? '';
        if ($password === '') {
            unset($params['password']);
        } else {
            $params['password'] = bcrypt($password);
        }
        return $params;
    }

    public function list_akses()
    {
        return User::HAK_AKSES;
    }
}
