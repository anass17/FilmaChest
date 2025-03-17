<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Laravel\Sanctum\PersonalAccessToken;

class DashboardController extends Controller
{
    public function index() {
        $users_count = User::count();
        $movies_count = Movie::count();

        $recent_added_movies = Movie::select('id', 'title', 'thumbnail')->orderBy('created_at', 'desc')->limit(3)->get();

        return Inertia::render('Dashboard', ['stats' => ['users' => $users_count, 'movies' => $movies_count], 'recentAdded' => $recent_added_movies]);
    }

    public function profile(Request $request) {

        $token = $request->cookie('auth_token');
        $id = PersonalAccessToken::findToken($token) -> tokenable_id;
        $user = User::select('first_name', 'last_name', 'email')->find($id);

        return Inertia::render('Profile', ['user' => $user]);
    }

    public function profileUpdate(Request $request) {
        $request->validate([
            'first_name' => 'string|max:30',
            'last_name' => 'string|max:30',
            'password' => 'nullable|between:8,32',
        ]);

        $token = $request->cookie('auth_token');
        $id = PersonalAccessToken::findToken($token) -> tokenable_id;
        $user = User::find($id);

        $user -> first_name = $request-> first_name;
        $user -> last_name = $request-> last_name;

        if (strlen($request->password) >= 8) {
            $user -> password = Hash::make($request-> password);
        }

        $user->save();
    }
}
