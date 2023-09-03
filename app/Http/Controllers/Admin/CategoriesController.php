<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\Categories;
use App\Http\Requests\CreateCategoriesRequest;
use App\Http\Requests\UpdateCategoriesRequest;
use Illuminate\Http\Request;



class CategoriesController extends Controller {

	/**
	 * Display a listing of categories
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $categories = Categories::all();

		return view('admin.categories.index', compact('categories'));
	}

	/**
	 * Show the form for creating a new categories
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(Categories::$state);

	    return view('admin.categories.create', compact("state"));
	}

	/**
	 * Store a newly created categories in storage.
	 *
     * @param CreateCategoriesRequest|Request $request
	 */
	public function store(CreateCategoriesRequest $request)
	{

		$inputs = $request->all();

		$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));
		
		$new = Categories::create($inputs);
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified categories.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$categories = Categories::find($id);
	    
	    
        $state = KamiyarFunctions::TranslateState(Categories::$state);

		return view('admin.categories.edit', compact('categories', "state"));
	}

	/**
	 * Update the specified categories in storage.
     * @param UpdateCategoriesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCategoriesRequest $request)
	{
		$categories = Categories::findOrFail($id);

		$inputs = $request->all();

		$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$categories->update($inputs);

		return self::returnType($request->get("save_type"),$categories->id);
	}

	/**
	 * Remove the specified categories from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Categories::destroy($id);

		return redirect()->route('admin.categories.index');
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
            Categories::destroy($toDelete);
        } else {
            Categories::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.categories.index');
    }
	
	private function returnType($save_type,$id){
		
		switch ($save_type){
			case "save":
				return redirect()->route("admin.categories.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.categories.create");
				break;
			case "save_close":
				return redirect()->route("admin.categories.index");
				break;
			default:
				return redirect()->route("admin.categories.index");
				break;

		}
	}

	public function show($catName = null){
		$category = Categories::where("en_name",$catName)->with('collections')->firstOrFail();

		return view("products.category",compact('category'));
		//dd($category->toArray());
	}

}
