<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\Opportunities;
use App\Http\Requests\CreateOpportunitiesRequest;
use App\Http\Requests\UpdateOpportunitiesRequest;
use Illuminate\Http\Request;



class OpportunitiesController extends Controller {

	/**
	 * Display a listing of opportunities
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $opportunities = Opportunities::all();

		return view('admin.opportunities.index', compact('opportunities'));
	}

	/**
	 * Show the form for creating a new opportunities
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{


        $state = KamiyarFunctions::TranslateState(Opportunities::$state);

	    return view('admin.opportunities.create', compact("state"));
	}

	/**
	 * Store a newly created opportunities in storage.
	 *
     * @param CreateOpportunitiesRequest|Request $request
	 */
	public function store(CreateOpportunitiesRequest $request)
	{
		$inputs = $request->all();

		$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$new = Opportunities::create($inputs);

		return self::returnType($request->get("save_type"),$new->id);

	}

	/**
	 * Show the form for editing the specified opportunities.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$opportunities = Opportunities::find($id);


        $state = KamiyarFunctions::TranslateState(Opportunities::$state);

		return view('admin.opportunities.edit', compact('opportunities', "state"));
	}

	/**
	 * Update the specified opportunities in storage.
     * @param UpdateOpportunitiesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateOpportunitiesRequest $request)
	{
		$opportunities = Opportunities::findOrFail($id);

		$inputs = $request->all();

		$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$opportunities->update($inputs);

		return self::returnType($request->get("save_type"),$opportunities->id);
	}

	/**
	 * Remove the specified opportunities from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Opportunities::destroy($id);

		return redirect()->route('admin.opportunities.index');
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
            Opportunities::destroy($toDelete);
        } else {
            Opportunities::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.opportunities.index');
    }

	private function returnType($save_type,$id){

		switch ($save_type){
			case "save":
				return redirect()->route("admin.opportunities.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.opportunities.create");
				break;
			case "save_close":
				return redirect()->route("admin.opportunities.index");
				break;
			default:
				return redirect()->route("admin.opportunities.index");
				break;

		}
	}

	public function show($opp_name = null){

		$opportunities = collect(Opportunities::where("state","active")->get()->toArray())->keyBy("en_name");
		//dd($opportunities);
        $thisOpportunity = null;

        if($opp_name) {
            $thisOpportunity = key_exists($opp_name, $opportunities) ? $opportunities[$opp_name] : null;
        }
        if(!$thisOpportunity){
            $thisOpportunity = $opportunities->first();
        }


      return view("opportunities",compact('opportunities',"thisOpportunity"));

	}

}
