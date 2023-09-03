<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\CollectionSlideshows;
use App\Http\Requests\CreateCollectionSlideshowsRequest;
use App\Http\Requests\UpdateCollectionSlideshowsRequest;
use Illuminate\Http\Request;

use App\Collections;


class CollectionSlideshowsController extends Controller {

	/**
	 * Display a listing of collectionslideshows
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $collectionslideshows = CollectionSlideshows::with("collections")->orderBy("ordering")->get();

		return view('admin.collectionslideshows.index', compact('collectionslideshows'));
	}

	/**
	 * Show the form for creating a new collectionslideshows
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
        $collections = Collections::select('title','id','categories_id')->with("category")->get()->map(function ($item){




            $title_cata="";
            $title_catb="";

            if(!empty($item->title)):  $title_cata=$item->title ; endif;
            if(!empty($item->category->title)): $title_catb=$item->category->title; endif;
             $tmp['title'] = $title_cata .' ('.$title_catb.')';

            /////  $tmp['title'] = $item->title .' ('.$item->category->title.')';


            $tmp['id'] = $item->id;
            return $tmp;
        })->lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

        $state = KamiyarFunctions::TranslateState(CollectionSlideshows::$state);

	    return view('admin.collectionslideshows.create', compact("collections", "state"));
	}


	/**
	 * Store a newly created collectionslideshows in storage.
	 *
     * @param CreateCollectionSlideshowsRequest|Request $request
	 */
	public function store(CreateCollectionSlideshowsRequest $request)
	{


		$new = CollectionSlideshows::create($request->all());

		return self::returnType($request->get("save_type"),$new->id);

	}

	/**
	 * Show the form for editing the specified collectionslideshows.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$collectionslideshows = CollectionSlideshows::find($id);
        $collections = Collections::select('title','id','categories_id')->with("category")->get()->map(function ($item){
           
           
           
           
$title_cata="";
$title_catb="";
if(!empty($item->title)):  $title_cata=$item->title; endif;
if(!empty($item->category->title)):  $title_catb=$item->category->title; endif;

$tmp['title'] = $title_cata .' ('.$title_catb.')';
           

           
            $tmp['id'] = $item->id;
            return $tmp;
        })->lists("title", "id")->prepend(Lang::get('global.Please_select'), '');


        $state = KamiyarFunctions::TranslateState(CollectionSlideshows::$state);

		return view('admin.collectionslideshows.edit', compact('collectionslideshows', "collections", "state"));
	}

	/**
	 * Update the specified collectionslideshows in storage.
     * @param UpdateCollectionSlideshowsRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCollectionSlideshowsRequest $request)
	{
		$collectionslideshows = CollectionSlideshows::findOrFail($id);



		$collectionslideshows->update($request->all());

		return self::returnType($request->get("save_type"),$collectionslideshows->id);
	}

	/**
	 * Remove the specified collectionslideshows from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		CollectionSlideshows::destroy($id);

		return redirect()->route('admin.collectionslideshows.index');
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
            CollectionSlideshows::destroy($toDelete);
        } else {
            CollectionSlideshows::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.collectionslideshows.index');
    }

	private function returnType($save_type,$id){

		switch ($save_type){
			case "save":
				return redirect()->route("admin.collectionslideshows.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.collectionslideshows.create");
				break;
			case "save_close":
				return redirect()->route("admin.collectionslideshows.index");
				break;
			default:
				return redirect()->route("admin.collectionslideshows.index");
				break;

		}
	}

}
