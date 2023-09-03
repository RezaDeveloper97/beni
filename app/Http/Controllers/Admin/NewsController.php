<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\News;
use App\Http\Requests\CreateNewsRequest;
use App\Http\Requests\UpdateNewsRequest;
use Illuminate\Http\Request;



class NewsController extends Controller {

	/**
	 * Display a listing of news
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $news = News::all();

		return view('admin.news.index', compact('news'));
	}

	/**
	 * Show the form for creating a new news
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(News::$state);

	    return view('admin.news.create', compact("state"));
	}

	/**
	 * Store a newly created news in storage.
	 *
     * @param CreateNewsRequest|Request $request
	 */
	public function store(CreateNewsRequest $request)
	{
	    
		
		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));
		
		$new = News::create($inputs);
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified news.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$news = News::findOrFail($id);
	    
	    
        $state = KamiyarFunctions::TranslateState(News::$state);

		return view('admin.news.edit', compact('news', "state"));
	}

	/**
	 * Update the specified news in storage.
     * @param UpdateNewsRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateNewsRequest $request)
	{
		$news = News::findOrFail($id);

        

		$inputs = $request->all();
		
		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$news->update($inputs);

		return self::returnType($request->get("save_type"),$news->id);
	}

	/**
	 * Remove the specified news from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		News::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');
		
		return redirect()->route('admin.news.index');
	}

    /**
     * Mass delete function from index page
     * @param Request $request
     *
     * @return mixed
     */
    public function massDelete(Request $request)
    {
        if ($request->get('toDelete') != 'mass') {
            $toDelete = json_decode($request->get('toDelete'));
            News::destroy($toDelete);
        } else {
            News::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.news.index');
    }
	
	private function returnType($save_type,$id){
		
		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.news.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.news.create");
				break;
			case "save_close":
				return redirect()->route("admin.news.index");
				break;
			default:
				return redirect()->route("admin.news.index");
				break;

		}
	}
	
	public function copyItems(Request $request){
		
		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = News::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();
			
			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.news.index');
	}
	
	public function show($en_name = null){
		var_dump($_GET);
		
		
		if(!empty($_GET)){
		    
		    
foreach ($_GET as $key => $val) {
echo "$key <br>";
$en_name=$key;
}
		    
		}
		
		
		
		$news = collect(News::where("state","active")->orderBy("ordering","DESC")->get()->toArray())->keyBy("en_name")->all();



	
		$thisNews = null;
		if(key_exists($en_name,$news)){
			$thisNews = $news[$en_name];
		}
		else{
			$thisNews = News::where("state","active")->orderBy("ordering","DESC")->firstOrFail()->toArray();
			$en_name = $thisNews["en_name"];
		}
		
		//	var_dump($news);

		//dd($prevNews,$nextNews);



		if($thisNews){
			$thisNewsKey = array_flip(array_keys($news))[$en_name];
			$NewsValues = array_values($news);
			$prevNews = key_exists($thisNewsKey-1,$NewsValues) ? $NewsValues[$thisNewsKey-1] : null;
			$nextNews = key_exists($thisNewsKey+1,$NewsValues) ? $NewsValues[$thisNewsKey+1] : null;
			return view("news",compact('news',"thisNews","prevNews","nextNews"));
		}

		return abort(404);
	}

}
