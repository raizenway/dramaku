<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Country;
use App\Models\Award;
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
        $awards = Award::all();

        return Inertia::render('CMS/CMSInputShow', [
            'genres' => $genres,
            'countries' => $countries,
            'availability' => $availability,
            'actors' => $actors,
            'awards' => $awards
        ]);
    }

    public function store(Request $request)
    {
        dd($request->all());

        $request->merge([
            'awards' => json_decode($request->input('awards'), true),
            'genres' => json_decode($request->input('genres'), true),
            'availability' => json_decode($request->input('availability'), true),
            'actors' => json_decode($request->input('actors'), true),
        ]);

        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'alternative_title' => 'nullable|string|max:255',
                'year' => 'required|integer',
                'country_id' => 'required|exists:countries,id',
                'synopsis' => 'required|string',
                'link_trailer' => 'required|string',
                'awards' => 'array',
                'awards.*' => 'exists:awards,id',
                'genres' => 'array', 
                'genres.*' => 'exists:genres,id',
                'availability' => 'array',
                'availability.*' => 'exists:platforms,id',
                'actors' => 'array',
                'actors.*' => 'exists:actors,id',
                'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            dd($e->errors()); // Menampilkan pesan error validasi
        }
    
        // dd($validated);
        // dd($request->all());
    
        $photoUrl = null;
    
        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = time() . '_' . $file->getClientOriginalName(); // Nama unik untuk file
            $photoPath = $file->storeAs('images/poster', $filename, 'public'); // Menyimpan di storage/public/images/poster
            $photoUrl = 'storage/' . $photoPath; // Set photo_url dengan path yang bisa diakses
        }
    
        $movie = Movie::create([
            'title' => $validated['title'],
            'alternative_title' => $validated['alternative_title'],
            'year' => $validated['year'],
            'country_id' => $validated['country_id'],
            'synopsis' => $validated['synopsis'],
            'link_trailer' => $validated['link_trailer'],
            'photo_url' => $photoUrl,
        ]);
    
        // Menyimpan relasi many-to-many
        if (!empty($validated['genres'])) {
            $movie->genres()->attach($validated['genres']);
        }
        if (!empty($validated['availability'])) {
            $movie->platforms()->attach($validated['availability']);
        }
        if (!empty($validated['actors'])) {
            $movie->actors()->attach($validated['actors']);
        }
    
        // Menyimpan awards (pastikan relasi awards() adalah hasMany())
        if (!empty($validated['awards'])) {
            foreach ($validated['awards'] as $awardId) {
                $movie->awards()->create(['name' => $awardId]);
            }
        }

        return redirect()->route('cms.shows.validate')->with('success', 'Movie berhasil ditambahkan.');
    }
    
}