<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateCmsMenuItemsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('cmsmenuitems',function(Blueprint $table){
            $table->increments("id");
            $table->string("title");
            $table->integer("cmsmenus_id")->unsigned();
            $table->foreign("cmsmenus_id")->references("id")->on("cmsmenus")->onDelete("cascade");
            $table->string("extension");
            $table->string("params")->nullable();
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
        Schema::drop('cmsmenuitems');
    }

}