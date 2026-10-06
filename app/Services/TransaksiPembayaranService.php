<?php
namespace App\Services;

use App\Models\TransaksiPembayaran;

class TransaksiPembayaranService extends Service
{
    public function search($params = [])
    {
        $transaksi = TransaksiPembayaran::query()->orderBy('id');

        $metode_bayar = $params['metode_bayar'] ?? '';
        if ($metode_bayar !== '') $transaksi->where('metode_bayar', 'like', "%{$metode_bayar}%");

        $transaksi = $this->searchFilter($params, $transaksi, ['pekerjaan_servis_id', 'user_id', 'status_pembayaran']);

        return $this->searchResponse($params, $transaksi);
    }

    public function find($value, $column = 'id')
    {
        return TransaksiPembayaran::where($column, $value)->first();
    }

    public function store($params)
    {
        return TransaksiPembayaran::create($params);
    }

    public function update($params, $id)
    {
        $transaksi = TransaksiPembayaran::find($id);
        if ($transaksi) {
            $transaksi->update($params);
        }
        return $transaksi;
    }

    public function delete($id)
    {
        $transaksi = TransaksiPembayaran::find($id);
        if ($transaksi) {
            try {
                $transaksi->delete();
            } catch (\Exception $e) {
                return ['error' => 'Delete failed! This data currently being used'];
            }
        }
        return $transaksi;
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

    public function list_status()
    {
        return TransaksiPembayaran::STATUS_PEMBAYARAN;
    }
}
