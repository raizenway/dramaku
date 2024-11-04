<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActorController extends Controller
{
    public function index()
    {
        $actors = Actor::with(['country'])->orderBy('created_at', 'desc')->get();
        $countries = Country::all();
    
        return Inertia::render('CMS/CMSActors', [
            'actors' => $actors->map(function ($actor) {
                return [
                    'id' => $actor->id,
                    'name' => $actor->name,
                    'birth' => $actor->birth,
                    'photo_url' => $actor->photo_url,
                    'country' => $actor->country ? $actor->country->name : null,
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
            'birth' => 'nullable|date',
            'photo_url' => 'nullable|url|max:255',
        ]);
    
        $actor = new Actor([
            'name' => $request->input('name'),
            'country_id' => $request->input('country_id'),
            'birth' => $request->input('birth'),
            'photo_url' => $request->input('photo_url'),
        ]);
    
        $actor->save();
    
        $countryName = $actor->country->name;
    
        return redirect()->route('cms.actors')->with('success', 'Actor created successfully. Country: ' . $countryName);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'country_id' => 'required|exists:countries,id',
            'birth' => 'nullable|date',
            'photo_url' => 'nullable|url|max:255',
        ]);

        $actor = Actor::findOrFail($id);
        $actor->name = $request->input('name');
        $actor->country_id = $request->input('country_id');
        $actor->birth = $request->input('birth');
        $actor->photo_url = $request->input('photo_url');
        $actor->save();

        return redirect()->route('cms.actors')->with('success', 'Actor updated successfully.');
    }

    public function destroy($id)
    {
        $actor = Actor::findOrFail($id);
        $actor->delete();

        return redirect()->route('cms.actors')->with('success', 'Actor deleted successfully.');
    }
}