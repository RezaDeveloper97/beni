<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;



use Illuminate\Database\Eloquent\SoftDeletes;

class HomeModules extends Model {

	

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'homemodules';
    
    protected $fillable = [
          'title',
          'image',
          'description',
          'link_to',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        HomeModules::observe(new UserActionsObserver);
    }
    
    
    
    
}