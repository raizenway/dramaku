<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\Genre;
use App\Models\Platform;
use Inertia\Inertia;
use Illuminate\Http\Request;

class MovieController extends Controller
{
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
            'movies' => $movies      
        ]);

    }


    public function show($id)
    {
        $movie = Movie::with(['country', 'genres', 'actors', 'reviews.user', 'platforms'])
            ->findOrFail($id);
    
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
                'reviews' => $movie->reviews->map(function ($review) {
                    return [
                        'author' => $review->user->name,
                        'email' => $review->user->email,
                        'content' => $review->comment,
                        'rating' => $review->rate,
                    ];
                }),
            ]
        ]);
    }
    
}
