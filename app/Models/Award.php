<?php
<<<<<<< HEAD
=======

namespace App\Models;

>>>>>>> main
use Illuminate\Database\Eloquent\Model;

class Award extends Model
{

<<<<<<< HEAD
=======
    protected $fillable = [
        'name',
        'movie_id'
    ];

>>>>>>> main
    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }
<<<<<<< HEAD

}
=======
}
>>>>>>> main
