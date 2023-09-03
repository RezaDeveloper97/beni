<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class ShoppingCenter extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'shoppingcenter';
    
    protected $fillable = [
          'cities_id',
          'title',
          'address',
          'phone',
          'google_map_url',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        ShoppingCenter::observe(new UserActionsObserver);
    }
    
    public function cities()
    {
        return $this->hasOne('App\Cities', 'id', 'cities_id');
    }


    
    
    
}