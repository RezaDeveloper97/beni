<?php

namespace App;

use Laraveldaily\Quickadmin\Observers\UserActionsObserver;
use Illuminate\Database\Eloquent\Model;

class ShoppingCart extends Model
{
    protected $table    = 'shopping_cart';

    protected $fillable = [
        'user_id',
        'order_type',
        'user_saved_canvas_id',
        'uscu_id',
    ];

    public static function boot()
    {
        parent::boot();

        ShoppingCart::observe(new UserActionsObserver);
    }

    public function designParams(){
        return $this->hasMany('\App\ShoppingCartDesignParams',"shopping_cart_id")->with("param","option");
    }

    public function userSavedCanvas(){
        return $this->hasOne('\App\UserSavedCanvas','id',"user_saved_canvas_id")->with("parentDesign","sectionsWithParent");
    }

}
