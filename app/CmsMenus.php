<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class CmsMenus extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'cmsmenus';
    
    protected $fillable = [
          'title',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        CmsMenus::observe(new UserActionsObserver);
    }

    public function menuItemsPublished(){
        return $this->hasMany('\App\CmsMenuItems',"cmsmenus_id")->where("state","=","active")->orderBy("ordering","DESC");
    }
    
    
    
    
}