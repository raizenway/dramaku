<?php

use App\Http\Controllers\CountryController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MovieController;
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

Route::get('/movies/{id}', [MovieController::class, 'show'])->name('movies.show');

Route::get('/cms-countries', [CountryController::class, 'index'])->name('cms.countries');
Route::post('/cms-countries', [CountryController::class, 'store'])->name('cms.countries.store');
Route::put('/cms-countries/{country}', [CountryController::class, 'update'])->name('cms.countries.update');
Route::delete('/cms-countries/{country}', [CountryController::class, 'destroy'])->name('cms.countries.destroy');

Route::get('/cms-shows', function () {
    return Inertia::render('CMS/CMSShows');
})->name('cms.shows');

Route::get('/cms-shows-validate', function () {
    return Inertia::render('CMS/CMSValidateShows');
})->name('cms.shows.validate');

Route::get('/cms-show-input', function () {
    return Inertia::render('CMS/CMSInputShow');
})->name('cms.show.input');

Route::get('/cms-awards', function () {
    return Inertia::render('CMS/CMSAwards');
})->name('cms.awards');

Route::get('/cms-genres', [GenreController::class, 'index'])->name('cms.genres');
Route::post('/cms-genres', [GenreController::class, 'store'])->name('cms.genres.store');
Route::put('/cms-genres/{genre}', [GenreController::class, 'update'])->name('cms.genres.update');
Route::delete('/cms-genres/{genre}', [GenreController::class, 'destroy'])->name('cms.genres.destroy');


Route::get('/cms-actors', function () {
    return Inertia::render('CMS/CMSActors');
})->name('cms.actors');

Route::get('/cms-reviews', function () {
    return Inertia::render('CMS/CMSReviews');
})->name('cms.reviews');

Route::get('/cms-users', function () {
    return Inertia::render('CMS/CMSUsers');
})->name('cms.users');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';