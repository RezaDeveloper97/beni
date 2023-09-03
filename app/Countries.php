<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Countries extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'countries';
    
    protected $fillable = [
          'title',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        Countries::observe(new UserActionsObserver);
    }

    public function ostans()
    {
        return $this->hasMany('App\Ostans', 'country_id')->with("cities")->where("state","active");
    }
    
    
    
    
}