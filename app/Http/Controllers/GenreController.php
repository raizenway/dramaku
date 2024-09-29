<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GenreController extends Controller
{
    public function index()
    {
        $genres = Genre::all();
        return Inertia::render('CMS/CMSGenres', [
            'genres' => $genres,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'genre' => 'required|string|max:255',
        ]);

        Genre::create([
            'name' => $request->input('genre'),
        ]);

        return redirect()->route('cms.genres');
    }

    public function update(Request $request, Genre $genre)
    {
        $request->validate([
            'genre' => 'required|string|max:255',
        ]);

        $genre->update([
            'name' => $request->input('genre'),
        ]);

        return redirect()->route('cms.genres');
    }

    public function destroy(Genre $genre)
    {
        $genre->delete();

        return redirect()->route('cms.genres');
    }
}
