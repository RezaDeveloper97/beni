<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;



use Illuminate\Database\Eloquent\SoftDeletes;

class Intro extends Model {

	

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'intro';
    
    protected $fillable = [
          'name',
          'html',
          'ordering',
          'state',
          'meta_keys',
          'meta_desc'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];

	
	
    public static $dataTableField = ["name" => "name","ordering" => "ordering","state" => "state"];


    public static function boot()
    {
        parent::boot();

        Intro::observe(new UserActionsObserver);
    }
    
    
    
    
}