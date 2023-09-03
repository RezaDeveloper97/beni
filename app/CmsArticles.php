<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class CmsArticles extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'cmsarticles';
    
    protected $fillable = [
          'title',
          'cmscategories_id',
          'content',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        CmsArticles::observe(new UserActionsObserver);
    }
    
    public function cmscategories()
    {
        return $this->hasOne('App\CmsCategories', 'id', 'cmscategories_id');
    }


    
    
    
}