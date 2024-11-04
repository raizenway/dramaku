<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'alternative_title',
        'photo_url',
        'year',
        'country_id',
        'synopsis',
        'link_trailer'
    ];

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'movie_genres');
    }

    public function actors()
    {
        return $this->belongsToMany(Actor::class, 'movie_actors');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function awards()
    {
        return $this->hasMany(Award::class);
    }


    public function platforms()
    {
        return $this->belongsToMany(Platform::class, 'movie_platforms');
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
