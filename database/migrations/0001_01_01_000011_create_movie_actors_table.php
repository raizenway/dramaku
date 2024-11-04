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
            $table->foreignId('movie_id')->constrained('movies')->onDelete('cascade');
            $table->foreignId('actor_id')->constrained('actors')->onDelete('cascade');
            $table->timestamps();
        });
    } 

    public function down()
    {
        Schema::dropIfExists('movie_actors');
    }
};
