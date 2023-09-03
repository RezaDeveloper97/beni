<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateHomeSlideshowTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('homeslideshow',function(Blueprint $table){
            $table->increments("id");
            $table->string("title");
            $table->string("image");
            $table->string("link_to")->nullable();
            $table->string("params")->nullable();
            $table->longText("html_tags")->nullable();
            $table->longText("css_style")->nullable();
            $table->longText("js_code")->nullable();
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
        Schema::drop('homeslideshow');
    }

}