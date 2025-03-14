<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/user', function () {
    return Inertia::render('User', [
        'user' => 'A User'
    ]);
});
