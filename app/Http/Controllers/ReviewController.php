<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::with('user', 'movie')->get();

        return inertia('CMS/CMSReviews', [
            'reviews' => $reviews,
        ]);
    }

    public function store(Request $request, Movie $movie)
    {
        $validated = $request->validate([
            'rate' => 'required|integer|min:1|max:10',
            'comment' => 'required|string|min:5',
        ]);

        $review = new Review();
        $review->user_id = auth()->id();
        $review->movie_id = $movie->id;
        $review->rate = $validated['rate'];
        $review->comment = $validated['comment'];
        $review->save();

        return redirect()->back()->with('success', 'Review submitted successfully!');
    }
}