<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\CmsMenus;
use App\Http\Requests\CreateCmsMenusRequest;
use App\Http\Requests\UpdateCmsMenusRequest;
use Illuminate\Http\Request;



class CmsMenusController extends Controller {

	/**
	 * Display a listing of cmsmenus
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $cmsmenus = CmsMenus::all();

		return view('admin.cmsmenus.index', compact('cmsmenus'));
	}

	/**
	 * Show the form for creating a new cmsmenus
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(CmsMenus::$state);

	    return view('admin.cmsmenus.create', compact("state"));
	}

	/**
	 * Store a newly created cmsmenus in storage.
	 *
     * @param CreateCmsMenusRequest|Request $request
	 */
	public function store(CreateCmsMenusRequest $request)
	{
	    
		CmsMenus::create($request->all());

		return redirect()->route('admin.cmsmenus.index');
	}

	/**
	 * Show the form for editing the specified cmsmenus.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$cmsmenus = CmsMenus::find($id);


		$state = KamiyarFunctions::TranslateState(CmsMenus::$state);

		return view('admin.cmsmenus.edit', compact('cmsmenus', "state"));
	}

	/**
	 * Update the specified cmsmenus in storage.
     * @param UpdateCmsMenusRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCmsMenusRequest $request)
	{
		$cmsmenus = CmsMenus::findOrFail($id);

        

		$cmsmenus->update($request->all());

		return redirect()->route('admin.cmsmenus.index');
	}

	/**
	 * Remove the specified cmsmenus from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		CmsMenus::destroy($id);

		return redirect()->route('admin.cmsmenus.index');
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
            CmsMenus::destroy($toDelete);
        } else {
            CmsMenus::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.cmsmenus.index');
    }

}
