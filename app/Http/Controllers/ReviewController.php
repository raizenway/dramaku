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

    public function store(Request $request)
    {
        $request->validate([
            'rate' => 'required|integer|min:1|max:5',
            'comment' => 'required|string|max:1000',
            'user_id' => 'required|exists:users,id',
            'movie_id' => 'required|exists:movies,id',
        ]);

        $review = new Review([
            'rate' => $request->input('rate'),
            'comment' => $request->input('comment'),
            'user_id' => $request->input('user_id'),
            'movie_id' => $request->input('movie_id'),
        ]);

        $review->save();

        return redirect()->back()->with('success', 'Review submitted successfully.');
    }
}