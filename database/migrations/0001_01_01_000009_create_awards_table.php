<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('awards', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('name', 255);
            $table->foreignId('country_id')->nullable()->constrained('countries')->onDelete('set null');
            $table->year('year');
            $table->foreignId('movie_id')->nullable()->constrained('movies')->onDelete('set null');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('awards');
    }
};
