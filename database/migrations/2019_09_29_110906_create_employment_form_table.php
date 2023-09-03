<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateEmploymentFormTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('employmentform',function(Blueprint $table){
            $table->increments("id");
            $table->string("job_title");
            $table->string("name");
            $table->date("birthday");
            $table->enum("gender", ["male", "female"])->nullable();
            $table->enum("married", ["mojarad", "motahel"])->nullable();
            $table->enum("khedmat", ["mashmool", "moaf", "etmam"])->nullable();
            $table->string("last_licence")->nullable();
            $table->string("major")->nullable();
            $table->string("work_year")->nullable();
            $table->enum("work_time", ["fulltime", "parttime"])->nullable();
            $table->string("lang")->nullable();
            $table->tinyInteger("english")->default(0)->nullable();
            $table->tinyInteger("tork")->default(0)->nullable();
            $table->string("other_lang")->nullable();
            $table->string("tarighe_ashnayi")->nullable();
            $table->string("hoghoogh");
            $table->string("email");
            $table->string("city");
            $table->longText("address")->nullable();
            $table->string("home_phone")->nullable();
            $table->string("mobile");
            $table->string("image")->nullable();
            $table->string("resume")->nullable();
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
        Schema::drop('employmentform');
    }

}