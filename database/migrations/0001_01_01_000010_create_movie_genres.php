<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('movie_genres', function (Blueprint $table) {
            $table->id()->primary();
            $table->foreignId('movie_id')->constraint('movies');
            $table->foreignId('genre_id')->constraint('genres');
        });
    }

    public function down()
    {
        Schema::dropIfExists('movie_genres');
    }
};
