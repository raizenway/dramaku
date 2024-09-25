<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id()->primary();
            $table->foreignId('user_id')->constraint('users');
            $table->foreignId('movie_id')->constraint('movies');
            $table->integer('rate');
            $table->text('comment');     
            $table->foreignId('approval_status_id')->constraint('approval_statuses');
            $table->foreignId('approved_by_id')->constraint('users');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('reviews');
    }
};
