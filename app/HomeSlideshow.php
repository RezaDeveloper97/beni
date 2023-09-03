<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;



use Illuminate\Database\Eloquent\SoftDeletes;

class HomeSlideshow extends Model {

	

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'homeslideshow';
    
    protected $fillable = [
          'title',
          'image',
          'link_to',
          'params',
          'html_tags',
          'css_style',
          'js_code',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        HomeSlideshow::observe(new UserActionsObserver);
    }
    
    
    
    
}