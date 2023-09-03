<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\AboutUsArticles;
use App\Http\Requests\CreateAboutUsArticlesRequest;
use App\Http\Requests\UpdateAboutUsArticlesRequest;
use Illuminate\Http\Request;



class AboutUsArticlesController extends Controller {

	/**
	 * Display a listing of aboutusarticles
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $aboutusarticles = AboutUsArticles::all();

		return view('admin.aboutusarticles.index', compact('aboutusarticles'));
	}

	/**
	 * Show the form for creating a new aboutusarticles
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(AboutUsArticles::$state);

	    return view('admin.aboutusarticles.create', compact("state"));
	}

	/**
	 * Store a newly created aboutusarticles in storage.
	 *
     * @param CreateAboutUsArticlesRequest|Request $request
	 */
	public function store(CreateAboutUsArticlesRequest $request)
	{
	    
		
		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));
		
		$new = AboutUsArticles::create($inputs);
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified aboutusarticles.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$aboutusarticles = AboutUsArticles::findOrFail($id);

        $state = KamiyarFunctions::TranslateState(AboutUsArticles::$state);

		return view('admin.aboutusarticles.edit', compact('aboutusarticles', "state"));
	}

	/**
	 * Update the specified aboutusarticles in storage.
     * @param UpdateAboutUsArticlesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateAboutUsArticlesRequest $request)
	{
		$aboutusarticles = AboutUsArticles::findOrFail($id);

		$inputs = $request->all();
		
		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$aboutusarticles->update($inputs);

		return self::returnType($request->get("save_type"),$aboutusarticles->id);
	}

	/**
	 * Remove the specified aboutusarticles from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		AboutUsArticles::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');
		
		return redirect()->route('admin.aboutusarticles.index');
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
            AboutUsArticles::destroy($toDelete);
        } else {
            AboutUsArticles::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.aboutusarticles.index');
    }
	
	private function returnType($save_type,$id){
		
		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.aboutusarticles.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.aboutusarticles.create");
				break;
			case "save_close":
				return redirect()->route("admin.aboutusarticles.index");
				break;
			default:
				return redirect()->route("admin.aboutusarticles.index");
				break;

		}
	}
	
	public function copyItems(Request $request){
		
		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = AboutUsArticles::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();
			
			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.aboutusarticles.index');
	}
	
	public function show($id){
		return AboutUsArticles::findOrFail($id);
	}

}
