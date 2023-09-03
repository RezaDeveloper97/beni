<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Ostans extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'ostans';
    
    protected $fillable = [
        'country_id',
          'title',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        Ostans::observe(new UserActionsObserver);
    }

    public function DeliveryWays()
    {

        return $this->belongsToMany('\App\DeliverWays', "deliverway_ostans", "ostan_id", "deliverway_id")->where("state","active");
    }
    public function cities()
    {
        return $this->hasMany('App\Cities', 'ostans_id')->where("state","active")->with("shoppingCenters");
    }

    public function country()
    {
        return $this->hasOne('App\Countries', 'id', 'country_id');
    }

}