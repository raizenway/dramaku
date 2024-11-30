<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Award extends Model
{

    protected $fillable = [
        'name',
        'movie_id'
    ];

    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
