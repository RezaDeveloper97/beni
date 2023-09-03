<?php

namespace App\Http\Controllers\Admin;

use App\Countries;
use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\Ostans;
use App\Http\Requests\CreateOstansRequest;
use App\Http\Requests\UpdateOstansRequest;
use Illuminate\Http\Request;



class OstansController extends Controller {

	/**
	 * Display a listing of ostans
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $ostans = Ostans::with("country")->get();

        //dd($ostans->toArray());

		return view('admin.ostans.index', compact('ostans'));
	}

	/**
	 * Show the form for creating a new ostans
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{

		$countries = Countries::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

        $state = KamiyarFunctions::TranslateState(Ostans::$state);

	    return view('admin.ostans.create', compact("state","countries"));
	}

	/**
	 * Store a newly created ostans in storage.
	 *
     * @param CreateOstansRequest|Request $request
	 */
	public function store(CreateOstansRequest $request)
	{
	    
		
		$new = Ostans::create($request->all());
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified ostans.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$ostans = Ostans::find($id);

		$countries = Countries::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');
	    
        $state = KamiyarFunctions::TranslateState(Ostans::$state);

		return view('admin.ostans.edit', compact('ostans',"countries", "state"));
	}

	/**
	 * Update the specified ostans in storage.
     * @param UpdateOstansRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateOstansRequest $request)
	{
		$ostans = Ostans::findOrFail($id);

        

		$ostans->update($request->all());

		return self::returnType($request->get("save_type"),$ostans->id);
	}

	/**
	 * Remove the specified ostans from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Ostans::destroy($id);

		return redirect()->route('admin.ostans.index');
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
            Ostans::destroy($toDelete);
        } else {
            Ostans::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.ostans.index');
    }
	
	private function returnType($save_type,$id){
		
		switch ($save_type){
			case "save":
				return redirect()->route("admin.ostans.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.ostans.create");
				break;
			case "save_close":
				return redirect()->route("admin.ostans.index");
				break;
			default:
				return redirect()->route("admin.ostans.index");
				break;

		}
	}

}
