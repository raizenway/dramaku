<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use Inertia\Inertia;

class ValidateController extends Controller
{
    public function index()
    {
        $movies = Movie::with(['genres', 'country', 'reviews', 'actors', 'platforms', 'awards'])
                    ->where('status', 'Pending')
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
                'awards' => $movie->awards->pluck('name'),
            ];
        });

        return Inertia::render('CMS/CMSValidateShows', [
            'movies' => $movies
        ]);

    }

}
