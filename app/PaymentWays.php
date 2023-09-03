<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;




class PaymentWays extends Model {

    

    

    protected $table    = 'paymentways';
    
    protected $fillable = [
          'title',
          'description',
          'params',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        PaymentWays::observe(new UserActionsObserver);
    }

    public static function activated(){
        return PaymentWays::where("state","active");
    }
    
    
    
}