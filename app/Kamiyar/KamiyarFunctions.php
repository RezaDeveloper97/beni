<?php
/**
 * Created by PhpStorm.
 * User: kamiyar
 * Date: 10/29/2016
 * Time: 1:47 AM
 */

/**
 * KF : KamiyarFunction
 */
namespace App\Kamiyar;

use App\AboutUsMenus;
use App\CmsMenuItems;
use App\CmsMenus;
use App\Http\Controllers\Admin\OrdersController;
use App\Http\Controllers\UsersController;
use App\Http\Requests\Request;
use App\Settings;
use Illuminate\Support\Facades\Lang;
use Morilog\Jalali\jDateTime;

class KamiyarFunctions {

    /**
     * get state from enum DB and convert to persian for display in list or other...
     * @param $state
     * @return mixed
     */
    public static function TranslateState($state){
        $getState = $state;
        foreach ($getState AS $key => $item){
            $getState[$key] = trans("global.".$item);
        }
        return $getState;
    }



    /**
     * Convert Persian Numbers To English
     * @param $string
     * @return mixed
     */
    public static function PersianNumberToEn($string) {
        $persian = array('۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹');
        $num = range(0, 9);
        return str_replace($persian, $num, $string);
    }

    /**
     * Convert English Numbers To Persian
     * @param $string
     * @return mixed
     */
    public static function EnNumberToPersian($string) {
        $persian = array('۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹');
        $num = range(0, 9);
        return str_replace($num, $persian , $string);
    }

    /**
     * convert jalali date to miladi
     * @param int $year
     * @param int $month
     * @param int $day
     * @param string $time
     * @param bool $timeStamp
     * @return int (timeStamp) or string dateTime (Y-m-d H:i:s)
     * EXAMPLE GET PERSIAN DATE : $date = \Morilog\Jalali\jDate::forge(time());
     * EXAMPLE CONVERT TO MILADI : \App\MyLibs\KamiyarFunctions::JtoM($date->format("Y"),$date->format("m"),$date->format("d"),$date->format("H:i:s"),false)
     */
    public static function JtoM($year = 1395,$month = 1, $day = 5, $time = "00:00:00", $timeStamp = true) {

        $date = jDateTime::toGregorian(
            self::PersianNumberToEn($year),
            self::PersianNumberToEn($month),
            self::PersianNumberToEn($day),false);

        $timeStamped = strtotime($date . " " . $time);

        if($timeStamp) {
            return $timeStamped;
        }else{
            return date("Y-m-d H:i:s",$timeStamped);
        }

    }

    /**
     * @param $menu_id
     * @param bool $showTitle
     * @return menu items
     */
    public static function MenuRender($menu_id,$showTitle = false){
        $menuRoot = CmsMenus::find($menu_id);


        if(count( (array) $menuRoot)>0){
            $items = $menuRoot->menuItemsPublished;




            foreach($items as $key => $perMenuItem) {

                if (!$perMenuItem->isRoot()) {
                    unset($items[$key]);
                }
            }


            return self::menuBuilder($items,$menuRoot->title,$showTitle);
        }else{
            return $menu_id." menu is not Exist!";
        }

    }

    public static function menuBuilder($items,$title,$showTitle,$root=true){

        $ul = $root ? "class='nav navbar-nav'" : "class='dropdown-menu'";

        $html = "";

        if($showTitle)
            $html .= "<h3>$title</h3>";

        $html .= "<ul $ul>";

        foreach($items as $perMenuItem) {


            $subMenu = CmsMenuItems::descendantsOf($perMenuItem->id)->toTree($perMenuItem->id)->where("state","active");

            //if($subMenu->count())
            //dd($subMenu);
            $a = "cms_m/".$perMenuItem->id;

            $perfix = "/";
            $params = json_decode($perMenuItem->params);
            if($perMenuItem->extension == "external") {
                $url = $params->external;
                if($url == "#") {
                    $a = "#";
                }else{
                    $a = strpos($url,"http://") !== false ? $url : "http://".$url;

                }
                $perfix = "";
            }



            if(count( (array) $subMenu)>0){
                $ifSubMenu = $root ? "" : "dropdown-submenu";
                $html .= "<li class='dropdown $ifSubMenu'>";
                $html .= '<a href="'.$perfix.$a.'" target="'.$params->target.'">'.$perMenuItem->title.'</a>';
                $html .= self::menuBuilder($subMenu,$title,$showTitle, false);
                /*foreach($subMenu as $perSubMenu) {
                    //dd($perSubMenu->id);

                }*/
                $html .= "</li>";
            }else{
                $html .= "<li>";

                $html .= "<a href='$perfix"."$a' target='$params->target'>$perMenuItem->title</a>";

                $html .= "</li>";
            }

        }
        $html .= "</ul>";

        return $html;

    }

