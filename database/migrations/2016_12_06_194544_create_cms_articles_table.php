<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateCmsArticlesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('cmsarticles',function(Blueprint $table){
            $table->increments("id");
            $table->string("title");
            $table->integer("cmscategories_id")->unsigned();
            $table->foreign("cmscategories_id")->references("id")->on("cmscategories")->onDelete("cascade");
            $table->text("content");
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
        Schema::drop('cmsarticles');
    }

}