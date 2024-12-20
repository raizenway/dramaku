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
            $table->string('alternative_title', 255)->nullable();
            $table->text('photo_url');
            $table->integer('year');
            $table->foreignId('country_id')->nullable()->constrained('countries')->onDelete('set null');
            $table->text('synopsis');
            $table->text('link_trailer')->nullable();
            $table->enum('status', ['Pending', 'Approved', 'Rejected'])->default('Pending');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('movies');
    }
};
