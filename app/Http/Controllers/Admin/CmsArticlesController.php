<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\CmsArticles;
use App\Http\Requests\CreateCmsArticlesRequest;
use App\Http\Requests\UpdateCmsArticlesRequest;
use Illuminate\Http\Request;

use App\CmsCategories;


class CmsArticlesController extends Controller {

	/**
	 * Display a listing of cmsarticles
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $cmsarticles = CmsArticles::with("cmscategories")->get();

		return view('admin.cmsarticles.index', compact('cmsarticles'));
	}

	/**
	 * Show the form for creating a new cmsarticles
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    //$cmscategories = CmsCategories::lists("title", "id");

		$cmscategories = CmsCategories::withDepth()->get()->toArray();

		$cmscategoriesNested = [null=>Lang::get('global.Please_select')];

		foreach ($cmscategories as $item)
			$cmscategoriesNested[$item["id"]] = str_repeat("- ",$item["depth"]). $item["title"];

		$cmscategories = $cmscategoriesNested;


	    
        $state = KamiyarFunctions::TranslateState(CmsArticles::$state);

	    return view('admin.cmsarticles.create', compact("cmscategories", "state"));
	}

	/**
	 * Store a newly created cmsarticles in storage.
	 *
     * @param CreateCmsArticlesRequest|Request $request
	 */
	public function store(CreateCmsArticlesRequest $request)
	{
	    
		CmsArticles::create($request->all());

		return redirect()->route('admin.cmsarticles.index');
	}

	/**
	 * Show the form for editing the specified cmsarticles.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$cmsarticles = CmsArticles::find($id);
	    $cmscategories = CmsCategories::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

	    
        $state = $state = KamiyarFunctions::TranslateState(CmsArticles::$state);

		return view('admin.cmsarticles.edit', compact('cmsarticles', "cmscategories", "state"));
	}

	/**
	 * Update the specified cmsarticles in storage.
     * @param UpdateCmsArticlesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCmsArticlesRequest $request)
	{
		$cmsarticles = CmsArticles::findOrFail($id);

        

		$cmsarticles->update($request->all());

		return redirect()->route('admin.cmsarticles.index');
	}

	/**
	 * Remove the specified cmsarticles from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		CmsArticles::destroy($id);

		return redirect()->route('admin.cmsarticles.index');
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
            CmsArticles::destroy($toDelete);
        } else {
            CmsArticles::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.cmsarticles.index');
    }

	public function show($id){
		$cmsarticle = CmsArticles::findOrFail($id);
		return view("article",compact("cmsarticle"));
	}
}
