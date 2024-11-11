<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Inertia\Inertia;

class CMSShowsController extends Controller
{
    public function index()
    {
        $movies = Movie::with(['genres', 'country', 'reviews', 'platforms', 'actors'])
                    ->where('status', 'Approved')
                    ->get();

        $movies = $movies->map(function ($movie) {
            return [
                'id' => $movie->id,
                'title' => $movie->title,
                'otherTitle' => $movie->alternative_title,
                'year' => $movie->year,
                'rating' => ($movie->reviews->avg('rate') ?? 0) * 2,
                'photo_url' => $movie->photo_url,
                'genres' => $movie->genres->pluck('name'),
                'country' => $movie->country->name,
                'status' => $movie->status,
                'synopsis' => $movie->synopsis,
                'platforms' => $movie->platforms->pluck('name'),
                'trailerUrl' => $movie->link_trailer,
                'poster' => $movie->photo_url,
                'actors' => $movie->actors->pluck('name'),
            ];
        });

        return Inertia::render('CMS/CMSShows', [
            'movies' => $movies      
        ]);
    }
}