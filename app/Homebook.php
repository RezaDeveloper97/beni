<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;





class Homebook extends Model {

	

    

    

    protected $table    = 'homebook';
    
    protected $fillable = [
          'title',
          'en_name',
          'short_desc',
          'content',
          'image',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];

	
	
    public static $dataTableField = ["title" => "title","en_name" => "en_name","image" => "image","ordering" => "ordering","state" => "state"];


    public static function boot()
    {
        parent::boot();

        Homebook::observe(new UserActionsObserver);
    }
    
    
    
    
}