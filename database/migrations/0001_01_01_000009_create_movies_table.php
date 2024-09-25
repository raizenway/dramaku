<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('title', 255);
            $table->string('alternative_title', 255);
            $table->text('photo_url');
            $table->integer('year');
            $table->foreignId('country_id')->constraint('countries');
            $table->text('synopsis');
            $table->foreignId('release_statuses_id')->constraint('countries');
            $table->foreignId('approval_statuses_id')->constraint('approval_statuses');
            $table->text('link_trailer');
            $table->foreignId('approved_by_id')->constraint('movies');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('movies');
    }
};
