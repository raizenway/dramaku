<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    protected $fillable = ['name', 'photo_url', 'birth_date', 'country_id'];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movie_actors');
    }
}
