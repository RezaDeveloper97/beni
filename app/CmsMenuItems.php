<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;

class CmsMenuItems extends Model {


    use NodeTrait;



    // guard attributes from mass-assignment
    protected $guarded = array('id', 'lft', 'rgt');

    

    protected $table    = 'cmsmenuitems';
    
    protected $fillable = [
          'title',
          'cmsmenus_id',
          'extension',
          'params',
            'parent_id',
            'state',
            'ordering'
    ];


    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];

    public static function boot()
    {
        parent::boot();

        CmsMenuItems::observe(new UserActionsObserver);
    }
    
    public function cmsmenus()
    {
        return $this->hasOne('App\CmsMenus', 'id', 'cmsmenus_id');
    }


    
    
    
}