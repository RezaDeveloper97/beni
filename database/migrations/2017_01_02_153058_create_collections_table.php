<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateCollectionsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('collections',function(Blueprint $table){
            $table->increments("id");
            $table->integer("categories_id")->unsigned();
            $table->foreign("categories_id")->references("id")->on("categories")->onDelete("cascade");
            $table->string("title");
            $table->string("en_name");
            $table->text("short_desc")->nullable();
            $table->text("long_desc")->nullable();
            $table->text("footer_desc")->nullable();
            $table->string("discount")->nullable();
            $table->string("image")->nullable();
            $table->string("price_list_pdf")->nullable();
            $table->string("catalog_pdf")->nullable();
            $table->tinyInteger("opportunity")->default(0)->nullable();
            $table->tinyInteger("is_new")->default(0)->nullable();
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
        Schema::drop('collections');
    }

}