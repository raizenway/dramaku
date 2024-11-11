<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Award;
use App\Models\Actor;
use App\Models\Movie;
use App\Models\Genre;
use App\Models\Platform;
use App\Models\Country;
use Inertia\Inertia;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $path = $request->file('file')->store('images/poster', 'public');

        // Simpan path ke database
        $movie = new Movie();
        $movie->photo_url = $path;
        $movie->save();

        return response()->json(['path' => $path], 200);
    }

    public function getFilters()
    {
        $years = Movie::select('year')->distinct()->orderBy('year', 'desc')->pluck('year');
        $genres = Genre::select('name')->orderBy('name')->pluck('name');
        $availability = Platform::select('name')->orderBy('name')->pluck('name');
        $awardOptions = ['Yes', 'No'];
    
        return response()->json([
            'years' => $years,
            'genres' => $genres,
            'availability' => $availability,
            'awards' => $awardOptions
        ]);
    }

    public function index()
        {
            $countries = Country::whereIn('id', Movie::select('country_id'))
                            ->orderBy('name')
                            ->pluck('name');
            $movies = Movie::with(['genres', 'country', 'reviews', 'actors', 'platforms', 'awards'])
                        ->where('status', 'Approved')
                        ->get();

            $movies = $movies->map(function ($movie) {
            
                return [
                    'id' => $movie->id,
                    'title' => $movie->title,
                    'otherTitle' => $movie->alternative_title,
                    'year' => $movie->year,
                    'rating' => ($movie->reviews->avg('rate') ?? 0),
                    'photo_url' => $movie->photo_url,
                    'genres' => $movie->genres->pluck('name'),
                    'country' => $movie->country->name,
                    'actors' => $movie->actors->pluck('name'),
                    'availability' => $movie->platforms->pluck('name'),
                    'awards' => $movie->awards->pluck('name')
                ];
            });

            return Inertia::render('Home', [
                'movies' => $movies,
                'countries' => $countries  
            ]);

        }


    public function show($id)
    {
        $movie = Movie::with([
            'country', 
            'genres', 
            'actors', 
            'platforms', 
            'awards',
            'reviews.user'
        ])->findOrFail($id);
    
        $userReview = null;
        if (auth()->check()) {
            $userReview = $movie->reviews()->where('user_id', auth()->id())->first();
        }
    
        $approvedReviews = $movie->reviews()
            ->where('status', 'approved')
            // ->orderBy('created_at', 'asc')
            ->get()
            ->map(function ($review) {
                return [
                    'author' => $review->user->name,
                    'email' => $review->user->email,
                    'content' => $review->comment,
                    'rating' => $review->rate,
                ];
            });

        // dd($approvedReviews);

        return Inertia::render('DetailPage', [
            'movie' => [
                'id' => $movie->id,
                'title' => $movie->title, 
                'otherTitle' => $movie->alternative_title,
                'year' => $movie->year, 
                'rating' => (int) ($movie->reviews->avg('rate') ?? 0),
                'poster' => $movie->photo_url,
                'trailerUrl' => $movie->link_trailer,
                'genres' => $movie->genres->pluck('name'),
                'synopsis' => $movie->synopsis,
                'platforms' => $movie->platforms->pluck('name'),
                'casts' => $movie->actors->map(function ($actor) {
                    return [
                        'name' => $actor->name,
                        'image' => $actor->photo_url,
                    ];
                }),
                'reviews' => $approvedReviews,
                'awards' => $movie->awards->pluck('name'),
            ],
            'userReview' => $userReview ? [
                'id' => $userReview->id,
                'status' => $userReview->status,
                'rate' => $userReview->rate,
                'comment' => $userReview->comment,
            ] : null,
            'user' => auth()->user(),
        ]);
    }

    public function edit($id)
    {
        $movie = Movie::with(['genres', 'actors', 'platforms', 'awards'])->findOrFail($id);

        // Ambil data ID dari relasi yang sudah tersimpan untuk ditampilkan di form
        $selectedGenres = $movie->genres->pluck('id')->toArray();
        $selectedActors = $movie->actors->pluck('id')->toArray();
        $selectedPlatforms = $movie->platforms->pluck('id')->toArray();
        $selectedAwards = $movie->awards->pluck('name')->toArray(); // Ambil 'name' sesuai input

        // Ambil data untuk pilihan
        $genres = Genre::all();
        $countries = Country::all();
        $availability = Platform::all();
        $actors = Actor::all();
        $awards = Award::all();


        return Inertia::render('CMS/CMSEditShow', [
            'movie' => $movie,
            'genres' => $genres,
            'countries' => $countries,
            'availability' => $availability,
            'actors' => $actors,
            'awards' => $awards,
            'selectedGenres' => $selectedGenres,
            'selectedActors' => $selectedActors,
            'selectedPlatforms' => $selectedPlatforms,
            'selectedAwards' => $selectedAwards,
        ]);
    }

    public function update(Request $request, $id)
    {
        // dd($request->all());
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'alternative_title' => 'nullable|string|max:255',
            'photo_url' => 'nullable|string',
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
        ]);

        $movie = Movie::findOrFail($id);
        $movie->update([
            'title' => $validated['title'],
            'alternative_title' => $validated['alternative_title'],
            'year' => $validated['year'],
            'country_id' => $validated['country_id'],
            'synopsis' => $validated['synopsis'],
            'link_trailer' => $validated['link_trailer'],
            'photo_url' => $validated['photo_url'],
        ]);

        // Sinkronisasi relasi genres, availability, dan actors
        $movie->genres()->sync($validated['genres']);
        $movie->platforms()->sync($validated['availability']);
        $movie->actors()->sync($validated['actors']);

        // Perbarui awards
        $movie->awards()->delete(); // Hapus awards lama
        foreach ($validated['awards'] as $awardName) {
            $movie->awards()->create(['name' => $awardName]);
        }

        return redirect()->route('cms.shows')->with('success', 'Movie berhasil diperbarui.');
    }

    public function destroy($id) {
        $movie = Movie::findOrFail($id);
        $movie->delete();
        return redirect()->route('cms.shows')->with('success', 'Movie berhasil dihapus.');
    }

    public function approve($id)
    {
        $movie = Movie::findOrFail($id);
        $movie->status = 'Approved';
        $movie->save();

        return redirect()->route('cms.shows.validate')->with('success', 'Movie has been approved.');
    }

    public function reject($id)
    {
        $movie = Movie::findOrFail($id);
        $movie->delete();

        return redirect()->route('cms.shows.validate')->with('success', 'Movie has been rejected.');
    }
}