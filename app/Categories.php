<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Categories extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'categories';
    
    protected $fillable = [
          'title',
          'en_name',
          'description',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        Categories::observe(new UserActionsObserver);
    }


    public function collections(){
        return $this->hasMany('\App\Collections','categories_id')
            ->select('id',"categories_id","title",'en_name',"short_desc",'discount','image','opportunity','limited_sales')
            ->where('state','active')
            ->orderBy('ordering');
    }
    
    
    
}