<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('movie_id')->constrained('movies');
            $table->integer('rate')->check('rate >= 1 and rate <= 5');
            $table->text('comment');     
            $table->foreignId('approval_status_id')->constrained('approval_statuses');
            $table->foreignId('approved_by_id')->nullable()->constrained('users');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('reviews');
    }
};
