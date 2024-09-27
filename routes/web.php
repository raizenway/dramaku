<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/detail-page', function () {
    return Inertia::render('DetailPage');
})->name('detail.page');

Route::get('/cms-countries', function () {
    return Inertia::render('CMS/CMSCountries');
})->name('cms.countries');

Route::get('/cms-shows', function () {
    return Inertia::render('CMS/CMSShows');
})->name('cms.shows');

Route::get('/cms-shows-validate', function () {
    return Inertia::render('CMS/CMSValidateShows');
})->name('cms.shows.validate');

Route::get('/cms-show-input', function () {
    return Inertia::render('CMS/CMSInputShows');
})->name('cms.shows.input');

Route::get('/cms-awards', function () {
    return Inertia::render('CMS/CMSAwards');
})->name('cms.awards');

Route::get('/cms-genres', function () {
    return Inertia::render('CMS/CMSGenres');
})->name('cms.genres');

Route::get('/cms-actors', function () {
    return Inertia::render('CMS/CMSActors');
})->name('cms.actors');

Route::get('/cms-comments', function () {
    return Inertia::render('CMS/CMSComments');
})->name('cms.comments');

Route::get('/cms-users', function () {
    return Inertia::render('CMS/CMSUsers');
})->name('cms.users');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
