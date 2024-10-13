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
        $actors = Actor::with('country')->get();
        
        return Inertia::render('CMS/CMSActors', [
            'actors' => $actors,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'country_id' => 'required|exists:countries,id',
            'birth_date' => 'nullable|date',
            'photo_url' => 'nullable|url|max:255',
        ]);

        Actor::create([
            'name' => $request->input('name'),
            'country_id' => $request->input('country_id'),
            'birth_date' => $request->input('birth_date'),
            'photo_url' => $request->input('photo_url'),
        ]);

        return redirect()->route('cms.actors');
    }

    public function update(Request $request, Actor $actor)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'country_id' => 'required|exists:countries,id',
            'birth_date' => 'nullable|date',
            'photo_url' => 'nullable|url|max:255',
        ]);

        $actor->update([
            'name' => $request->input('name'),
            'country_id' => $request->input('country_id'),
            'birth_date' => $request->input('birth_date'),
            'photo_url' => $request->input('photo_url'),
        ]);

        return redirect()->route('cms.actors');
    }

    public function destroy(Actor $actor)
    {
        $actor->delete();

        return redirect()->route('cms.actors');
    }
}
