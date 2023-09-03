<?php

namespace App\Http\Controllers\Admin;

use App\Countries;
use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\ShoppingCenter;
use App\Http\Requests\CreateShoppingCenterRequest;
use App\Http\Requests\UpdateShoppingCenterRequest;
use Illuminate\Http\Request;

use App\Cities;


class ShoppingCenterController extends Controller {

	/**
	 * Display a listing of shoppingcenter
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $shoppingcenter = ShoppingCenter::with("cities")->get();

		return view('admin.shoppingcenter.index', compact('shoppingcenter'));
	}

	/**
	 * Show the form for creating a new shoppingcenter
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $citiesGet = Cities::with("ostans")->select("title", "id", "ostans_id")->get();
		//dd($citiesGet->toArray());
		foreach ($citiesGet as $item){
			$cities[$item->id] = $item->title. " -> ".$item->ostans->title. " -> ".$item->ostans->country->title;
		}
		//dd($cities);

        $state = KamiyarFunctions::TranslateState(ShoppingCenter::$state);

	    return view('admin.shoppingcenter.create', compact("cities", "state"));
	}

	/**
	 * Store a newly created shoppingcenter in storage.
	 *
     * @param CreateShoppingCenterRequest|Request $request
	 */
	public function store(CreateShoppingCenterRequest $request)
	{


		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$new = ShoppingCenter::create($inputs);

		return self::returnType($request->get("save_type"),$new->id);

	}

	/**
	 * Show the form for editing the specified shoppingcenter.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$shoppingcenter = ShoppingCenter::findOrFail($id);
	    $cities = Cities::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');


        $state = KamiyarFunctions::TranslateState(ShoppingCenter::$state);

		return view('admin.shoppingcenter.edit', compact('shoppingcenter', "cities", "state"));
	}

	/**
	 * Update the specified shoppingcenter in storage.
     * @param UpdateShoppingCenterRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateShoppingCenterRequest $request)
	{
		$shoppingcenter = ShoppingCenter::findOrFail($id);



		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$shoppingcenter->update($inputs);

		return self::returnType($request->get("save_type"),$shoppingcenter->id);
	}

	/**
	 * Remove the specified shoppingcenter from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		ShoppingCenter::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');

		return redirect()->route('admin.shoppingcenter.index');
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
            ShoppingCenter::destroy($toDelete);
        } else {
            ShoppingCenter::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.shoppingcenter.index');
    }

	private function returnType($save_type,$id){

		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.shoppingcenter.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.shoppingcenter.create");
				break;
			case "save_close":
				return redirect()->route("admin.shoppingcenter.index");
				break;
			default:
				return redirect()->route("admin.shoppingcenter.index");
				break;

		}
	}

	public function copyItems(Request $request){

		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = ShoppingCenter::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();

			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.shoppingcenter.index');
	}

	public function show(){

		$data = Countries::where("state","active")->with("ostans")->get();
		//dd($data->toArray());
		//$last20ShoppingCenters = ShoppingCenter::select("id","title")->where("state","active")->take(20)->get();
		$last20ShoppingCenters = ShoppingCenter::select("id","title")->where("state","active")->orderBy("ordering")->take(20)->get();

		//dd($last20ShoppingCenters->toArray());

		return view("shopping_center",compact("data","last20ShoppingCenters"));
	}

}
