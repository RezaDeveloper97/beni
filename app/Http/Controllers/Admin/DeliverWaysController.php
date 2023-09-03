<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use App\Ostans;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\DeliverWays;
use App\Http\Requests\CreateDeliverWaysRequest;
use App\Http\Requests\UpdateDeliverWaysRequest;
use Illuminate\Http\Request;



class DeliverWaysController extends Controller {

	/**
	 * Display a listing of deliverways
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $deliverways = DeliverWays::all();

		return view('admin.deliverways.index', compact('deliverways'));
	}

	/**
	 * Show the form for creating a new deliverways
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $ostans = Ostans::lists("title","id");
	    
        $state = KamiyarFunctions::TranslateState(DeliverWays::$state);

	    return view('admin.deliverways.create', compact("state","ostans"));
	}

	/**
	 * Store a newly created deliverways in storage.
	 *
     * @param CreateDeliverWaysRequest|Request $request
	 */
	public function store(CreateDeliverWaysRequest $request)
	{

		$new = DeliverWays::create($request->all());

		$new->ostans()->attach($request->get("ostans_id"));

		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified deliverways.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$deliverways = DeliverWays::with("ostans")->find($id);

		$ostans = Ostans::lists("title","id");
	    
        $state = KamiyarFunctions::TranslateState(DeliverWays::$state);

		return view('admin.deliverways.edit', compact('deliverways', "state","ostans"));
	}

	/**
	 * Update the specified deliverways in storage.
     * @param UpdateDeliverWaysRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateDeliverWaysRequest $request)
	{
		$deliverways = DeliverWays::findOrFail($id);

		$deliverways->update($request->all());

		$deliverways->ostans()->sync($request->get("ostans_id"));

		return self::returnType($request->get("save_type"),$deliverways->id);
	}

	/**
	 * Remove the specified deliverways from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		DeliverWays::destroy($id);

		return redirect()->route('admin.deliverways.index');
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
            DeliverWays::destroy($toDelete);
        } else {
            DeliverWays::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.deliverways.index');
    }
	
	private function returnType($save_type,$id){
		
		switch ($save_type){
			case "save":
				return redirect()->route("admin.deliverways.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.deliverways.create");
				break;
			case "save_close":
				return redirect()->route("admin.deliverways.index");
				break;
			default:
				return redirect()->route("admin.deliverways.index");
				break;

		}
	}

}
