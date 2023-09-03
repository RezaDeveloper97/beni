<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;




class UsersRealAddress extends Model {

    

    

    protected $table    = 'usersrealaddress';
    
    protected $fillable = [
          'users_id',
          'name_transferee',
          'mobile',
          'phone',
          'ostans_id',
          'cities_id',
          'address',
          'postal_code',
          'default_address'
    ];
    

    public static function boot()
    {
        parent::boot();

        UsersRealAddress::observe(new UserActionsObserver);
    }
    
    public function users()
    {
        return $this->hasOne('App\User', 'id', 'users_id');
    }

    public function ostan()
    {
        return $this->hasOne('App\Ostans', 'id', 'ostans_id');
    }

    /**
     * @return this ostan and deliveries methods
     */
    public function ostans()
    {
        return $this->hasOne('App\Ostans', 'id', 'ostans_id')->with("DeliveryWays");
    }


    public function cities()
    {
        return $this->hasOne('App\Cities', 'id', 'cities_id');
    }

    public static function set_default($id){
        UsersRealAddress::where("users_id",Auth::id())->update(["default_address"=>0]);
        return UsersRealAddress::find($id)->update(["default_address"=>1]);
    }
    
    
    
}