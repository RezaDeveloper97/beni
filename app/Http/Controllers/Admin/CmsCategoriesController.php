<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\CmsCategories;
use App\Http\Requests\CreateCmsCategoriesRequest;
use App\Http\Requests\UpdateCmsCategoriesRequest;
use Illuminate\Http\Request;



class CmsCategoriesController extends Controller {

	/**
	 * Display a listing of cmscategories
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
		$cmscategories = CmsCategories::withDepth()->get()->toFlatTree();

		return view('admin.cmscategories.index', compact('cmscategories'));
	}

	/**
	 * Show the form for creating a new cmscategories
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
		$cmscategories = CmsCategories::withDepth()->get()->toArray();

		$cmscategoriesNested[0] = Lang::get("global.without_parent");

		foreach ($cmscategories as $cmscategory)
			$cmscategoriesNested[$cmscategory["id"]] = str_repeat("- ", $cmscategory["depth"]) . $cmscategory["title"];

		//dd($platformsNested);

		$state = KamiyarFunctions::TranslateState(CmsCategories::$state);
	    
	    return view('admin.cmscategories.create', compact("state", "cmscategoriesNested"));
	}

	/**
	 * Store a newly created cmscategories in storage.
	 *
     * @param CreateCmsCategoriesRequest|Request $request
	 */
	public function store(CreateCmsCategoriesRequest $request)
	{

		//dd($request->all());

		CmsCategories::create($request->all());


		return redirect()->route('admin.cmscategories.index');
	}

	/**
	 * Show the form for editing the specified cmscategories.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$cmscategories = CmsCategories::find($id);

		$cmscategoriesAll = CmsCategories::withDepth()->get()->toArray();

		$cmscategoriesNested[0] = Lang::get("global.without_parent");

		foreach ($cmscategoriesAll as $key => $thisCmscategory) {
			if ($thisCmscategory["id"] == $id)
				unset($thisCmscategory[$key]);
			else
				$cmscategoriesNested[$thisCmscategory["id"]] = str_repeat("- ", $thisCmscategory["depth"]) . $thisCmscategory["title"];

		}

		$state = KamiyarFunctions::TranslateState(CmsCategories::$state);
	    
		return view('admin.cmscategories.edit', compact('cmscategories',"cmscategoriesNested","state"));
	}

	/**
	 * Update the specified cmscategories in storage.
     * @param UpdateCmsCategoriesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCmsCategoriesRequest $request)
	{
		$cmscategories = CmsCategories::findOrFail($id);

        

		$cmscategories->update($request->all());

		return redirect()->route('admin.cmscategories.index');
	}

	/**
	 * Remove the specified cmscategories from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		CmsCategories::destroy($id);

		return redirect()->route('admin.cmscategories.index');
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
            CmsCategories::destroy($toDelete);
        } else {
            CmsCategories::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.cmscategories.index');
    }

	public function show($id){
		$cmsCategory = CmsCategories::with("articles")->findOrFail($id);
		return view("category",compact("cmsCategory"));
	}

}
