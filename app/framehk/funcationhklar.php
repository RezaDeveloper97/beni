<?php
namespace App\framehk;
use App\Models\User;
///use Illuminate\Support\Facades\Auth;
use DB;
///use Morilog\Jalali\Jalalian;
use Morilog\Jalali\Facades\jDate;
use PDO;

class funcationhklar {
    public static function testprinthk($dd){

        return "ttt".$dd;
    }

    public static function selected_option_check_fhk($value_item_a,$value_item_b){
////بهتره فضای خالی چپ راست باشه
        if($value_item_a==$value_item_b)
            return ' selected="selected" ';
        else
            return '';
    }
     public static function message_shw_fhk($text_show,$error_type="error",$button_ok_text="باشه",$footer_load="yes",$boxdivshow="yes",$popups_show="yes",$type_return="echo"){
        $result_reurn="";

if($popups_show=="yes"):
$result_reurn='<script>
try {
Swal.fire({
title: "'.$text_show.'",
icon: "'.$error_type.'",

confirmButtonText: "'.$button_ok_text.'",
showCancelButton: false,
showCloseButton: false
});
}
catch(error) {
///console.log(error);
}
</script>';
endif;

if($boxdivshow=="yes"){
if($error_type=="error") echo '<div class="alert alert-danger">'.$text_show.'</div>';
if($error_type=="success") echo '<div class="alert alert-success">'.$text_show.'</div>';
}

        if($footer_load=="yes"){
            ///@include_once('layouts.dashboard-admin-footer');
        }

        if($type_return=='echo') : echo $result_reurn; return ''; endif;
        if($type_return=='return'):  return $result_reurn;endif;

    }

     public static function cleanstringbyhossein($stringclean,$fa_number="")
    {

        if (empty($stringclean) != 1) {

            if($fa_number=="toen"): $stringclean=funcationhklar::fa_toenbyhossein($stringclean); endif;
            //$stringclean=htmlspecialchars($stringclean);
            $stringclean = htmlspecialchars($stringclean, ENT_QUOTES, "UTF-8");
            $stringclean = strip_tags($stringclean);
            $stringclean = htmlentities($stringclean);
            $stringclean = addslashes($stringclean);
            //get_magic_quotes_gpc();


            //$stringclean=mysql_real_escape_string($stringclean,$conaction);

        } else {
            $stringclean = "";
        }


        return $stringclean;
    }


    public static function cleanstringexcelbk($stringclean)
    {

        if (!empty($stringclean)) {

            $stringclean = htmlspecialchars($stringclean, ENT_QUOTES, "UTF-8");
            $stringclean = strip_tags($stringclean);
            $stringclean = htmlentities($stringclean);
            $stringclean = addslashes($stringclean);

            $text_bat = array("'","alert()","<?","`","echo",'=VLOOKUP','=','sum','avg','AVG','ALERT','alert','"','VLOOKUP',';','#REF!','<','>','script',"'",'OR','AND');
            $stringclean= str_replace($text_bat, "", $stringclean);
        } else {
            $stringclean = "";
        }


        return $stringclean;
    }
     public static function check_jalali_dateischeck($date)
    {
        /*	if (preg_match("/^[1-9][0-9]{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/", $date)) {
        return "true";
    } else {
        return "false";
    }
    return "false";*/
        $ndate  = explode('/', $date);
        return count($ndate) == 3 && (strlen($ndate[0]) == 2 || strlen($ndate[0]) == 4) && ((strlen($ndate[1]) == 2 || strlen($ndate[1]) == 1) && $ndate[1] >= 1 && $ndate[1] <= 12) && ((strlen($ndate[2]) == 2 || strlen($ndate[2]) == 1) && $ndate[2] >= 1 && $ndate[2] <= 31);
    }


     public static function fa_toenbyhossein($texts)
    {
        if (empty($texts)) {
            return "";
        } else {
            $en = array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
            $fa = array("۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹");
            return str_replace($fa, $en, $texts);
        }
    }

