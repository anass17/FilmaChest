<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Movie;

class MovieController extends Controller
{
    public function index(Request $request) {

        $query = Movie::query();
        $query->with('category');

        if ($request->has('category') && $request->category != '') {
            $category = $request->category;
            $query->where('category_id', '=', "$category");
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($query) use ($search) {
                    $query->where('title', 'ILIKE', "%$search%")
                        ->orWhere('description', 'ILIKE', "%$search%");
            });
        }
        
        $query->orderBy('created_at', 'desc');
        $movies = $query->get();

        return response()->json(['movies' => $movies], 200);
    }
}
