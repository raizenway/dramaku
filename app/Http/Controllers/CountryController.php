<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::orderBy('created_at', 'desc')->get();
        return Inertia::render('CMS/CMSCountries', [
            'countries' => $countries,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'country' => 'required|string|max:255',
        ]);

        $country = Country::create([
            'name' => $request->input('country'),
        ]);

        return redirect()->route('cms.countries');
    }

    public function update(Request $request, Country $country)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
    
        $country->update([
            'name' => $request->input('name'),
        ]);
    
        return redirect()->route('cms.countries');
    }    

    public function destroy(Country $country)
    {
        $country->delete();

        return redirect()->route('cms.countries');
    }
}
