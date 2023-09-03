<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;




class UsersLegalAddress extends Model {

    

    

    protected $table    = 'userslegaladdress';
    
    protected $fillable = [
          'users_id',
          'company_name',
          'economic_code',
          'meli_code',
          'record_number',
          'ostans_id',
          'cities_id',
          'address',
          'postal_code',
          'name_transferee',
            'mobile_transferee',
          'default_address'
    ];
    

    public static function boot()
    {
        parent::boot();

        UsersLegalAddress::observe(new UserActionsObserver);
    }
    
    public function users()
    {
        return $this->hasOne('App\User', 'id', 'users_id');
    }

    public function ostan()
    {
        return $this->hasOne('App\Ostans', 'id', 'ostans_id');
    }

    public function ostans()
    {
        return $this->hasOne('App\Ostans', 'id', 'ostans_id')->with("DeliveryWays");
    }


    public function cities()
    {
        return $this->hasOne('App\Cities', 'id', 'cities_id');
    }


    
    
    
}