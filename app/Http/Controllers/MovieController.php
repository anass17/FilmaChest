<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Laravel\Prompts\error;
use function Termwind\render;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();

        $movies = Movie::with('category')->orderBy('created_at', 'desc')->get();

        return Inertia::render('Movies', ['movies' => $movies, 'categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('AddMovie', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:150',
            'description' => 'required|string|max:255',
            'category' => 'required|string|exists:categories,id',
            'year' => 'required|integer|min:1950',
            'country' => 'required|string',
            'duration' => 'required|string|regex:/^[0-9]:[0-5][0-9]$/',
            'thumbnail' => 'required|file|mimes:jpg,png,jpeg,webp|max:3096',
        ]);

        if ($request->hasFile('thumbnail') && $request->file('thumbnail')->isValid()) {
            $file = $request->file('thumbnail');

            $filename = 'thumbnail_' . time() . '.' . $file->getClientOriginalExtension();

            $file->storeAs('uploads', $filename, 'public');

        } else {
            return Inertia::render('AddMovie', ['errors' => ['thumbnail' => 'Could not upload the image']]);
        }

        $movie = new Movie();

        $movie -> title = $request -> title;
        $movie -> description = $request -> description;
        $movie -> category_id = $request -> category;
        $movie -> year = $request -> year;
        $movie -> country = $request -> country;
        $movie -> duration = $request -> duration;
        $movie -> thumbnail = $filename;

        $movie -> save();

        return Inertia::render('Movies');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $movie = Movie::with('category')->find($id);

        return Inertia::render('Movie', ['movie' => $movie]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $movie = Movie::with('category')->findOrFail($id);
        return Inertia::render('EditMovie', ['movie' => $movie]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {

        $request->validate([
            'title' => 'required|string|max:150',
            'description' => 'required|string|max:255',
            'category' => 'required|string|exists:categories,id',
            'year' => 'required|integer|min:1950',
            'country' => 'required|string',
            'duration' => 'required|string|regex:/^[0-9]:[0-5][0-9]$/',
        ]);

        $movie -> title = $request -> title;
        $movie -> description = $request -> description;
        $movie -> category_id = $request -> category;
        $movie -> year = $request -> year;
        $movie -> country = $request -> country;
        $movie -> duration = $request -> duration;

        $movie -> save();

        return Inertia::render('Movies');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {

        Movie::destroy($id);

        return redirect()->route('list');
    }

    /**
     * List all movies to take action: update or delete
    */

    public function list() {
        $movies = Movie::orderBy('created_at', 'desc')->get();

        return Inertia::render('MoviesAdminView', ['movies' => $movies]);
    }
}
