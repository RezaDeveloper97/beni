<?php

namespace App\Http\Controllers\Admin;

use App\CollectionItems;
use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use FontLib\TrueType\Collection;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\Collections;
use App\Http\Requests\CreateCollectionsRequest;
use App\Http\Requests\UpdateCollectionsRequest;
use Illuminate\Http\Request;

use App\Categories;


class CollectionsController extends Controller {

	/**
	 * Display a listing of collections
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $collections = Collections::orderBy('id', 'desc')->with("categories")->get();

		return view('admin.collections.index', compact('collections'));
	}

	/**
	 * Show the form for creating a new collections
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $categories = Categories::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

      $collections = Collections::with('category')->get();

      $coll_related = [];
      foreach ($collections as $collection){
         //// $coll_related[$collection->id] = $collection->title . ' ('. $collection->category->title .')';

$title_cata="";
$title_catb="";
if(!empty($collection->title)):  $title_cata=$collection->title; endif;
if(!empty($collection->category->title)):  $title_catb=$collection->category->title; endif;

		  $coll_related[$collection->id] = $title_cata . ' ('. $title_catb .')';
      }

		//dd($coll_related);

		$state = KamiyarFunctions::TranslateState(Collections::$state);

	    return view('admin.collections.create', compact("categories",'state',"coll_related"));
	}


	public function store(CreateCollectionsRequest $request)
	{

		$inputs = $request->all();

		$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$new = Collections::create($inputs);

		// add related if is have it
		if(!empty($inputs["coll_related"]))
			$new->related()->attach($inputs["coll_related"]);



		return self::returnType($request->get("save_type"),$new->id);

	}

	/**
	 * Show the form for editing the specified collections.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$collections = Collections::with("related")->find($id);

	    $categories = Categories::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

      $collectionsAll = Collections::with('category')->get();

		unset($collectionsAll[$id]);

		$related = [];
		foreach ($collections->related as $item)
			$related[$item->id] = $item->id;

      $coll_related = [];
      foreach ($collectionsAll as $collection){
          
          if(isset($collection['id']) && isset($collection['title'])){

              $title_cata="";
              $title_catb="";

              if(!empty($collection['title'])):  $title_cata=$collection['title']; endif;
              if(!empty($collection->category->title)): $title_catb=$collection->category->title; endif;
              
              
                 $coll_related[$collection['id']] =  $title_cata . ' ('. $title_catb .')';
              
          }
       
          
          
      }


      //dd($related,$coll_related->toArray());

		$state = KamiyarFunctions::TranslateState(Collections::$state);

		return view('admin.collections.edit', compact('collections', "categories", 'state',"coll_related","related"));
	}

	/**
	 * Update the specified collections in storage.
     * @param UpdateCollectionsRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCollectionsRequest $request)
	{
		$collections = Collections::findOrFail($id);


		//dd(strtolower($request->en_name));
		$inputs = $request->all();

		$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));



		$collections->update($inputs);

		// update related if is have it
		if(!empty($inputs["coll_related"]))
		$collections->related()->sync($inputs["coll_related"]);

		return self::returnType($request->get("save_type"),$collections->id);
	}

	/**
	 * Remove the specified collections from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Collections::destroy($id);

		return redirect()->route('admin.collections.index');
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
            Collections::destroy($toDelete);
        } else {
            Collections::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.collections.index');
    }

	private function returnType($save_type,$id){

		switch ($save_type){
			case "save":
				return redirect()->route("admin.collections.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.collections.create");
				break;
			case "save_close":
				return redirect()->route("admin.collections.index");
				break;
			default:
				return redirect()->route("admin.collections.index");
				break;

		}
	}

	public function show($colName = null){
		$collection = Collections::where("en_name",$colName)->with('activeRelated','category','items',"slideshow")->firstOrFail();

		//dd($collection->activeRelated->toArray());

		$select_amount = CollectionItems::$amount_default;
		$select_amount[0] = trans("global.select");
		//dd($select_amount);

		return view("products.collection",compact('collection',"select_amount"));
		//dd($category->toArray());
	}

}
