<?php

namespace App\Http\Controllers\Admin;

use App\AboutUsArticles;
use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\AboutUsMenus;
use App\Http\Requests\CreateAboutUsMenusRequest;
use App\Http\Requests\UpdateAboutUsMenusRequest;
use Illuminate\Http\Request;



class AboutUsMenusController extends Controller {

	/**
	 * Display a listing of aboutusmenus
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        AboutUsMenus::fixTree();

$aboutusmenus = AboutUsMenus::withDepth()->get()->toFlatTree();

		return view('admin.aboutusmenus.index', compact('aboutusmenus'));
	}

	/**
	 * Show the form for creating a new aboutusmenus
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(AboutUsMenus::$state);

		$aboutusmenusAll = AboutUsMenus::withDepth()->get()->toArray();

		$aboutusmenusNested[0] = Lang::get("global.without_parent");


            foreach ($aboutusmenusAll as $key => $item) {
                if (isset($id) && $item["id"] == $id)
                    unset($item[$key]);
                else
                    $aboutusmenusNested[$item["id"]] = str_repeat("- ", $item["depth"]) . $item["title"];
    
            }

		$articles = AboutUsArticles::where("state","active")->lists("title","id");

	    return view('admin.aboutusmenus.create', compact("state", "aboutusmenusNested","articles"));
	}

	/**
	 * Store a newly created aboutusmenus in storage.
	 *
     * @param CreateAboutUsMenusRequest|Request $request
	 */
	public function store(CreateAboutUsMenusRequest $request)
	{
	    
		
		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$inputs["params"] = json_encode($inputs["params"]);

		$new = AboutUsMenus::create($inputs);
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified aboutusmenus.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$aboutusmenus = AboutUsMenus::findOrFail($id);

		$aboutusmenus->params = json_decode($aboutusmenus->params);

		//dd($aboutusmenus->params,$aboutusmenus->toArray());

        $state = KamiyarFunctions::TranslateState(AboutUsMenus::$state);

		$aboutusmenusAll = AboutUsMenus::withDepth()->get()->toArray();

$aboutusmenusNested[0] = Lang::get("global.without_parent");


            foreach ($aboutusmenusAll as $key => $item) {
                if (isset($id) && $item["id"] == $id)
                    unset($item[$key]);
                else
                    $aboutusmenusNested[$item["id"]] = str_repeat("- ", $item["depth"]) . $item["title"];
    
            }

		$articles = AboutUsArticles::where("state","active")->lists("title","id");



		return view('admin.aboutusmenus.edit', compact('aboutusmenus', "state", "aboutusmenusNested","articles"));
	}

	/**
	 * Update the specified aboutusmenus in storage.
     * @param UpdateAboutUsMenusRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateAboutUsMenusRequest $request)
	{
		$aboutusmenus = AboutUsMenus::findOrFail($id);

        

		$inputs = $request->all();
		
		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$inputs["params"] = json_encode($inputs["params"]);

		$aboutusmenus->update($inputs);

		return self::returnType($request->get("save_type"),$aboutusmenus->id);
	}

	/**
	 * Remove the specified aboutusmenus from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		AboutUsMenus::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');
		
		return redirect()->route('admin.aboutusmenus.index');
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
            AboutUsMenus::destroy($toDelete);
        } else {
            AboutUsMenus::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.aboutusmenus.index');
    }
	
	private function returnType($save_type,$id){
		
		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.aboutusmenus.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.aboutusmenus.create");
				break;
			case "save_close":
				return redirect()->route("admin.aboutusmenus.index");
				break;
			default:
				return redirect()->route("admin.aboutusmenus.index");
				break;

		}
	}
	
	public function copyItems(Request $request){
		
		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = AboutUsMenus::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();
			
			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.aboutusmenus.index');
	}
	
	public function show($en_name = null){
		$menu = AboutUsMenus::where("en_name",$en_name)->firstOrFail();
		
		//dd($menu->toArray());
		$menu->params = json_decode($menu->params);
		//dd($menu_item->extension);
		switch ($menu->extension){
			case "article":
				$article = app('App\Http\Controllers\Admin\AboutUsArticlesController')->show($menu->params->article);
				//dd($article->toArray());
				return view('about_us_contents',compact("article","menu"));
				break;
		}
	}

}
