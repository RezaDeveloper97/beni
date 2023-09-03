<?php

namespace App\Http\Controllers;

use App\AboutUsArticles;
use App\Categories;
use Illuminate\Http\Request;

use App\Http\Requests;

class ToolsController extends Controller
{
    public function getMainMenu(){
        return Categories::select("id",'title','en_name','state','ordering')->where("state",'active')->orderBy('ordering')->get();
        /*dd($menu_categories->toArray());
        return "mainMenu sdasd";*/
    }

    public function staticContent($en_name){
        //dd($en_name);
        $article = AboutUsArticles::where("en_name",$en_name)->firstOrFail();
        $menu["en_name"] = null;
        //dd($article->toArray());
        return view('about_us_contents',compact("article","menu"));
    }
}
