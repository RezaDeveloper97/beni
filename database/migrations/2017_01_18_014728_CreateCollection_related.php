<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCollectionRelated extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collections_related',function(Blueprint $table){
            $table->increments("id");
            $table->integer("collection_one_id")->unsigned();
            $table->foreign("collection_one_id")->references("id")->on("collections")->onDelete("cascade");

            $table->integer("collection_two_id")->unsigned();
            $table->foreign("collection_two_id")->references("id")->on("categories")->onDelete("cascade");

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
        Schema::drop('collections_related');
    }
}
