<?php

use App\Http\Controllers\ActorController;
use App\Http\Controllers\AwardController;
use App\Http\Controllers\CMSShowsController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CMSShowInputController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [MovieController::class, 'index'])->name('home');

Route::get('/movies', [MovieController::class, 'index']);

Route::get('/detail', function () {
    return Inertia::render('DetailPage');
})->name('detail');

Route::get('/api/filters', [MovieController::class, 'getFilters']);
Route::get('/filters', [MovieController::class, 'getFilters']);
Route::get('/movie/{id}', [MovieController::class, 'show'])->name('movies.show');

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/cms-countries', [CountryController::class, 'index'])->name('cms.countries');
    Route::post('/cms-countries', [CountryController::class, 'store'])->name('cms.countries.store');
    Route::put('/cms-countries/{country}', [CountryController::class, 'update'])->name('cms.countries.update');
    Route::delete('/cms-countries/{country}', [CountryController::class, 'destroy'])->name('cms.countries.destroy');
    
    Route::get('/cms-shows', [CMSShowsController::class, 'index'])->name('cms.shows');

    Route::get('/cms-shows-validate', function () {
        return Inertia::render('CMS/CMSValidateShows');
    })->name('cms.shows.validate');

    Route::get('/cms-show-input', [CMSShowInputController::class, 'index'])->name('cms.show.input');

    //Unggah movie
    Route::post('/movies/post', [CMSShowInputController::class, 'store'])->name('movies.post.store');
    
    Route::prefix('cms/movies')->group(function () {
        Route::get('/', [MovieController::class, 'index'])->name('cms.movies.index');
        Route::get('/{id}/edit', [MovieController::class, 'edit'])->name('cms.movies.edit');
        Route::put('/{id}', [MovieController::class, 'update'])->name('cms.movies.update');
    });

    Route::prefix('cms-awards')->group(function () {
        Route::get('/', [AwardController::class, 'index'])->name('cms.awards');
        Route::post('/', [AwardController::class, 'store']);
        Route::put('/{award}', [AwardController::class, 'update']);
        Route::delete('/{award}', [AwardController::class, 'destroy']);
    });

    Route::get('/cms-genres', [GenreController::class, 'index'])->name('cms.genres');
    Route::post('/cms-genres', [GenreController::class, 'store'])->name('cms.genres.store');
    Route::put('/cms-genres/{genre}', [GenreController::class, 'update'])->name('cms.genres.update');
    Route::delete('/cms-genres/{genre}', [GenreController::class, 'destroy'])->name('cms.genres.destroy');

    Route::get('/cms-actors', [ActorController::class, 'index'])->name('cms.actors');
    Route::post('/cms-actors', [ActorController::class, 'store'])->name('cms.actors.store');
    Route::put('/cms-actors/{actor}', [ActorController::class, 'update'])->name('cms.actors.update');
    Route::delete('/cms-actors/{actor}', [ActorController::class, 'destroy'])->name('cms.actors.destroy');

    Route::get('/cms-reviews', [ReviewController::class, 'index'])->name('cms.reviews');
   
    Route::post('/movies/{id}/reviews', [ReviewController::class, 'store'])->name('reviews.store');
    
    Route::get('/cms-users', [UserController::class, 'index'])->name('cms.users');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('auth/google', [GoogleAuthController::class, 'redirect'])->name('google.auth');
Route::get('auth/google/callback', [GoogleAuthController::class, 'callback']);

require __DIR__.'/auth.php';