<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;




class DeliverWays extends Model {

    

    

    protected $table    = 'deliverways';
    
    protected $fillable = [
          'title',
          'description',
          'price',
          'ordering',
          'state'
    ];
    
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static function boot()
    {
        parent::boot();

        DeliverWays::observe(new UserActionsObserver);
    }

    public function ostans(){

        return $this->belongsToMany('\App\Ostans',"deliverway_ostans","deliverway_id","ostan_id");

    }
    
    
    
}