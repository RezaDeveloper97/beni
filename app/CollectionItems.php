<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class CollectionItems extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'collectionitems';

    protected $fillable = [
          'collections_id',
          'title',
          'description',
          'amount_default',
          'price',
          'image',
          'thumb_image',
          'ordering',
          'state'
    ];

    public static $amount_default = ["0" => "0", "1" => "1", "2" => "2", "3" => "3", "4" => "4"];
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        CollectionItems::observe(new UserActionsObserver);
    }

    public function collections()
    {
        return $this->hasOne('App\Collections', 'id', 'collections_id')->with("category");
    }





}
