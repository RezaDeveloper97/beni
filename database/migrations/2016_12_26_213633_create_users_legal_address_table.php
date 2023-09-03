<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateUsersLegalAddressTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('userslegaladdress',function(Blueprint $table){
            $table->increments("id");
            $table->integer("users_id")->unsigned();
            $table->foreign("users_id")->references("id")->on("users")->onDelete("cascade");
            $table->string("company_name");
            $table->string("economic_code");
            $table->string("meli_code");
            $table->string("record_number");
            $table->integer("ostans_id")->unsigned();
            $table->foreign("ostans_id")->references("id")->on("ostans")->onDelete("cascade");
            $table->integer("cities_id")->unsigned();
            $table->foreign("cities_id")->references("id")->on("cities")->onDelete("cascade");
            $table->string("address");
            $table->string("postal_code");
            $table->string("name_transferee");
            $table->tinyInteger("default_address")->default(0)->nullable();
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
        Schema::drop('userslegaladdress');
    }

}