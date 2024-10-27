<?php

namespace App\Http\Controllers;

use App\Models\Award;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AwardController extends Controller
{
    public function index()
    {
        $awards = Award::with(['country'])->get();
        $countries = Country::all();
    
        return Inertia::render('CMS/CMSAwards', [
            'awards' => $awards->map(function ($award) {
                return [
                    'id' => $award->id,
                    'name' => $award->name,
                    'year' => $award->year,
                    'country' => $award->country ? $award->country->name : null,
                ];
            }),
            'countries' => $countries,
        ]);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'country_id' => 'required|exists:countries,id',
            'year' => 'required|integer|min:1900|max:' . date('Y'),
        ]);
    
        $award = new Award([
            'name' => $request->input('name'),
            'country_id' => $request->input('country_id'),
            'year' => $request->input('year'),
        ]);
    
        $award->save();
    
        $countryName = $award->country->name;
    
        return redirect()->route('cms.awards')->with('success', 'Award created successfully. Country: ' . $countryName);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'country_id' => 'required|exists:countries,id',
            'year' => 'required|integer|min:1900|max:' . date('Y'),
            'movie_id' => 'nullable|exists:movies,id',
        ]);

        $award = Award::findOrFail($id);
        $award->name = $request->input('name');
        $award->country_id = $request->input('country_id');
        $award->year = $request->input('year');
        $award->movie_id = $request->input('movie_id');
        $award->save();

        return redirect()->route('cms.awards')->with('success', 'Award updated successfully.');
    }

    public function destroy($id)
    {
        $award = Award::findOrFail($id);
        $award->delete();

        return redirect()->route('cms.awards')->with('success', 'Award deleted successfully.');
    }
}
