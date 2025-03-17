<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Laravel\Sanctum\PersonalAccessToken;

class authentified extends Middleware
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string[]  ...$guards
     * @return mixed
     */
    public function handle($request, Closure $next, ...$guards)
    {

        $token = $request->cookie('auth_token');
        
        if (!$token) {
            return Inertia::render('Login');
        }

        $accessToken = PersonalAccessToken::findToken($token);

        if (!$accessToken) {
            return Inertia::render('Login');
        }

        Inertia::share([
            'user' => User::find($accessToken->tokenable_id)
        ]);
        
        return $next($request);
    }
}
