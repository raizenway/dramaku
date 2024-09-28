<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Movie;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function show($id)
    {
        $movie = Movie::with(['country', 'genres', 'actors', 'reviews', 'platforms'])
            ->findOrFail($id);

        return Inertia::render('DetailPage', [
            'movie' => [
                'title' => $movie->title,
                'otherTitle' => $movie->alternative_title,
                'year' => $movie->year,
                'rating' => $movie->reviews->avg('rate') ?? 0,
                'poster' => $movie->photo_url,
                'trailerUrl' => $movie->link_trailer,
                'genres' => $movie->genres->pluck('name'),
                'synopsis' => $movie->synopsis,
                'platforms' => $movie->platforms->pluck('name'),
                'casts' => $movie->actors->map(function ($actor) {
                    return [
                        'name' => $actor->name,
                        'image' => $actor->photo_url,
                        'role' => ''
                    ];
                }),
                'reviews' => $movie->reviews->map(function ($review) {
                    return [
                        'author' => $review->user->name,
                        'email' => $review->user->email,
                        'content' => $review->comment,
                        'rating' => $review->rate,
                        'image' => $review->user->profile_image ?? null
                    ];
                }),
            ]
        ]);
    }
}

