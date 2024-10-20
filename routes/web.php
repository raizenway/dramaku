<?php

use App\Http\Controllers\ActorController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MovieController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [MovieController::class, 'index'])->name('home');

Route::get('/movies', [MovieController::class, 'index']);

Route::get('/detail', function () {
    return Inertia::render('DetailPage');
})->name('detail');


Route::get('/api/filters', [MovieController::class, 'getFilters']);
Route::get('/filters', [MovieController::class, 'getFilters']);
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

Route::get('/cms-actors', [ActorController::class, 'index'])->name('cms.actors');
Route::post('/cms-actors', [ActorController::class, 'store'])->name('cms.actors.store');
Route::put('/cms-actors/{actor}', [ActorController::class, 'update'])->name('cms.actors.update');
Route::delete('/cms-actors/{actor}', [ActorController::class, 'destroy'])->name('cms.actors.destroy');

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