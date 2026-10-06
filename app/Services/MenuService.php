<?php

namespace App\Services;

class MenuService
{
    protected static array $admin = [
        'admin' => ['route' => 'admin', 'caption' => 'Dashboard', 'icon' => 'home', 'show_mobile' => true],
        
        'master' => ['route' => '#', 'caption' => 'Data Master', 'icon' => 'cube', 'show_mobile' => true, 'sub_menus' => [
            'pelanggan' => ['route' => 'admin.pelanggan.index', 'caption' => 'Pelanggan'],
            'suku_cadang' => ['route' => 'admin.suku_cadang.index', 'caption' => 'Suku Cadang'],
        ]],

        'transaksi' => ['route' => '#', 'caption' => 'Transaksi Service', 'icon' => 'build', 'show_mobile' => true, 'sub_menus' => [
            'pekerjaan_servis' => ['route' => 'admin.pekerjaan_servis.index', 'caption' => 'Pekerjaan Service'],
            'penggunaan_part' => ['route' => 'admin.detail_penggunaan_part.index', 'caption' => 'Penggunaan Part'],
            'transaksi_pembayaran' => ['route' => 'admin.transaksi_pembayaran.index', 'caption' => 'Pembayaran'],
        ]],

        'pengaturan' => ['route' => '#', 'caption' => 'Pengaturan', 'icon' => 'settings', 'show_mobile' => true, 'sub_menus' => [
            'user' => ['route' => 'admin.user.index', 'caption' => 'Data User'],
        ]],
    ];

    protected static array $pelanggan = [
        'pelanggan' => ['route' => 'pelanggan', 'caption' => 'Beranda', 'icon' => 'home', 'show_mobile' => true],
        'perbaikan' => ['route' => '#', 'caption' => 'Layanan Servis', 'icon' => 'build', 'show_mobile' => true, 'sub_menus' => [
            'pendaftaran_servis' => ['route' => 'pelanggan.pendaftaran_servis.index', 'caption' => 'Pendaftaran Servis'],
            'riwayat_servis' => ['route' => 'pelanggan.riwayat_servis.index', 'caption' => 'Riwayat Servis'],
            'penilaian_servis' => ['route' => 'pelanggan.penilaian_servis.index', 'caption' => 'Penilaian Servis'],
        ]],
    ];

    public function list_menu($role, $user = null): array 
    {
        $menus = match ($role) {
            'Admin' => self::$admin,
            'Pelanggan' => self::$pelanggan,
            default => [],
        };
        return $menus;
    }

    public static function match_params($menu_params, $current_params) {
        $menu_params = $menu_params ?? [];
        foreach ($menu_params as $key => $value) {
            if (!array_key_exists($key, $current_params) || $current_params[$key] != $value) {
                return false;
            }
        }
        return true;
    }

    public static function current_menu($menus, $current_route, $role_active, $current_route_params = []) {
        $breadcrumbs = [['route' => head(explode('.', $current_route)), 'caption' => $role_active]];

        $current_menu = [];
        $current_sub_menu = [];
        $current_side_menu = [];
        $current_right_menu = [];
        
        foreach ($menus as $menu) {
            if ($menu['route'] === $current_route && self::match_params(($menu['params'] ?? []), $current_route_params)) {
                $current_menu = $menu;
                $breadcrumbs[] = $menu;
            }
            foreach ($menu['sub_menus'] ?? [] as $sub_menu) {
                if ($sub_menu['route'] === $current_route && self::match_params(($sub_menu['params'] ?? []), $current_route_params)) {
                    $current_menu = $menu;
                    $current_sub_menu = $sub_menu;
                    if ($sub_menu['route'] !== $menu['route'] || ($sub_menu['params'] ?? []) != ($menu['params'] ?? [])) $breadcrumbs[] = $sub_menu;
                }
                foreach ($sub_menu['side_menus'] ?? [] as $side_menu) {
                    if ($side_menu['route'] === $current_route && self::match_params(($side_menu['params'] ?? []), $current_route_params)) {
                        $current_menu = $menu;
                        $current_sub_menu = $sub_menu;
                        $current_side_menu = $side_menu;
                        $breadcrumbs[] = $sub_menu;
                        $breadcrumbs[] = $side_menu;
                    }
                }
                foreach ($sub_menu['right_menus'] ?? [] as $right_menu) {
                    if ($right_menu['route'] === $current_route && self::match_params(($right_menu['params'] ?? []), $current_route_params)) {
                        $current_menu = $menu;
                        $current_sub_menu = $sub_menu;
                        $current_right_menu = $right_menu;
                        $breadcrumbs[] = $sub_menu;
                        $breadcrumbs[] = $right_menu;
                    }
                }
            }
            foreach ($menu['side_menus'] ?? [] as $side_menu) {
                if ($side_menu['route'] === $current_route && self::match_params(($side_menu['params'] ?? []), $current_route_params)) {
                    $current_menu = $menu;
                    $current_side_menu = $side_menu;
                    if (last($breadcrumbs)['route'] !== $menu['route']) $breadcrumbs[] = $menu;
                    if ($side_menu['route'] !== $menu['route'] || ($side_menu['params'] ?? []) !== ($menu['params'] ?? [])) $breadcrumbs[] = $side_menu;
                }
            }
        }

        if (empty($current_menu)) {
            $temp = explode('.', $current_route);
            if (last($temp) === 'show' || last($temp) === 'create' || last($temp) === 'edit') {
                $temp[count($temp) - 1] = 'index';
                $current_route = join('.', $temp);
                return self::current_menu($menus, $current_route, $role_active, $current_route_params);
            } else {
                if (count($temp) > 2) {
                    array_splice($temp, count($temp) - 2, 1);
                    $current_route = join('.', $temp);
                    return self::current_menu($menus, $current_route, $role_active, $current_route_params);
                }
            }
        }

        $current = $current_side_menu ?: ($current_sub_menu ?: $current_menu);
        $actions = $current['actions'] ?? [];

        return [
            'current_menu' => $current_menu,
            'current_sub_menu' => $current_sub_menu,
            'current_side_menu' => $current_side_menu,
            'current_right_menu' => $current_right_menu,
            'breadcrumbs' => $breadcrumbs,
            'actions' => $actions,
        ];
    }

    public function home_route($role)
    {
       switch ($role) {
            case 'Admin': return 'admin';
            case 'Pelanggan': return 'pelanggan';
            default: return 'pelanggan';
        }
    }
}
