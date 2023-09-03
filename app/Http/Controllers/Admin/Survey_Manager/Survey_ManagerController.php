<?php

namespace App\Http\Controllers\Admin\Survey_Manager;
use App\framehk\funcationhklar;
use App\Http\Controllers\Controller;
use App\Models\Modal_Survey_form;
use App\Http\Requests;
use App\User;
use DB;
use PDO;
////use Morilog\Jalali\Jalalian;
use Illuminate\Http\Request;

class Survey_ManagerController extends Controller{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */


    public function index_show(Request $request){



        return view('admin.Survey_form_Management.View');

    }



    public function filter_pr(Request $request){

        $input = $request->all();
        require  "validation_filter.php";



        $connect_db_filter=DB::connection()->getPdo();
        $part_b_sql=" "; $part_c_sql=" ";
        if (!empty($year_startfooorm_get) and !empty($month_startfooorm_get) and !empty($day_startfooorm_get) and !empty($year_endddfooorm_get) and !empty($month_endddfooorm_get) and !empty($day_endddfooorm_get)){
            $part_b_sql=" and users.year_pre_reg >=:year_pre_reg_start and  users.month_pre_reg >=:month_pre_reg_start and  users.day_pre_reg >=:day_pre_reg_start ";
            $part_c_sql=" and users.year_pre_reg <=:year_pre_reg_enddd and  users.month_pre_reg <=:month_pre_reg_enddd and  users.day_pre_reg <=:day_pre_reg_enddd ";
        }

        if($type_serachtxt_box=="1" or $type_serachtxt_box=="2"):
            /*
            if (!empty($year_startfooorm_get) and !empty($month_startfooorm_get) and !empty($day_startfooorm_get) and !empty($year_endddfooorm_get) and !empty($month_endddfooorm_get) and !empty($day_endddfooorm_get)){
            $part_b_sql=" and year_pre_reg >=:year_pre_reg_start and  month_pre_reg >=:month_pre_reg_start and  day_pre_reg >=:day_pre_reg_start ";
            $part_c_sql=" and year_pre_reg <=:year_pre_reg_enddd and  month_pre_reg <=:month_pre_reg_enddd and  day_pre_reg <=:day_pre_reg_enddd ";

            }*/
        endif;

        $part_filter_by_agent_id_box_Sql="";
        if ($filter_by_agent_id_box!="all"):
            $part_filter_by_agent_id_box_Sql=" and  `agent_id`=:agent_id ";
        endif;





        if ($type_serachtxt_box=="1"):
            $sql_filter_data="SELECT * FROM `tbl_survey_form` where `agent_id` !=''  and `peygiri` LIKE  :peygiri ".$part_b_sql." ".$part_c_sql.$part_filter_by_agent_id_box_Sql."   ORDER BY `date_reg` DESC";
        endif;

        if ($type_serachtxt_box=="2"):
            $sql_filter_data="SELECT * FROM `tbl_survey_form` where `agent_id` !='' and `phone_mobile` LIKE  :phone_mobile ".$part_b_sql." ".$part_c_sql.$part_filter_by_agent_id_box_Sql."   ORDER BY `date_reg` DESC";
        endif;




        if ($type_serachtxt_box=="3" or $type_serachtxt_box=="all"){


            $sql_filter_data="SELECT * FROM `tbl_survey_form` where `agent_id` !='' and `first_last_name_notspace` LIKE  :first_last_name_notspace ".$part_b_sql." ".$part_c_sql." ".$part_filter_by_agent_id_box_Sql."   ORDER BY `date_reg` DESC";

        }








///echo $sql_filter_data;

        /// die("eeeeeeeeeeee");
        /// return '';
        /*echo "<hr>start". $year_startfooorm_get;
        echo "<hr>". $month_startfooorm_get;
        echo  "<hr>". $day_startfooorm_get;


        echo "<hr>enddd". $year_endddfooorm_get;
        echo "<hr>". $month_endddfooorm_get;
        echo  "<hr>". $day_endddfooorm_get;*/

        $result_filter_db_data=$connect_db_filter->prepare($sql_filter_data);
       /// $result_filter_db_data->bindvalue("is_admin","2");

        if ($type_serachtxt_box=="1"):
            $result_filter_db_data->bindvalue("peygiri","".$serachtxt_box1."");
        endif;
        if ($type_serachtxt_box=="2"):
            $result_filter_db_data->bindvalue("phone_mobile","".$serachtxt_box1."");
        endif;

        if ($type_serachtxt_box=="3" or $type_serachtxt_box=="all"){
            $result_filter_db_data->bindvalue("first_last_name_notspace","".$serachtxt_box1."");
            //$result_filter_db_data->bindvalue("workshop_status",$type_workshop_status_box_show);
        }

        if(!empty($part_filter_by_agent_id_box_Sql)):  $result_filter_db_data->bindvalue("agent_id",$filter_by_agent_id_box); endif;


        if (!empty($year_startfooorm_get) and !empty($month_startfooorm_get) and !empty($day_startfooorm_get) and !empty($year_endddfooorm_get) and !empty($month_endddfooorm_get) and !empty($day_endddfooorm_get)){


            $result_filter_db_data->bindvalue("year_pre_reg_start",$year_startfooorm_get);
            $result_filter_db_data->bindvalue("month_pre_reg_start",$month_startfooorm_get);
            $result_filter_db_data->bindvalue("day_pre_reg_start",$day_startfooorm_get);


            $result_filter_db_data->bindvalue("year_pre_reg_enddd",$year_endddfooorm_get);
            $result_filter_db_data->bindvalue("month_pre_reg_enddd",$month_endddfooorm_get);
            $result_filter_db_data->bindvalue("day_pre_reg_enddd",$day_endddfooorm_get);
        }


        if ($result_filter_db_data->execute()) {

            $count_show_list_team = $result_filter_db_data->rowCount();
            /*var_dump($count_show_list_team);
            return '';*/


            return view('admin.Survey_form_Management.Filter_view',compact('result_filter_db_data'));


        }else{
            die(funcationhklar::message_shw_fhk('خطا رخ داده کد 34256',"error","باشه","no","no","yes"));
        }






    }








}
