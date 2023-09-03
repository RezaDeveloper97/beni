<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\CollectionItems;
use App\Http\Requests\CreateCollectionItemsRequest;
use App\Http\Requests\UpdateCollectionItemsRequest;
use Illuminate\Http\Request;

use App\Collections;


class CollectionItemsController extends Controller {

	/**
	 * Display a listing of collectionitems
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $collectionitems = CollectionItems::with("collections")->orderBy("ordering")->get();

		return view('admin.collectionitems.index', compact('collectionitems'));
	}

	/**
	 * Show the form for creating a new collectionitems
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $collections = Collections::select('title','id','categories_id')->with("category")->get()->map(function ($item){

            $title_cata="";
            $title_catb="";
            if(!empty($item->title)):  $title_cata=$item->title; endif;
            if(!empty($item->category->title)):  $title_catb=$item->category->title; endif;

            $tmp['title'] = $title_cata . ' ('. $title_catb .')';

           ///// $tmp['title'] = $item->title .' ('.$item->category->title.')';



            $tmp['id'] = $item->id;
	       return $tmp;
        })->lists("title", "id")->prepend(Lang::get('global.Please_select'), '');


        $amount_default = CollectionItems::$amount_default;
        $state = KamiyarFunctions::TranslateState(CollectionItems::$state);

	    return view('admin.collectionitems.create', compact("collections", "amount_default", "state"));
	}

	/**
	 * Store a newly created collectionitems in storage.
	 *
     * @param CreateCollectionItemsRequest|Request $request
	 */
	public function store(CreateCollectionItemsRequest $request)
	{


		$new = CollectionItems::create($request->all());

		return self::returnType($request->get("save_type"),$new->id);

	}

	/**
	 * Show the form for editing the specified collectionitems.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$collectionitems = CollectionItems::find($id);
        $collections = Collections::select('title','id','categories_id')->with("category")->get()->map(function ($item){

            $title_cata="";
            $title_catb="";
            if(!empty($item->title)):  $title_cata=$item->title; endif;
            if(!empty($item->category->title)):  $title_catb=$item->category->title; endif;

            $tmp['title'] = $title_cata . ' ('. $title_catb .')';
            ////$tmp['title'] = $item->title .' ('.$title_catb.')';



            $tmp['id'] = $item->id;
            return $tmp;
        })->lists("title", "id")->prepend(Lang::get('global.Please_select'), '');


        $amount_default = CollectionItems::$amount_default;
        $state = KamiyarFunctions::TranslateState(CollectionItems::$state);

		return view('admin.collectionitems.edit', compact('collectionitems', "collections", "amount_default", "state"));
	}

	/**
	 * Update the specified collectionitems in storage.
     * @param UpdateCollectionItemsRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCollectionItemsRequest $request)
	{
		$collectionitems = CollectionItems::findOrFail($id);



		$collectionitems->update($request->all());

		return self::returnType($request->get("save_type"),$collectionitems->id);
	}

	/**
	 * Remove the specified collectionitems from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		CollectionItems::destroy($id);

		return redirect()->route('admin.collectionitems.index');
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
            CollectionItems::destroy($toDelete);
        } else {
            CollectionItems::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.collectionitems.index');
    }

	private function returnType($save_type,$id){

		switch ($save_type){
			case "save":
				return redirect()->route("admin.collectionitems.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.collectionitems.create");
				break;
			case "save_close":
				return redirect()->route("admin.collectionitems.index");
				break;
			default:
				return redirect()->route("admin.collectionitems.index");
				break;

		}
	}

}
