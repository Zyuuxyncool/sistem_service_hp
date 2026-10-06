<?php
namespace App\Services;

use App\Models\Pelanggan;

class PelangganService extends Service
{
    public function search($params = [])
    {
        $pelanggan = Pelanggan::query()->with([])->orderBy('id');

        $nama_pelanggan = $params['nama_pelanggan'] ?? '';
        if ($nama_pelanggan !== '') $pelanggan->where('nama_pelanggan', 'like', "%{$nama_pelanggan}%");

        $nomor_wa = $params['nomor_wa'] ?? '';
        if ($nomor_wa !== '') $pelanggan->where('nomor_wa', 'like', "%{$nomor_wa}%");

        $pelanggan = $this->searchFilter($params, $pelanggan, []);

        return $this->searchResponse($params, $pelanggan);
    }

    public function find($value, $column = 'id')
    {
        return Pelanggan::where($column, $value)->first();
    }

    public function store($params)
    {
        return Pelanggan::create($params);
    }

    public function update($params, $id)
    {
        $pelanggan = Pelanggan::find($id);
        if ($pelanggan) {
            $pelanggan->update($params);
        }
        return $pelanggan;
    }

    public function delete($id)
    {
        $pelanggan = Pelanggan::find($id);
        if ($pelanggan) {
            try {
                $pelanggan->delete();
            } catch (\Exception $e) {
                return ['error' => 'Delete failed! This data currently being used'];
            }
        }
        return $pelanggan;
    }

    public function dropdown($params = []): array
    {
        $params['limit'] = $params['limit'] ?? 100;
        $result = [];
        foreach ($this->search($params) as $key => $value) {
            $label = $value->nama_pelanggan ?? ("#" . $value->id);
            $result[$value->id] = $label;
        }
        return $result;
    }
}
