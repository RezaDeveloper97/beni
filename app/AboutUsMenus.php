<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Kalnoy\Nestedset\NodeTrait;
use Illuminate\Database\Eloquent\SoftDeletes;

class AboutUsMenus extends Model {

	use NodeTrait;

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'aboutusmenus';
    
    protected $fillable = [
          'title',
          'en_name',
          'extension',
          'params',
          'ordering',
          'state'
        ,'parent_id'
];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        AboutUsMenus::observe(new UserActionsObserver);
    }
    
    
    
    
}