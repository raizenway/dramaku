<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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

    public function getCountries()
    {
        $movies = Movie::with(['genres', 'country', 'reviews' => function ($query) {
            $query->where('status', 'approved');
        }])->get();

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
            ];
        });

        return Inertia::render('Home', [
            'countries' => $countries
        ]);
    }

    public function index()
        {
            $countries = Country::select('name')->orderBy('name')->pluck('name');
            $movies = Movie::with(['genres', 'country', 'reviews', 'actors', 'platforms', 'awards'])->get();

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
            ->orderBy('created_at', 'asc')
            ->get()
            ->map(function ($review) {
                return [
                    'author' => $review->user->name,
                    'email' => $review->user->email,
                    'content' => $review->comment,
                    'rating' => $review->rate,
                ];
            });
    
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
}