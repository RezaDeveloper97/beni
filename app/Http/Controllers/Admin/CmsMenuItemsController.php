<?php

namespace App\Http\Controllers\Admin;

use App\CmsArticles;
use App\CmsCategories;
use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\CmsMenuItems;
use App\Http\Requests\CreateCmsMenuItemsRequest;
use App\Http\Requests\UpdateCmsMenuItemsRequest;
use Illuminate\Http\Request;

use App\CmsMenus;


class CmsMenuItemsController extends Controller {

	/**
	 * Display a listing of cmsmenuitems
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
		$cmsmenuitems = CmsMenuItems::with("cmsmenus")->withDepth()->get()->toFlatTree();

		return view('admin.cmsmenuitems.index', compact('cmsmenuitems'));
	}

	/**
	 * Show the form for creating a new cmsmenuitems
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $cmsmenus = CmsMenus::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');


		$cmsmenuitems = CmsMenuItems::withDepth()->get()->toFlatTree();
		$cmsmenuitemsNested[0] = trans("global.without_parent");

		foreach ($cmsmenuitems as $items)
			$cmsmenuitemsNested[$items["id"]] = str_repeat("- ", $items["depth"]) . $items["title"];

		$cmscategories = CmsCategories::withDepth()->get()->toArray();

		$cmscategoriesNested = [];

		foreach ($cmscategories as $items)
			$cmscategoriesNested[$items["id"]] = str_repeat("- ", $items["depth"]) . $items["title"];


		$articles = CmsArticles::lists("title","id");

		$state = KamiyarFunctions::TranslateState(CmsMenuItems::$state);

		return view('admin.cmsmenuitems.create', compact("cmsmenus","cmsmenuitemsNested","cmscategoriesNested","articles","state"));
	}

	/**
	 * Store a newly created cmsmenuitems in storage.
	 *
     * @param CreateCmsMenuItemsRequest|Request $request
	 */
	public function store(CreateCmsMenuItemsRequest $request)
	{
		$input = $request->all();
		$input["params"] = json_encode($input["params"]);
	    //dd($input);
		CmsMenuItems::create($input);

		return redirect()->route('admin.cmsmenuitems.index');
	}

	/**
	 * Show the form for editing the specified cmsmenuitems.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$cmsmenuitems = CmsMenuItems::find($id);

		$cmsmenuitemsAll = CmsMenuItems::withDepth()->get()->toFlatTree();
		$cmsmenuitemsNested[0] = trans("global.without_parent");

		foreach ($cmsmenuitemsAll as $items)
			$cmsmenuitemsNested[$items["id"]] = str_repeat("- ", $items["depth"]) . $items["title"];


		$cmsmenuitems->params = json_decode($cmsmenuitems->params);

	    $cmsmenus = CmsMenus::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');


		$cmscategories = CmsCategories::withDepth()->get()->toArray();

		$cmscategoriesNested = [];

		foreach ($cmscategories as $items)
			$cmscategoriesNested[$items["id"]] = str_repeat("- ", $items["depth"]) . $items["title"];


		$articles = CmsArticles::lists("title","id");

		$state = KamiyarFunctions::TranslateState(CmsMenuItems::$state);

		return view('admin.cmsmenuitems.edit', compact('cmsmenuitems',"cmsmenuitemsNested", "cmsmenus","cmscategoriesNested","articles","state"));

	}

	/**
	 * Update the specified cmsmenuitems in storage.
     * @param UpdateCmsMenuItemsRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCmsMenuItemsRequest $request)
	{
		$cmsmenuitems = CmsMenuItems::findOrFail($id);

		$input = $request->all();
		$input["params"] = json_encode($input["params"]);

		$cmsmenuitems->update($input);

		return redirect()->route('admin.cmsmenuitems.index');
	}

	/**
	 * Remove the specified cmsmenuitems from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		CmsMenuItems::destroy($id);

		return redirect()->route('admin.cmsmenuitems.index');
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
            CmsMenuItems::destroy($toDelete);
        } else {
            CmsMenuItems::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.cmsmenuitems.index');
    }

	public function menuHandler($id){
		$menu_item = CmsMenuItems::findOrFail($id);
		$menu_item->params = json_decode($menu_item->params);
			//dd($menu_item->extension);
		switch ($menu_item->extension){
			case "home":
				return redirect("/");
				break;
			case "oneCategory":
				return redirect()->route("category.show",$menu_item->params->oneCategory);
				break;
			case "article":
				return redirect()->route("article.show",$menu_item->params->article);
				break;
			case "platform":
				return redirect()->route("platform.show",$menu_item->params->platform);
				//return app('App\Http\Controllers\admin\PlatformsController')->show($menu_item->params->platform, request());
				break;
		}
	}

}
