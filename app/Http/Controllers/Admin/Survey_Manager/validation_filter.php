<?php

use App\framehk\funcationhklar;




$serachtxt_box1="%%";
if (empty($input['type_serachtxt'])): die(funcationhklar::message_shw_fhk('نوع درست وارد نشده',"error","باشه","no","no","yes")); endif;
$type_serachtxt_box=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($input['type_serachtxt']));


$filter_by_agent_id_box="all";
$filter_by_agent_id_box_show="%%";
if (!empty($input['filter_by_agent_id'])):
$filter_by_agent_id_box=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($input['filter_by_agent_id']));
///if ($filter_by_agent_id_box=="1" or $filter_by_agent_id_box=="2"): $filter_by_agent_id_box_show="".$filter_by_agent_id_box.""; endif;
$filter_by_agent_id_box_show="".$filter_by_agent_id_box."";
endif;





$serachtxt_box="%%";
if (isset($input['serachtxt'])){
    if(trim($input['serachtxt'])!=null){
        $serachtxt_box=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($input['serachtxt']));


            if ($type_serachtxt_box=="1"){
            /*          if($hk_framework->check_code_melli_fhk($serachtxt_box)=="yes"){
            $error_txt_get="کد ملی درست وارد نشده";
            echo '<div class="alert alert-danger col-lg-12 col-md-12 col-sm-12 col-12" style="font-size: 14px;font-family: iransans !important;">'.$error_txt_get.'</div>';
            echo $hk_framework->message_shw_fhk($error_txt_get,"error","باشه","no");
            die();
            }*/

            }


    $serachtxt_box1="%%";
    if (trim($serachtxt_box)!=null){
    if ($type_serachtxt_box!="all"):
    $serachtxt_box_replace=str_replace(" ","",$serachtxt_box); $serachtxt_box1="%".$serachtxt_box_replace."%";
    endif;
    }


    }

}
?>
<?php
/* start code convert shamsi start time */
$time_stamp_shamsi_to_jalali_startfooorm="";
$date_startfooorm_show_user_getuser="";
if (isset($input['date_startfooorm_show_user'])){
    if(trim($input['date_startfooorm_show_user'])!=null){

        $date_startfooorm_show_user_getuser=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($input['date_startfooorm_show_user']));
        if (funcationhklar::check_jalali_dateischeck($date_startfooorm_show_user_getuser)){
        $time_stamp_shamsi_to_jalali_startfooorm=funcationhklar::convert_shamsitotimestamp($date_startfooorm_show_user_getuser,"00:01:05");
           //// echo "<br><br><br><br><br><br>sttttttarrtttt<br>".$time_stamp_shamsi_to_jalali_startfooorm."<br><br>";


        }else{
        die(funcationhklar::message_shw_fhk('تاریخ شروع درست انتخاب نشده کد 67',"error","باشه","no","no","yes"));
        }

    }
}

$year_startfooorm_get=""; $month_startfooorm_get=""; $day_startfooorm_get="";
if (!empty($time_stamp_shamsi_to_jalali_startfooorm)){
$year_startfooorm_get=funcationhklar::fa_toenbyhossein(funcationhklar::jdatehk("Y",$time_stamp_shamsi_to_jalali_startfooorm));
    ///echo "<br><br><br><br><br><br>yyyyyyyyyyyy<br>".$year_startfooorm_get."<br><br>";

$month_startfooorm_get=funcationhklar::fa_toenbyhossein(funcationhklar::jdatehk("m",$time_stamp_shamsi_to_jalali_startfooorm));
$day_startfooorm_get=funcationhklar::fa_toenbyhossein(funcationhklar::jdatehk("d",$time_stamp_shamsi_to_jalali_startfooorm));
}
/* start code convert shamsi endd time */


/* start code convert shamsi endddtime */

$time_stamp_shamsi_to_jalali_endddfooorm=""; $date_endddfooorm_show_user_getuser="";
if (isset($input['date_endddfooorm_show_user'])){
    if(trim($input['date_endddfooorm_show_user'])!=null){

        $date_endddfooorm_show_user_getuser=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($input['date_endddfooorm_show_user']));
        if (funcationhklar::check_jalali_dateischeck($date_endddfooorm_show_user_getuser)){
            $time_stamp_shamsi_to_jalali_endddfooorm=funcationhklar::convert_shamsitotimestamp($date_endddfooorm_show_user_getuser,"00:01:05");
///echo "<br><br><br><br><br><br>eeeeeeenmnnnnddd<br>".$time_stamp_shamsi_to_jalali_endddfooorm."<br><br>";
///return '';
        }else{
     die(funcationhklar::message_shw_fhk('کد 4145 تاریخ شروع درست انتخاب نشده',"error","باشه","no","no","yes"));
        }

    }
}


$year_endddfooorm_get="";$month_endddfooorm_get="";$day_endddfooorm_get="";
if (!empty($time_stamp_shamsi_to_jalali_endddfooorm)){
$year_endddfooorm_get=funcationhklar::fa_toenbyhossein(funcationhklar::jdatehk("Y",$time_stamp_shamsi_to_jalali_endddfooorm));
$month_endddfooorm_get=funcationhklar::fa_toenbyhossein(funcationhklar::jdatehk("m",$time_stamp_shamsi_to_jalali_endddfooorm));
$day_endddfooorm_get=funcationhklar::fa_toenbyhossein(funcationhklar::jdatehk("d",$time_stamp_shamsi_to_jalali_endddfooorm));
}
/* end code convert shamsi endddtime */


///if (isset($input['date_startfooorm_show_user']) and isset($input['date_endddfooorm_show_user'])){

   if(trim($input['date_startfooorm_show_user'])!=null):
      if(trim($input['date_endddfooorm_show_user'])==null):
       die(funcationhklar::message_shw_fhk('تاریخ پایان انتخاب نشده',"error","باشه","no","no","yes"));
      endif;
   endif;


  if(trim($input['date_endddfooorm_show_user'])!=null):
        if(trim($input['date_startfooorm_show_user'])==null):
            die(funcationhklar::message_shw_fhk('تاریخ شروع انتخاب نشده',"error","باشه","no","no","yes"));
        endif;


 endif;



///}

?>

