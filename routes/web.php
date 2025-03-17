<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\adminAutorization;
use App\Http\Middleware\authentified;
use Illuminate\Support\Facades\Route;


use Inertia\Inertia;

// Authentification

Route::get('/', [AuthController::class, 'showLoginForm']);
Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register');
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::get('/logout', [AuthController::class, 'logout']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// User Routes

Route::get('/profile', [DashboardController::class, 'profile'])->middleware([authentified::class]);
Route::put('/profile/update', [DashboardController::class, 'profileUpdate'])->middleware([authentified::class]);
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware([authentified::class, adminAutorization::class]);

// Movies Routes

Route::middleware(authentified::class)->group(function () {
    Route::resource('movies', MovieController::class)
    ->middlewareFor(['create', 'store', 'edit', 'update', 'destroy'], adminAutorization::class);
});
Route::get('list', [MovieController::class, 'list'])->middleware(authentified::class)->name('list');