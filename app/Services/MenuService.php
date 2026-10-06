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

        'transaksi' => ['route' => '#', 'caption' => 'Transaksi Servis', 'icon' => 'build', 'show_mobile' => true, 'sub_menus' => [
            'pekerjaan_servis' => ['route' => 'admin.pekerjaan_servis.index', 'caption' => 'Pekerjaan Servis'],
            'penggunaan_part' => ['route' => 'admin.detail_penggunaan_part.index', 'caption' => 'Penggunaan Part'],
            'transaksi_pembayaran' => ['route' => 'admin.transaksi_pembayaran.index', 'caption' => 'Pembayaran'],
        ]],

        'pengaturan' => ['route' => '#', 'caption' => 'Pengaturan', 'icon' => 'settings', 'show_mobile' => true, 'sub_menus' => [
            'user' => ['route' => 'admin.user.index', 'caption' => 'Data User'],
        ]],
    ];

    public function list_menu($role, $user): array 
    {
        // Sesuaikan dengan role (saat ini diarahkan ke $admin untuk semua)
        return self::$admin;
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

        foreach ($menus as $menu) {
            if ($menu['route'] === $current_route) {
                $current_menu = $menu;
                $breadcrumbs[] = $menu;
            }
            foreach ($menu['sub_menus'] ?? [] as $sub_menu) {
                if ($sub_menu['route'] === $current_route) {
                    $current_menu = $menu;
                    $current_sub_menu = $sub_menu;
                    if ($sub_menu['route'] !== $menu['route']) $breadcrumbs[] = $sub_menu;
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

        return [
            'current_menu' => $current_menu,
            'current_sub_menu' => $current_sub_menu,
            'breadcrumbs' => $breadcrumbs,
        ];
    }

    public function home_route($role)
    {
        return 'admin';
    }
}
