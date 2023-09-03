<?php

namespace App\Http\Middleware;

use Closure;

class KamiyarMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $request->attributes->add(['mainMenu' => app('App\Http\Controllers\ToolsController')->getMainMenu()]);

        return $next($request);
    }
}
