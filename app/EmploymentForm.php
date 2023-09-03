<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;

use Carbon\Carbon;

use Morilog\Jalali\Facades\jDate;

use Illuminate\Database\Eloquent\SoftDeletes;

class EmploymentForm extends Model
{


    use SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    protected $table = 'employmentform';

    protected $fillable = [
        'job_title',
        'name',
        'birthday',
        'gender',
        'married',
        'khedmat',
        'last_licence',
        'major',
        'work_year',
        'work_time',
        'lang',
        'english',
        'tork',
        'other_lang',
        'tarighe_ashnayi',
        'hoghoogh',
        'email',
        'city',
        'address',
        'home_phone',
        'mobile',
        'image',
        'resume',
        'description',
        'ordering',
        'state'
    ];

    public static $gender = ["male" => "آقا", "female" => "خانم"];
    public static $married = ["mojarad" => "مجرد", "motahel" => "متاهل"];
    public static $khedmat = ["mashmool" => "مشمول", "moaf" => "معاف", "etmam" => "اتمام خدمت"];
    public static $work_time = ["fulltime" => "تمام وقت", "parttime" => "پاره وقت"];
    public static $state = ["active" => "active", "inactive" => "inactive", "archive" => "archive"];


    public static $dataTableField = ["job_title" => "job_title", "name" => "name", "birthday" => "birthday", "gender" => "gender", "email" => "email", "city" => "city", "mobile" => "mobile", 'created_at' => 'created_at'];


    public static function boot()
    {
        parent::boot();

        EmploymentForm::observe(new UserActionsObserver);
    }


    public function getCreatedAtAttribute($input)
    {
        return jDate::forge($input)->format('datetime');
    }
}
