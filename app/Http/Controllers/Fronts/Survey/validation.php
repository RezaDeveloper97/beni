<?php

use App\framehk\funcationhklar;


if (empty($request['agent_id'])): echo  funcationhklar::message_shw_fhk('درخواست درست ارسال نشده شماره خطا 65482',"error","باشه","no","yes","no"); die(); endif;
$request['agent_id']=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($request['agent_id']));
if($request['agent_id']!="1" and $request['agent_id']!="2"  and $request['agent_id']!="3" and $request['agent_id']!="4"){
    echo  funcationhklar::message_shw_fhk('درخواست درست ارسال نشده شماره خطا 56794',"error","باشه","no","yes","no"); die();
}

if (empty($request['first_name'])): echo  funcationhklar::message_shw_fhk('نام وارد نشده',"error","باشه","no","yes","no"); die(); endif;
if (empty($request['last_name'])): echo   funcationhklar::message_shw_fhk('نام خانوادگی وارد نشده',"error","باشه","no","yes","no"); die(); endif;



if (!isset($request['phone_mobile']) or empty($request['phone_mobile'])):  $text_message="شماره موبایل وارد نشده";funcationhklar::message_shw_fhk($text_message,"error","OK","no","yes","no");die(); endif;
$request['phone_mobile']=funcationhklar::fa_toenbyhossein(funcationhklar::cleanstringbyhossein($request['phone_mobile']));
$request['phone_mobile']=str_replace("+98","",$request['phone_mobile']);
if (funcationhklar::isphonebyh($request['phone_mobile'])!="yesphone"): $text_message="شماره موبایل درست وارد نشده";funcationhklar::message_shw_fhk($text_message,"error","OK","no","yes","no");die(); endif;


if (empty($request['description'])): echo  funcationhklar::message_shw_fhk('فیلد انتقاد یا پیشنهاد وارد نشده',"error","باشه","no","yes","no"); die(); endif;


?>
<?php

$request['first_name']=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($request['first_name']));
$request['last_name']=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($request['last_name']));
$request['description']=funcationhklar::cleanstringbyhossein(funcationhklar::fa_toenbyhossein($request['description']));


