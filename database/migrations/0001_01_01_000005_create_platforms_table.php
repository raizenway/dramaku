<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('platforms', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('name', 255)->unique();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('platforms');
    }
};

