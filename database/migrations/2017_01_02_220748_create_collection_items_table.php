<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateCollectionItemsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('collectionitems',function(Blueprint $table){
            $table->increments("id");
            $table->integer("collections_id")->unsigned();
            $table->foreign("collections_id")->references("id")->on("collections")->onDelete("cascade");
            $table->string("title");
            $table->longText("description")->nullable();
            $table->enum("amount_default", ["0", "1", "2", "3", "4"]);
            $table->string("price");
            $table->string("image");
            $table->string("thumb_image");
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
        Schema::drop('collectionitems');
    }

}