<?php

namespace App\Http\Middleware;

use App\Services\MenuService;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IoMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = auth()->user();

        if ($user) {
            $menuService = new MenuService();
            $current_route = $request->route()?->getName() ?? '';
            
            if ($current_route) {
                $head_route = head(explode('.', $current_route));
                $home_route = $menuService->home_route($user->akses ?? '');

                if ($head_route !== '' && $head_route !== $home_route && $head_route !== 'profile') {
                    abort(404);
                }
            }
        }

        return $next($request);
    }
}
