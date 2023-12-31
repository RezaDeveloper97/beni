<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {

        if (Auth::guard($guard)->guest()) {
            if ($request->ajax() || $request->wantsJson()) {
                return response('Unauthorized.', 401);
            } else {
                $path = explode("/",$request->getPathInfo());
                $path = array_filter($path)[1];
                if($path == config("quickadmin.route")){
                    return redirect()->route(config("quickadmin.route").'.login');
                }
                return redirect()->guest('login');
            }
        }

        return $next($request);
    }
}
