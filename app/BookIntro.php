<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;



use Illuminate\Database\Eloquent\SoftDeletes;

class BookIntro extends Model {



    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    //protected $table    = 'homebook';
    protected $table    = 'bookintro';

    protected $guarded = [];

    /*protected $fillable = [
          'title',
          'subtitle',
          'content',
          'image',
          'ordering',
          'state',
          'meta_keys',
          'meta_desc'
    ];*/

    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];



    public static $dataTableField = ["name" => "name","title" => "title","subtitle" => "subtitle","image" => "image","ordering" => "ordering","state" => "state"];


    public static function boot()
    {
        parent::boot();

        BookIntro::observe(new UserActionsObserver);
    }




}
