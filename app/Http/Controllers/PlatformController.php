<?php

namespace App\Http\Controllers;

use App\Models\Platform;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlatformController extends Controller
{
    public function index()
    {
        $platforms = Platform::orderBy('created_at', 'desc')->get();
        return Inertia::render('CMS/CMSPlatforms', [
            'platforms' => $platforms,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'platform' => 'required|string|max:255',
        ]);

        $platform = Platform::create([
            'name' => $request->input('platform'),
        ]);

        return redirect()->route('cms.platforms');
    }

    public function update(Request $request, Platform $platform)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $platform->update([
            'name' => $request->input('name'),
        ]);

        return redirect()->route('cms.platforms');
    }

    public function destroy(Platform $platform)
    {
        $platform->delete();

        return redirect()->route('cms.platforms');
    }
}
