<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\HomeModules;
use App\Http\Requests\CreateHomeModulesRequest;
use App\Http\Requests\UpdateHomeModulesRequest;
use Illuminate\Http\Request;



class HomeModulesController extends Controller {

	/**
	 * Display a listing of homemodules
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $homemodules = HomeModules::all();

		return view('admin.homemodules.index', compact('homemodules'));
	}

	/**
	 * Show the form for creating a new homemodules
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(HomeModules::$state);

		
	    return view('admin.homemodules.create', compact("state"));
	}

	/**
	 * Store a newly created homemodules in storage.
	 *
     * @param CreateHomeModulesRequest|Request $request
	 */
	public function store(CreateHomeModulesRequest $request)
	{
	    
		
		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));
		
		$new = HomeModules::create($inputs);
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified homemodules.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$homemodules = HomeModules::findOrFail($id);
		
	    
	    
        $state = KamiyarFunctions::TranslateState(HomeModules::$state);

		
		return view('admin.homemodules.edit', compact('homemodules', "state"));
	}

	/**
	 * Update the specified homemodules in storage.
     * @param UpdateHomeModulesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateHomeModulesRequest $request)
	{
		$homemodules = HomeModules::findOrFail($id);

        

		$inputs = $request->all();
		
		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$homemodules->update($inputs);

		return self::returnType($request->get("save_type"),$homemodules->id);
	}

	/**
	 * Remove the specified homemodules from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		HomeModules::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');
		
		return redirect()->route('admin.homemodules.index');
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
            HomeModules::destroy($toDelete);
        } else {
            HomeModules::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.homemodules.index');
    }
	
	private function returnType($save_type,$id){
		
		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.homemodules.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.homemodules.create");
				break;
			case "save_close":
				return redirect()->route("admin.homemodules.index");
				break;
			default:
				return redirect()->route("admin.homemodules.index");
				break;

		}
	}
	
	public function copyItems(Request $request){
		
		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = HomeModules::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();
			
			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.homemodules.index');
	}
	
	public function show(){
	
	}

}
