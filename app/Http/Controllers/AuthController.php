<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    // Show Register Form

    public function showRegisterForm() {
        return Inertia::render('Register');
    }

    // Show Login Form

    public function showLoginForm() {
        return Inertia::render('Login', ['errors' => '']);
    }

    // Register a new User

    public function register(Request $request) {

        $request->validate([
            'first_name' => 'required|alpha|max:30',
            'last_name' => 'required|alpha|max:30',
            'email' => 'required|email|max:100|unique:users,email',
            'password' => 'required|string|confirmed|between:8,32',
        ]);

        $user = new User();

        $user -> first_name = $request -> first_name;
        $user -> last_name = $request -> last_name;
        $user -> email = $request -> email;
        $user -> role = 'user';
        $user -> password = Hash::make($request -> password);

        $user -> save();

        // Generate token
        $token = $user->createToken('auth_token')->plainTextToken;

        // Store token in a secure cookie
        $cookie = cookie('auth_token', $token, 60*24, null, null, false, true, false, 'Strict');

        return redirect()->route('movies.index')->withCookie($cookie);

    }

    // Log user into its account

    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request -> password, $user -> password)) {

            $token = $user->createToken('auth_token')->plainTextToken;

            $cookie = cookie('auth_token', $token, 60*24, null, null, false, true, false, 'Strict');

            return redirect()->route('movies.index')->withCookie($cookie);
        }
        
        return Inertia::render('Login', ['errors' => 'Incorrect email or password']);
    }
}
