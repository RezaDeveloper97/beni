<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;




class Cities extends Model {





    protected $table    = 'cities';

    protected $fillable = [
          'title',
          'ostans_id',
          'ordering',
          'state'
    ];

    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        Cities::observe(new UserActionsObserver);
    }

    public function ostans()
    {
        return $this->hasOne('App\Ostans', 'id', 'ostans_id')->with('country');
    }

    public function shoppingCenters()
    {
        return $this->hasMany('App\ShoppingCenter', 'cities_id')->where("state","active")->orderBy("ordering");
    }




}
