<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableDeliverwayOstans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deliverway_ostans', function (Blueprint $table) {
            $table->integer('deliverway_id')->unsigned()->index();
            $table->foreign('deliverway_id')->references('id')->on('deliverways')->onDelete('cascade');

            $table->integer('ostan_id')->unsigned()->index();
            $table->foreign('ostan_id')->references('id')->on('ostans')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop("deliverway_ostans");
    }
}
