<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Collections extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'collections';
    
    protected $fillable = [
          'categories_id',
          'title',
          'en_name',
          'short_desc',
          'long_desc',
        'slideshow_desc',
          'footer_desc',
          'discount',
          'image',
          'price_list_pdf',
          'catalog_pdf',
          'opportunity',
        'limited_sales',
          'is_new',
        'ordering',
        'state'
    ];


    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];

    public static function boot()
    {
        parent::boot();

        Collections::observe(new UserActionsObserver);
    }
    
    public function categories()
    {
        return $this->hasOne('App\Categories', 'id', 'categories_id');
    }

    public function category()
    {
        return $this->belongsTo('App\Categories', 'categories_id');
    }
    
    public function items(){
        return $this->hasMany('\App\CollectionItems','collections_id')->where('state','active')->orderBy('ordering');
    }

    public function slideshow(){
        return $this->hasMany('\App\CollectionSlideshows','collections_id')->where('state','active')->orderBy('ordering');
    }

    /**
     * @return related this collection collections
     */
    public function related(){
        return $this->belongsToMany('\App\Collections','collections_related','collection_one_id',"collection_two_id")->orderBy('ordering');
    }

    /**
     * @return related this collection collections
     */
    public function activeRelated(){
        return $this->belongsToMany('\App\Collections','collections_related','collection_one_id',"collection_two_id")->with(["categories","slideshow"])->where("state","active")->orderBy('ordering');
    }




}