<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkTracksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_tracks', function (Blueprint $table) {
            $table->bigIncrements('id');
         /*   $table->timestamps();*/
            $table->date('day');
            $table->bigInteger('employee_id')->references('id')->on('users');
            $table->time('work_start')->nullable();
            $table->time('work_end')->nullable();
            $table->time('break_start')->nullable();
            $table->time('break_end')->nullable();
            $table->boolean('approved');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('work_tracks');
    }
}
