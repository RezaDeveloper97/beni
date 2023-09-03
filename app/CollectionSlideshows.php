<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class CollectionSlideshows extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'collectionslideshows';

    protected $fillable = [
          'collections_id',
          'image',
          'ordering',
          'state'
    ];

    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        CollectionSlideshows::observe(new UserActionsObserver);
    }

    public function collections()
    {
        return $this->hasOne('App\Collections', 'id', 'collections_id')->with("category");
    }





}
