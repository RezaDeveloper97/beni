<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;



use Illuminate\Database\Eloquent\SoftDeletes;

class AboutUsArticles extends Model {

	

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'aboutusarticles';
    
    protected $fillable = [
          'title',
          'en_name',
          'content',
          'css_style',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        AboutUsArticles::observe(new UserActionsObserver);
    }
    
    
    
    
}