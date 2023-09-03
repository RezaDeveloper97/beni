<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreatePaymentWaysTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('paymentways',function(Blueprint $table){
            $table->increments("id");
            $table->string("title");
            $table->text("description");
            $table->string("params")->nullable();
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
        Schema::drop('paymentways');
    }

}