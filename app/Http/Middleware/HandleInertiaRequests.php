<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        
        $menuService = new \App\Services\MenuService();
        $menus = [];
        $current_menu_data = null;

        if ($user) {
            $current_route = $request->route()?->getName() ?? '';
            $raw_menus = $menuService->list_menu($user->akses ?? '', $user);
            $current_menu_data = $menuService::current_menu($raw_menus, $current_route, 'Dashboard', $request->query());
            
            // Fungsi rekursif pembantu untuk men-generate URL secara aman dan memasukkan params jika ada
            $generateUrl = function (&$item) {
                if (($item['route'] ?? '#') !== '#' && \Illuminate\Support\Facades\Route::has($item['route'])) {
                    $item['url'] = route($item['route'], $item['params'] ?? []);
                } else {
                    $item['url'] = '#';
                }
                
                foreach (['sub_menus', 'side_menus', 'right_menus'] as $childType) {
                    if (isset($item[$childType])) {
                        foreach ($item[$childType] as $key => &$child) {
                            if (($child['route'] ?? '#') !== '#' && \Illuminate\Support\Facades\Route::has($child['route'])) {
                                $child['url'] = route($child['route'], $child['params'] ?? []);
                            } else {
                                $child['url'] = '#';
                            }
                            
                            // Cek jika sub_menu punya side_menus/right_menus di dalamnya
                            foreach (['side_menus', 'right_menus'] as $nestedType) {
                                if (isset($child[$nestedType])) {
                                    foreach ($child[$nestedType] as $nKey => &$nested) {
                                        if (($nested['route'] ?? '#') !== '#' && \Illuminate\Support\Facades\Route::has($nested['route'])) {
                                            $nested['url'] = route($nested['route'], $nested['params'] ?? []);
                                        } else {
                                            $nested['url'] = '#';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return $item;
            };

            $menus = collect($raw_menus)->map(function ($menu) use ($generateUrl) {
                return $generateUrl($menu);
            })->toArray();
        }

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user' => $user,
                'home_url' => $user ? route($menuService->home_route($user->akses ?? '')) : null,
            ],
            'menus' => $menus,
            'current_menu_data' => $current_menu_data,
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'flash' => [
                'message' => $request->session()->get('message'),
                'error' => $request->session()->get('error'),
                'status' => $request->session()->get('status'),
            ],
        ];
    }
}
