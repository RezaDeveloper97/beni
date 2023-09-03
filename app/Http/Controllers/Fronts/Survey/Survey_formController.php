<?php

namespace App\Http\Controllers\Fronts\Survey;
use App\framehk\funcationhklar;
use App\Http\Controllers\Controller;
use App\Models\Modal_Survey_form;
use App\Http\Requests;
use App\User;
use DB;
use PDO;
////use Morilog\Jalali\Jalalian;
use Illuminate\Http\Request;

class Survey_formController extends Controller{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */


    public function index_show(Request $request){


        if (empty($request['agent'])): echo  funcationhklar::message_shw_fhk('درخواست درست ارسال نشده شماره خطا 65482',"error","باشه","no","yes","no"); die(); endif;
        $request['agent']=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($request['agent']));
        if($request['agent']!="1" and $request['agent']!="2"  and $request['agent']!="3" and $request['agent']!="4"){
            echo  funcationhklar::message_shw_fhk('درخواست درست ارسال نشده شماره خطا 56794',"error","باشه","no","yes","no"); die();
        }

        $agent_id_Get=$request['agent'];

        return view('fronts.Surveyform.View',compact("agent_id_Get"));

    }



    public function survey_form_pr(Request $request){

require_once "validation.php";

        $firstname_and_lastname=$request['first_name'] ." ".$request['last_name'];
        $firstname_and_lastname_nospace=str_replace(" ","",$firstname_and_lastname);

        $connect_db_fhk=DB::connection()->getPdo();



        $year_reg_Get=funcationhklar::fa_toenbyhossein(funcationhklar::jdatehk("Y",time()));
        $month_reg_get=funcationhklar::fa_toenbyhossein(funcationhklar::jdatehk("m",time()));
        $day_reg_get=funcationhklar::fa_toenbyhossein(funcationhklar::jdatehk("d",time()));

        $random_peygiri=round(rand(1,99999)) . round(rand(10,999));
        if(funcationhklar::check_value_repet($random_peygiri,"tbl_survey_form","peygiri")!="no"): $random_peygiri=round(rand(1,99999)) . round(rand(10,999)); endif;


        $sqlinsert_tblformcost="INSERT INTO `tbl_survey_form` (`id`,`peygiri`,`first_name`,`last_name`,`firstname_and_lastname`,`first_last_name_notspace`,`phone_mobile`,`description`,`date_reg`,`status_view_byadmin`,`year_reg`,`month_reg`,`day_reg`,`agent_id`) VALUES (NULL,:peygiri,:first_name,:last_name,:firstname_and_lastname,:first_last_name_notspace,:phone_mobile,:description,:date_reg,:status_view_byadmin,:year_reg,:month_reg,:day_reg,:agent_id)";

        $resultinsert_tblformcost=$connect_db_fhk->prepare($sqlinsert_tblformcost);
        $resultinsert_tblformcost->bindvalue("peygiri",$random_peygiri);
        $resultinsert_tblformcost->bindvalue("first_name",$request['first_name']);
        $resultinsert_tblformcost->bindvalue("last_name",$request['last_name']);
        $resultinsert_tblformcost->bindvalue("firstname_and_lastname",$firstname_and_lastname);
        $resultinsert_tblformcost->bindvalue("first_last_name_notspace",$firstname_and_lastname_nospace);
        $resultinsert_tblformcost->bindvalue("date_reg",time());
        $resultinsert_tblformcost->bindvalue("status_view_byadmin","no");
        $resultinsert_tblformcost->bindvalue("phone_mobile",$request['phone_mobile']);
        $resultinsert_tblformcost->bindvalue("description",$request['description']);
        $resultinsert_tblformcost->bindvalue("year_reg",$year_reg_Get);
        $resultinsert_tblformcost->bindvalue("month_reg",$month_reg_get);
        $resultinsert_tblformcost->bindvalue("day_reg",$day_reg_get);
        $resultinsert_tblformcost->bindvalue("agent_id",$request['agent_id']);


if($resultinsert_tblformcost->execute()){
    $random_peygiri_show=" کد پیگیری : ".$random_peygiri;
?>
<script>
$("#cardboxbhfhbk").replaceWith('<div  class="cardboxbh" style="padding-right: 50px;padding-left: 50px;padding-bottom: 28px;padding-top: 50px;"  id="cardboxbhfhbk"><center><img class="img_tick_formb" style="width: 83px;" src="https://yatash.ir/images/tick_icon.png"><div style="font-size: 22px;font-weight: bold;font-family:BYekan;text-align: center;padding-top: 13px;padding-bottom: 25px;color: #47cb87;">فرم با موفقیت ارسال شد.</div><div style="font-size: 17px;font-weight: normal !important;font-family:BYekan;text-align: center;padding-top: 13px;padding-bottom: 25px;"><span style="font-family:BYekan;font-weight: bold;color: #3d7fad;margin-bottom: 13px;display: block;"><?php echo $random_peygiri_show; ?></span><br><div class="descccc">لطفاً شماره رهگیری اخذ شده را جهت پیگیری کارشناسان ما نزد خود محفوظ نگه دارید.</div> </div></center></div>');
scrolltoformray();
</script>

<?php

    return 'd';
        }else{
            echo  funcationhklar::message_shw_fhk('خطا رخ داده کد 4234236',"error","باشه","no","yes","no"); die();
        }






//
//        $Modal_Survey_form_new = new Modal_Survey_form();
//
//       // $Modal_Survey_form_new['first_name']=$request['first_name'];
////        $Modal_Survey_form_new['last_name']=$request['last_name'];
////        $Modal_Survey_form_new['firstname_and_lastname']=$firstname_and_lastname;
////        $Modal_Survey_form_new['first_last_name_notspace']=$firstname_and_lastname_nospace;
////        $Modal_Survey_form_new['date_reg']=time();
////        $Modal_Survey_form_new['status_view_byadmin']="no";
//        ///$Modal_Survey_form_new->save();


    }





}
