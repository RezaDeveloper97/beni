<?php

namespace App\Http\Controllers;

use App\HomeModules;
use App\HomeSlideshow;
use App\Http\Requests;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return redirect("/");
    }

    public function show(){
        $slideshow = HomeSlideshow::where("state","active")->orderBy("ordering")->get();
        $modules = HomeModules::where("state","active")->get();
        return view('home',compact("slideshow","modules"));
    }
}
