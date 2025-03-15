<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/user', function () {
    return Inertia::render('User', [
        'user' => 'A User'
    ]);
});

Route::get('/login', [AuthController::class, 'showLoginForm']);
Route::get('/register', [AuthController::class, 'showRegisterForm']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::get('/dashboard', [DashboardController::class, 'index']);

Route::resource('movies', MovieController::class);