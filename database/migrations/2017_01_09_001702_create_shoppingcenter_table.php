<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateShoppingCenterTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('shoppingcenter',function(Blueprint $table){
            $table->increments("id");
            $table->integer("cities_id")->unsigned();
            $table->foreign("cities_id")->references("id")->on("cities")->onDelete("cascade");
            $table->string("title");
            $table->string("address");
            $table->string("phone");
            $table->string("google_map_url");
            $table->integer("ordering")->default(0)->nullable();
            $table->enum("state", ["active", "inactive", "archive"])->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('shoppingcenter');
    }

}