<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateCitiesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('cities',function(Blueprint $table){
            $table->increments("id");
            $table->string("title");
            $table->integer("ostans_id")->unsigned();
            $table->foreign("ostans_id")->references("id")->on("ostans")->onDelete("cascade");
            $table->integer("ordering")->default(0)->nullable();
            $table->enum("state", ["active", "inactive", "archive"])->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cities');
    }

}