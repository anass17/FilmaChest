<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class adminAutorization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {

        $token = $request->cookie('auth_token');

        $id = PersonalAccessToken::findToken($token)->tokenable_id;

        $user = User::find($id);

        if (!$user || $user->role != 'admin') {
            return Inertia::render('Errors/Unauthorized');
        }

        return $next($request);
    }
}
