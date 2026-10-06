<?php
namespace App\Services;

use App\Models\SukuCadang;

class SukuCadangService extends Service
{
    public function search($params = [])
    {
        $suku_cadang = SukuCadang::query()->orderBy('id');

        $nama_barang = $params['nama_barang'] ?? '';
        if ($nama_barang !== '') $suku_cadang->where('nama_barang', 'like', "%{$nama_barang}%");

        $suku_cadang = $this->searchFilter($params, $suku_cadang, []);

        return $this->searchResponse($params, $suku_cadang);
    }

    public function find($value, $column = 'id')
    {
        return SukuCadang::where($column, $value)->first();
    }

    public function store($params)
    {
        return SukuCadang::create($params);
    }

    public function update($params, $id)
    {
        $suku_cadang = SukuCadang::find($id);
        if ($suku_cadang) {
            $suku_cadang->update($params);
        }
        return $suku_cadang;
    }

    public function delete($id)
    {
        $suku_cadang = SukuCadang::find($id);
        if ($suku_cadang) {
            try {
                $suku_cadang->delete();
            } catch (\Exception $e) {
                return ['error' => 'Delete failed! This data currently being used'];
            }
        }
        return $suku_cadang;
    }

    public function dropdown($params = []): array
    {
        $params['limit'] = $params['limit'] ?? 100;
        $result = [];
        foreach ($this->search($params) as $key => $value) {
            $label = $value->nama_barang ?? ("#" . $value->id);
            $result[$value->id] = $label;
        }
        return $result;
    }

    public function getLowStockCount($threshold = 10)
    {
        return SukuCadang::where('jumlah_stok', '<=', $threshold)->count();
    }
}
