<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Modal_Survey_form extends Model
{
    use  HasFactory;


    protected $table    = 'tbl_survey_form';


    protected $guarded = ['id'];
    /**

     * Get the index name for the model.

     *

     * @return string

     */

    public function childs() {

        ///  return $this->hasMany('App\Models\Category','parent_id','id') ;

    }
}
