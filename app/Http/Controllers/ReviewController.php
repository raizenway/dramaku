<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::with('user', 'movie')
            ->orderByRaw("CASE status 
                WHEN 'pending' THEN 1 
                WHEN 'rejected' THEN 2 
                WHEN 'approved' THEN 3 
                ELSE 4 END ASC")
            ->orderBy('created_at', 'asc')
            ->get();
    
        return Inertia::render('CMS/CMSReviews', [
            'reviews' => $reviews
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'rate' => 'required|integer|between:1,5',
            'comment' => 'required|string|max:1000',
            'user_id' => 'required|exists:users,id',
            'movie_id' => 'required|exists:movies,id',
        ]);
    
        $review = Review::create($validated);
    }
    
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|string|in:pending,approved,rejected',
        ]);

        $review = Review::findOrFail($id);
        $review->status = $request->input('status');
        $review->save();

        return redirect()->back()->with('success', 'Review status updated successfully.');
    }
}