    public static function showError($code){
        return trans("global.error_show_code",["code"=>$code]);
    }

    public static function showSetting($setting_name,$html = true){

        $setting = Settings::where("name",$setting_name)->first();
        if(count( (array) $setting) > 0){
            if($setting->state == "active"){
                if($html == true) {

                    $return = "<div id='$setting_name' class='setting_body'>";
                    $return .= $setting->show_title ? "<h4 class='setting_title'>" . $setting->title . "</h4>" : "";
                    $return .= "<div class='setting_value'>" . $setting->value . "</div>";
                    $return .= "</div>";
                }else{
                    $return = trim(strip_tags($setting->value));
                }
            }else{
                return "";
            }
            return $return;
        }else{
            return $setting_name." Dose not Exist!";
        }
    }


    public static function random_str($length,$uppercase = false){
        $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        $string = '';
        $max = strlen($characters) - 1;
        for ($i = 0; $i < $length; $i++) {
            $string .= $characters[mt_rand(0, $max)];
        }
        if($uppercase)
            return strtoupper($string);
        else
            return $string;
    }

    /**
     * save shopping cart if exists
     */
    public static function SetUserSessionToDb(){
        if(request()->session()->has("guestShoppingCart")){

            OrdersController::saveGuestShoppingCartToDb();

        }
    }

    /**
     * @param $price
     * @param $dis
     * @return calculated discount
     */
    public static function calDiscount($price,$dis){
        
        if(!empty($price) and !empty($dis)){
              return $price - (($dis / 100 )* $price);
        }
      
        
        
    }

    /**
     * get image and return them thumbnail
     * @param $image
     * @return image thumbnail
     */
    public static function getTmb($image){
        return asset(config("elfinder.root_options.tmbURL")."/".basename($image));
    }


    /**
     * @return about us menu items
     */
    public static function AboutUsMenuRender(){

        $menuAll = AboutUsMenus::where("state","active")->get();

        if(count( (array) $menuAll)>0){

            foreach($menuAll as $key => $perMenuItem) {

                if (!$perMenuItem->isRoot()) {
                    unset($menuAll[$key]);
                }
            }


            return self::AboutUsmenuBuilder($menuAll);
        }

    }

    public static function AboutUsmenuBuilder($items,$root=true){

        $ul = $root ? "" : " class=\"level2\" style=\"display: none;\"";

        $html = "";

        $html .= "<ul $ul>";

        foreach($items as $perMenuItem) {


            $subMenu = AboutUsMenus::descendantsOf($perMenuItem->id)->toTree($perMenuItem->id)->where("state","active");

            //if($subMenu->count())
            //dd($subMenu);
            $a = route("abs.menu.show",$perMenuItem->en_name);

            $perfix = "";
            $params = json_decode($perMenuItem->params);
            if($perMenuItem->extension == "external") {
                $url = $params->external;
                if($url == "#") {
                    $a = "#";
                }else{
                    //$a = strpos($url,"http://") !== false ? $url : "http://".$url;
                    $a = $url;
                }
                $perfix = "";
            }


            $active = request()->getPathInfo() == "/abs/".$perMenuItem->en_name ? "active" : "";

            //dd($active);


            if(count((array) $subMenu)>0){
                $html .= "<li>";
                $title = $root ? "<strong>$perMenuItem->title</strong>" : $perMenuItem->title;
                if($perMenuItem->extension == "none") {
                    $html .= '<span hasChild class="link'.ucfirst($perMenuItem->en_name).'">' . $title . '</span>';
                }else{
                    $html .= '<a hasChild class="'.$active.'" href="' . $perfix . $a . '" target="' . $params->target . '">' . $title . '</a>';
                }
                $html .= self::AboutUsmenuBuilder($subMenu, false);
                /*foreach($subMenu as $perSubMenu) {
                    //dd($perSubMenu->id);

                }*/
                $html .= "</li>";
            }else{
                $html .= "<li>";
                $title = $root ? "<strong>$perMenuItem->title</strong>" : $perMenuItem->title;
                if($perMenuItem->extension == "none") {
                    $html .= "<a NoCHild href='javascript:;'>$title</a>";
                }else{
                    $html .= "<a NoCHild class='".$active."' href='$perfix" . "$a' target='$params->target'>$title</a>";
                }

                $html .= "</li>";
            }

        }
        $html .= "</ul>";

        return $html;

    }

}