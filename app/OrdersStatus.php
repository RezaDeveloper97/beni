<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class OrdersStatus extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'ordersstatus';
    
    protected $fillable = [
          'title',
        'color',
        'submit_order_step',
        'paid_order_step',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        OrdersStatus::observe(new UserActionsObserver);
    }

    public static function setSubmitOrderStep($id){
        OrdersStatus::where("submit_order_step",1)->update(["submit_order_step"=>0]);

        return OrdersStatus::find($id)->update(["submit_order_step"=>1]);
    }

    public static function setPaidOrderStep($id){
        OrdersStatus::where("paid_order_step",1)->update(["paid_order_step"=>0]);

        return OrdersStatus::find($id)->update(["paid_order_step"=>1]);
    }
    
    
    
    
}