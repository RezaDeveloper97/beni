<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class CmsCategories extends Model {

    //use SoftDeletes;

    use NodeTrait;



    // guard attributes from mass-assignment
    protected $guarded = array('id', 'lft', 'rgt');
    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    //protected $dates = ['deleted_at'];

    protected $table    = 'cmscategories';
    
    protected $fillable = [
        'title',
        'description',
        'parent_id',
        'state',
        'ordering'
    ];

    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];

    public static function boot()
    {
        parent::boot();

        CmsCategories::observe(new UserActionsObserver);
    }

    public function articles(){
        return $this->hasMany('\App\CmsArticles','cmscategories_id')->where("state","active")->orderBy("ordering","desc");
    }
    
    
    
    
}