<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateNewsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('news',function(Blueprint $table){
            $table->increments("id");
            $table->string("title");
            $table->string("en_name");
            $table->longText("html_tags");
            $table->longText("css_style");
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
        Schema::drop('news');
    }

}