<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\MovieController;

Route::get('/movies', [MovieController::class, 'index']);