     public static function isphonebyh($strphone)
    {
        if (isset($strphone)) {
            if (trim($strphone) != null) {

                $strphone = funcationhklar::fa_toenbyhossein($strphone);

                if (strlen(utf8_decode($strphone)) == 11) {


                    if (preg_match('/^(09)[0-9]{9}$/', $strphone)) {



                        return "yesphone";
                    } else {
                        return "nophonenumber";
                    }

                    return "nophonenumber";
                } else {
                    return "nophone";
                }
            } else {


                return "empty";
            }
        } else {


            return "noisset";
        }
    }





     public static function redirectbh($url)
    {
        ///  location.replace("https://www.w3schools.com")
        //if (!headers_sent()){
        //  header('Location: '.$url); exit;
        // }else{
        echo '<script type="text/javascript">';
        echo 'window.location.href="' . $url . '";';
        echo '</script>';

        echo '<noscript>';
        echo '<meta http-equiv="refresh" content="0;url=' . $url . '" />';
        echo '</noscript>';
        return "";
        //}
    }

     public static function redirectwait($url,$waitingmicrs){
        ///  location.replace("https://www.w3schools.com")
        //if (!headers_sent()){
        //  header('Location: '.$url); exit;
        // }else{
        echo '<script type="text/javascript">';
        echo 'setTimeout(function () {';
        echo 'window.location.href="'.$url.'";';
        echo '},'.$waitingmicrs.');';
        echo '</script>';
        echo '<noscript>';
        echo '<meta http-equiv="refresh" content="0;url='.$url.'" />';
        echo '</noscript>';
         return "";

        //}
    }
     public static function convert_shamsitotimestamp($dateshamse, $timeshamse)
    {


        if (isset($dateshamse)) {
            if (trim($dateshamse) != null) {


                $datefilte23s = funcationhklar::fa_toenbyhossein($dateshamse);
                if (isset($timeshamse)) {
                    if (trim($timeshamse) != null) {

                        $timesfilte23s = funcationhklar::fa_toenbyhossein($timeshamse);

                        ///include_once "jdfdatelib.php";
/////////Jalalian::

////dddddddddddd بعددا حلش کن تابع jmktime
                        if (substr_count($timesfilte23s, ':') <= 2) {
                            $timesfilte23s = $timesfilte23s . ":";
                        }
                        list($year, $month, $day) = explode('/', $datefilte23s);
                        list($hour, $minute, $second) = explode(':', $timesfilte23s);
                       /// $timestamp =  jmktime($hour, $minute, $second, $month, $day, $year, "", 'Asia/Tehran');

                        $timestamp = (new jDate($year, $month, $day,$hour,$minute,$second))->getTimestamp();
                        //$timestamp = jmktime($hour, $minute, $second, $month, $day, $year, "", 'Asia/Tehran');

                        return $timestamp;
                    }
                }
            }
        }
    }


       public static function jdatehk($format,$timeshamse){
        if(!empty($format) and  !empty($timeshamse)):
           //// =Jalalian::fromFormat($format,$timeshamse);
           $timestamp =jDate::forge($timeshamse)->format($format);
           return $timestamp;
           endif;
    }



    public static function check_value_repet($rnd_get, $tbl_get,$field_rnd_tbl)
    {
        $connect_db_fhk_lar=DB::connection()->getPdo();

        $sql_show_list_team = "SELECT * FROM `".$tbl_get."` where ".$field_rnd_tbl."=:".$field_rnd_tbl;
        $result_rnd_repet= $connect_db_fhk_lar->prepare($sql_show_list_team);
        $result_rnd_repet->bindvalue("$field_rnd_tbl", $rnd_get);
        if ($result_rnd_repet->execute()) {

            $count_show_list_team = $result_rnd_repet->rowCount();
            $row_rnd_repet= $result_rnd_repet->fetch(PDO::FETCH_ASSOC);

            if ($count_show_list_team==0) return "no";




        }

        return  "yes";
    }



}


?>
