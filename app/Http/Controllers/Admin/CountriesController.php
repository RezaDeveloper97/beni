<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\Countries;
use App\Http\Requests\CreateCountriesRequest;
use App\Http\Requests\UpdateCountriesRequest;
use Illuminate\Http\Request;



class CountriesController extends Controller {

	/**
	 * Display a listing of countries
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $countries = Countries::all();

		return view('admin.countries.index', compact('countries'));
	}

	/**
	 * Show the form for creating a new countries
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(Countries::$state);

	    return view('admin.countries.create', compact("state"));
	}

	/**
	 * Store a newly created countries in storage.
	 *
     * @param CreateCountriesRequest|Request $request
	 */
	public function store(CreateCountriesRequest $request)
	{
	    
		
		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));
		
		$new = Countries::create($inputs);
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified countries.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$countries = Countries::findOrFail($id);
	    
	    
        $state = KamiyarFunctions::TranslateState(Countries::$state);

		return view('admin.countries.edit', compact('countries', "state"));
	}

	/**
	 * Update the specified countries in storage.
     * @param UpdateCountriesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCountriesRequest $request)
	{
		$countries = Countries::findOrFail($id);

        

		$inputs = $request->all();
		
		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$countries->update($inputs);

		return self::returnType($request->get("save_type"),$countries->id);
	}

	/**
	 * Remove the specified countries from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Countries::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');
		
		return redirect()->route('admin.countries.index');
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
            Countries::destroy($toDelete);
        } else {
            Countries::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.countries.index');
    }
	
	private function returnType($save_type,$id){
		
		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.countries.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.countries.create");
				break;
			case "save_close":
				return redirect()->route("admin.countries.index");
				break;
			default:
				return redirect()->route("admin.countries.index");
				break;

		}
	}
	
	public function copyItems(Request $request){
		
		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = Countries::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();
			
			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.countries.index');
	}
	
	public function show($en_name){
	
	}

}
