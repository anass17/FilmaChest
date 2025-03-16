<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        $users_count = User::count();
        $movies_count = Movie::count();

        $recent_added_movies = Movie::select('id', 'title', 'thumbnail')->orderBy('created_at', 'desc')->limit(3)->get();

        return Inertia::render('Dashboard', ['stats' => ['users' => $users_count, 'movies' => $movies_count], 'recentAdded' => $recent_added_movies]);
    }
}
