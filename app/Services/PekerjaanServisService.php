<?php
namespace App\Services;

use App\Models\PekerjaanServis;

class PekerjaanServisService extends Service
{
    public function search($params = [])
    {
        $pekerjaan = PekerjaanServis::query()->with(['pelanggan'])->orderBy('id');

        $tipe_hp = $params['tipe_hp'] ?? '';
        if ($tipe_hp !== '') $pekerjaan->where('tipe_hp', 'like', "%{$tipe_hp}%");

        $nomor_imei = $params['nomor_imei'] ?? '';
        if ($nomor_imei !== '') $pekerjaan->where('nomor_imei', 'like', "%{$nomor_imei}%");

        $keluhan = $params['keluhan'] ?? '';
        if ($keluhan !== '') $pekerjaan->where('keluhan', 'like', "%{$keluhan}%");

        $pekerjaan = $this->searchFilter($params, $pekerjaan, ['pelanggan_id', 'status_servis']);

        return $this->searchResponse($params, $pekerjaan);
    }

    public function find($value, $column = 'id')
    {
        return PekerjaanServis::where($column, $value)->first();
    }

    public function store($params)
    {
        return PekerjaanServis::create($params);
    }

    public function update($params, $id)
    {
        $pekerjaan = PekerjaanServis::find($id);
        if ($pekerjaan) {
            $pekerjaan->update($params);
        }
        return $pekerjaan;
    }

    public function delete($id)
    {
        $pekerjaan = PekerjaanServis::find($id);
        if ($pekerjaan) {
            try {
                $pekerjaan->delete();
            } catch (\Exception $e) {
                return ['error' => 'Delete failed! This data currently being used'];
            }
        }
        return $pekerjaan;
    }

    public function dropdown($params = []): array
    {
        $params['limit'] = $params['limit'] ?? 100;
        $result = [];
        foreach ($this->search($params) as $key => $value) {
            $label = $value->tipe_hp ?? ("#" . $value->id);
            $result[$value->id] = $label;
        }
        return $result;
    }

    public function list_status()
    {
        return PekerjaanServis::STATUS_SERVIS;
    }

    public function getActiveCount()
    {
        return PekerjaanServis::whereIn('status_servis', [1, 2, 3])->count();
    }

    public function getRecentActivity($limit = 5)
    {
        return PekerjaanServis::with(['pelanggan'])
            ->orderBy('created_at', 'desc')
            ->take($limit)
            ->get()
            ->map(function ($servis) {
                return [
                    'id' => $servis->id,
                    'pelanggan' => $servis->pelanggan->nama_pelanggan ?? 'Unknown',
                    'tipe_hp' => $servis->tipe_hp,
                    'status_id' => $servis->status_servis,
                    'status_text' => PekerjaanServis::STATUS_SERVIS[$servis->status_servis] ?? 'Unknown',
                    'keluhan' => $servis->keluhan,
                    'waktu' => $servis->created_at->diffForHumans(),
                ];
            });
    }
}
