<?php

namespace App\Http\Controllers;

use App\Collections;
use Illuminate\Http\Request;

use App\Http\Requests;

class SearchController extends Controller
{
    public function search(){

        $keyword = request()->keyword;

        $result = [
            "keyword" => $keyword,
            "count" => 0,
            "data" => null,
        ];
        if(!empty($keyword)){
            $query = Collections::query();
            $query->select("id", 'categories_id', 'title','en_name',
                'short_desc', 'long_desc','slideshow_desc','footer_desc');

            $query->with("category","items");
            $query->where('state',"active");
            $query->where('title',"like","%{$keyword}%");
            $query->orWhere('short_desc',"like","%{$keyword}%");
            $query->orWhere('long_desc',"like","%{$keyword}%");
            $query->orWhere('slideshow_desc',"like","%{$keyword}%");
            $query->orWhere('footer_desc',"like","%{$keyword}%");


            $query->orWhereHas("category",function ($q) use ($keyword){
                $q->Where('title',"like","%{$keyword}%");
                $q->orWhere('description',"like","%{$keyword}%");
                return $q;
            });

            $query->orWhereHas("items",function ($q)  use ($keyword){
                $q->Where('title',"like","%{$keyword}%");
                $q->orWhere('description',"like","%{$keyword}%");
                return $q;
            });


            $data = $query->orderBy("ordering","desc")->get();

            $result["count"] = $data->sum(function ($items) {
                return count($items['items']);
            });
            $result["data"] = $data;
            //dd($data->toArray());
        }
        
        return view("search.show",compact("result"));
            
        
    }
}
