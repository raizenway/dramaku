<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('actors', function (Blueprint $table) {
            $table->id()->primary();;
            $table->string('name', 255)->nullable();
            $table->string('photo_url', 255)->nullable();
            $table->date('birth_date')->nullable();
            $table->foreignId('country_id')->constrained('countries');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('actors');
    }
};
