<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\Settings;
use App\Http\Requests\CreateSettingsRequest;
use App\Http\Requests\UpdateSettingsRequest;
use Illuminate\Http\Request;



class SettingsController extends Controller {

	/**
	 * Display a listing of settings
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $settings = Settings::all();

		return view('admin.settings.index', compact('settings'));
	}

	/**
	 * Show the form for creating a new settings
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{

		if(auth()->user()->role()->first()->id == 1) {
			$state = KamiyarFunctions::TranslateState(Settings::$state);

			return view('admin.settings.create', compact("state"));
		}else{
			abort(403);
		}
	}

	/**
	 * Store a newly created settings in storage.
	 *
     * @param CreateSettingsRequest|Request $request
	 */
	public function store(CreateSettingsRequest $request)
	{

		if(auth()->user()->role()->first()->id == 1) {
			$new = Settings::create($request->all());

			return self::returnType($request->get("save_type"),$new->id);
		}else{
			abort(403);
		}
	}

	/**
	 * Show the form for editing the specified settings.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$settings = Settings::find($id);
	    
	    
        $state = KamiyarFunctions::TranslateState(Settings::$state);

		return view('admin.settings.edit', compact('settings', "state"));
	}

	/**
	 * Update the specified settings in storage.
     * @param UpdateSettingsRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateSettingsRequest $request)
	{
		$settings = Settings::findOrFail($id);

        

		$settings->update($request->all());

		return self::returnType($request->get("save_type"),$settings->id);
	}

	/**
	 * Remove the specified settings from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Settings::destroy($id);

		return redirect()->route('admin.settings.index');
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
            Settings::destroy($toDelete);
        } else {
            Settings::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.settings.index');
    }
	
	private function returnType($save_type,$id){
		
		switch ($save_type){
			case "save":
				return redirect()->route("admin.settings.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.settings.create");
				break;
			case "save_close":
				return redirect()->route("admin.settings.index");
				break;
			default:
				return redirect()->route("admin.settings.index");
				break;

		}
	}
	

}
