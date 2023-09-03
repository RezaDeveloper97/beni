<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Orders extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'orders';
    
    protected $fillable = [
        'code',
        'order_status_title',
        'order_status_id',
        'users_id',
        'user_full_name',
        'user_email',
        'user_mobile',
        'persian_submit_date',
        'delivery_method_title',
        'delivery_params',
        'transferee_name',
        'transferee_ostan',
        'transferee_city',
        'transferee_address_params',
        'payment_method_title',
        'payment_params',
        'total_price',
        'delivery_price',
        'discount_price',
        'tax_price',
        'final_price',
        'paid',
        'factor_params',
        'state',
    ];
    

    public static function boot()
    {
        parent::boot();

        Orders::observe(new UserActionsObserver);
    }
    
    public function user()
    {
        return $this->hasOne('App\User', 'id', 'users_id');
    }

    public function itemsDesign()
    {
        return $this->hasMany('App\OrderItemsDesign','order_id');
    }



    public static function generateOrderCode(){
        $last_id = Orders::select("id")->orderBy('created_at', 'desc')->first();
        $last_id = empty($last_id) ? 0 : $last_id->id;
        return "DT-".($last_id+1);
    }


    
    
    
}