<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Country;
use App\Models\Platform;
use App\Models\Actor;
use App\Models\Genre;
use Inertia\Inertia;
use Illuminate\Http\Request;


class CMSShowInputController extends Controller
{

    public function index()
    {
        $genres = Genre::all();
        $countries = Country::all();
        $availability = Platform::all();
        $actors = Actor::all();

        return Inertia::render('CMS/CMSInputShow', [
            'genres' => $genres,
            'countries' => $countries,
            'availability' => $availability,
            'actors' => $actors
        ]);
    }

    public function store(Request $request)
    {
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'alternative_title' => 'nullable|string|max:255',
            'photo_url' => 'nullable|string',
            'year' => 'required|integer',
            'country_id' => 'required|exists:countries,id',
            'synopsis' => 'required|string',
            'link_trailer' => 'required|string',
            'awards' => 'array',
            'awards.*' => 'string|max:255',
            'genres' => 'array', 
            'genres.*' => 'exists:genres,id',
            'availability' => 'array',
            'availability.*' => 'exists:platforms,id',
            'actors' => 'array',
            'actors.*' => 'exists:actors,id',
        ]);
        // dd($validated);

        $movie = Movie::create([
            'title' => $validated['title'],
            'alternative_title' => $validated['alternative_title'],
            'year' => $validated['year'],
            'country_id' => $validated['country_id'],
            'synopsis' => $validated['synopsis'],
            'link_trailer' => $validated['link_trailer'],
            'photo_url' => $validated['photo_url'],
        ]);

        // Menyimpan relasi genres, availability, dan actors
        $movie->genres()->attach($validated['genres']);
        $movie->platforms()->attach($validated['availability']);
        $movie->actors()->attach($validated['actors']);

        foreach ($validated['awards'] as $awardName) {
            $movie->awards()->create(['name' => $awardName]);
        }

        // $dd($movie);

        return redirect()->route('cms.show.input')->with('success', 'Movie berhasil ditambahkan.');
    }

}