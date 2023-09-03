<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\HomeSlideshow;
use App\Http\Requests\CreateHomeSlideshowRequest;
use App\Http\Requests\UpdateHomeSlideshowRequest;
use Illuminate\Http\Request;



class HomeSlideshowController extends Controller {

	/**
	 * Display a listing of homeslideshow
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $homeslideshow = HomeSlideshow::all();

		return view('admin.homeslideshow.index', compact('homeslideshow'));
	}

	/**
	 * Show the form for creating a new homeslideshow
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(HomeSlideshow::$state);

		
	    return view('admin.homeslideshow.create', compact("state"));
	}

	/**
	 * Store a newly created homeslideshow in storage.
	 *
     * @param CreateHomeSlideshowRequest|Request $request
	 */
	public function store(CreateHomeSlideshowRequest $request)
	{
	    
		
		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));
		
		$new = HomeSlideshow::create($inputs);
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified homeslideshow.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$homeslideshow = HomeSlideshow::findOrFail($id);
		
	    
	    
        $state = KamiyarFunctions::TranslateState(HomeSlideshow::$state);

		
		return view('admin.homeslideshow.edit', compact('homeslideshow', "state"));
	}

	/**
	 * Update the specified homeslideshow in storage.
     * @param UpdateHomeSlideshowRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateHomeSlideshowRequest $request)
	{
		$homeslideshow = HomeSlideshow::findOrFail($id);

        

		$inputs = $request->all();
		
		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$homeslideshow->update($inputs);

		return self::returnType($request->get("save_type"),$homeslideshow->id);
	}

	/**
	 * Remove the specified homeslideshow from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		HomeSlideshow::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');
		
		return redirect()->route('admin.homeslideshow.index');
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
            HomeSlideshow::destroy($toDelete);
        } else {
            HomeSlideshow::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.homeslideshow.index');
    }
	
	private function returnType($save_type,$id){
		
		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.homeslideshow.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.homeslideshow.create");
				break;
			case "save_close":
				return redirect()->route("admin.homeslideshow.index");
				break;
			default:
				return redirect()->route("admin.homeslideshow.index");
				break;

		}
	}
	
	public function copyItems(Request $request){
		
		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = HomeSlideshow::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();
			
			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.homeslideshow.index');
	}
	
	public function show(){
	
	}

}
