<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('movie_actors', function (Blueprint $table) {
            $table->id()->primary();
            $table->foreignId('movie_id')->constraint('movies');
            $table->foreignId('actor_id')->constraint('actors');
        });
    } 

    public function down()
    {
        Schema::dropIfExists('movie_actors');
    }
};
