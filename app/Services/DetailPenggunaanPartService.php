<?php
namespace App\Services;

use App\Models\DetailPenggunaanPart;

class DetailPenggunaanPartService extends Service
{
    public function search($params = [])
    {
        $detail = DetailPenggunaanPart::query()->with(['pekerjaanServis.pelanggan', 'sukuCadang'])->orderBy('id');

        $detail = $this->searchFilter($params, $detail, ['pekerjaan_servis_id', 'suku_cadang_id']);

        return $this->searchResponse($params, $detail);
    }

    public function find($value, $column = 'id')
    {
        return DetailPenggunaanPart::where($column, $value)->first();
    }

    public function store($params)
    {
        return DetailPenggunaanPart::create($params);
    }

    public function update($params, $id)
    {
        $detail = DetailPenggunaanPart::find($id);
        if ($detail) {
            $detail->update($params);
        }
        return $detail;
    }

    public function delete($id)
    {
        $detail = DetailPenggunaanPart::find($id);
        if ($detail) {
            try {
                $detail->delete();
            } catch (\Exception $e) {
                return ['error' => 'Delete failed! This data currently being used'];
            }
        }
        return $detail;
    }

    public function dropdown($params = []): array
    {
        $params['limit'] = $params['limit'] ?? 100;
        $result = [];
        foreach ($this->search($params) as $key => $value) {
            $label = "#" . $value->id;
            $result[$value->id] = $label;
        }
        return $result;
    }
}
