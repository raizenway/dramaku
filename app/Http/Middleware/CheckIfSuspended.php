<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckIfSuspended
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && Auth::user()->isSuspended()) {
            Auth::logout();

            return redirect()->route('login')->withErrors([
                'suspended' => 'Your account has been suspended. Please contact support.',
            ]);
        }

        return $next($request);
    }
}
