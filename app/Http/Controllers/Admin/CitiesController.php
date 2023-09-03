<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\Cities;
use App\Http\Requests\CreateCitiesRequest;
use App\Http\Requests\UpdateCitiesRequest;
use Illuminate\Http\Request;

use App\Ostans;


class CitiesController extends Controller {

	/**
	 * Display a listing of cities
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $cities = Cities::with("ostans")->get();

		return view('admin.cities.index', compact('cities'));
	}

	/**
	 * Show the form for creating a new cities
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $ostans = Ostans::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

	    
        $state = KamiyarFunctions::TranslateState(Cities::$state);

	    return view('admin.cities.create', compact("ostans", "state"));
	}

	/**
	 * Store a newly created cities in storage.
	 *
     * @param CreateCitiesRequest|Request $request
	 */
	public function store(CreateCitiesRequest $request)
	{
	    
		
		$new = Cities::create($request->all());
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified cities.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$cities = Cities::find($id);
	    $ostans = Ostans::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

	    
        $state = KamiyarFunctions::TranslateState(Cities::$state);

		return view('admin.cities.edit', compact('cities', "ostans", "state"));
	}

	/**
	 * Update the specified cities in storage.
     * @param UpdateCitiesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCitiesRequest $request)
	{
		$cities = Cities::findOrFail($id);

        

		$cities->update($request->all());

		return self::returnType($request->get("save_type"),$cities->id);
	}

	/**
	 * Remove the specified cities from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Cities::destroy($id);

		return redirect()->route('admin.cities.index');
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
            Cities::destroy($toDelete);
        } else {
            Cities::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.cities.index');
    }
	
	private function returnType($save_type,$id){
		
		switch ($save_type){
			case "save":
				return redirect()->route("admin.cities.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.cities.create");
				break;
			case "save_close":
				return redirect()->route("admin.cities.index");
				break;
			default:
				return redirect()->route("admin.cities.index");
				break;

		}
	}

}
