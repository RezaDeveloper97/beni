<?php

namespace App\Http\Controllers\Admin;

use App\BookIntro;
use App\Http\Controllers\Controller;
use App\Intro;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\Homebook;
use App\Http\Requests\CreateHomebookRequest;
use App\Http\Requests\UpdateHomebookRequest;
use Illuminate\Http\Request;

use Yajra\Datatables\Facades\Datatables;




class HomebookController extends Controller {

	/**
	 * Display a listing of homebook
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        /** comment for dataTables get
		$homebook = Homebook::all();

		return view('admin.homebook.index', compact('homebook'));
		*/
		// get dataTableField from model and pass to view for DataTables
		$dataTableField = Homebook::$dataTableField;

		return view('admin.homebook.index',compact("dataTableField"));
	}

	/**
	 * Get DataTable Ajax Data
	 * @param Request $request
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function getData(Request $request){

		if ($request->ajax() || $request->wantsJson()) {

			$datas = Homebook::all();

			return Datatables::of($datas)

				->editColumn('idSelect', function ($item) {
					//return Form::checkbox('del-'.$item->id,1,false,['class' => 'single','data-id'=> $item->id]);
					return "<input type='checkbox' name='del-".$item->id."' value='1' class='single' data-id='".$item->id."'>";
				})
				->editColumn('title', function ($item) {
					if(isset($item->title))
					return '<span style="display: block; text-align: right;">
                            <a href="'.route("admin.homebook.edit",$item->id).'" class="">'.  $item->title .'</a>
                            </span>';
				})
				->editColumn('ordering', function ($item) {
					if(isset($item->ordering))
						return "<input class='form-control ordering-input' item-id='$item->id' name='ordeings[]' type='number' size='3' value='$item->ordering'>";
				})
				->editColumn('state', function ($item) {
					if(isset($item->state))
					return trans("global.".$item->state );
				})
				->editColumn('action', function ($item) {
					$return = '
                                <a href="'.route("admin.homebook.edit",$item->id).'" class="btn btn-xs btn-info">'.trans("global.edit").'</a>
                                <form method="POST" action="'.route("admin.homebook.destroy",$item->id).'" accept-charset="UTF-8" style="display: inline-block;" onsubmit="return confirm(\''.trans('quickadmin::admin.users-index-are_you_sure').'\');"><input name="_method" type="hidden" value="DELETE"><input name="_token" type="hidden" value="'.csrf_token().'">
                                <input class="btn btn-xs btn-danger" type="submit" value="'.trans("global.delete").'">
                                </form>
                            ';
					return $return;
				})

				->editColumn("image", function ($item) {
					if(isset($item->image)) {
						$img = "<img width='120px' src='" . KamiyarFunctions::getTmb($item->image) ."'>";

						return '<div class="btn btn-default"  data-toggle="tooltip" data-picker="image" title="'. $img .'" ><i class="fa fa-eye"></i></div>';
					}
				})

				->make(true);
		}else{
			return view("admin.homebook.index");
		}
	}

	/**
	 * Show the form for creating a new homebook
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{


        $state = KamiyarFunctions::TranslateState(Homebook::$state);



$maxOrdering = Homebook::max("ordering") + 1;

	    return view('admin.homebook.create', compact("state", "maxOrdering"));
	}

	/**
	 * Store a newly created homebook in storage.
	 *
     * @param CreateHomebookRequest|Request $request
	 */
	public function store(CreateHomebookRequest $request)
	{


		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$new = Homebook::create($inputs);

		return self::returnType($request->get("save_type"),$new->id);

	}

	/**
	 * Show the form for editing the specified homebook.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$homebook = Homebook::findOrFail($id);



        $state = KamiyarFunctions::TranslateState(Homebook::$state);


		return view('admin.homebook.edit', compact('homebook', "state"));
	}

	/**
	 * Update the specified homebook in storage.
     * @param UpdateHomebookRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateHomebookRequest $request)
	{
		$homebook = Homebook::findOrFail($id);



		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$homebook->update($inputs);

		return self::returnType($request->get("save_type"),$homebook->id);
	}

	/**
	 * Remove the specified homebook from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Homebook::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');

		return redirect()->route('admin.homebook.index');
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
            Homebook::destroy($toDelete);
        } else {
            Homebook::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.homebook.index');
    }

	private function returnType($save_type,$id){

		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.homebook.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.homebook.create");
				break;
			case "save_close":
				return redirect()->route("admin.homebook.index");
				break;
			default:
				return redirect()->route("admin.homebook.index");
				break;

		}
	}

	public function copyItems(Request $request){

		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = Homebook::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();

			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.homebook.index');
	}

	public function updateOrdering(Request $request)
	{
		//dd($request->get('toUpdateOrdering'));

		$items = json_decode($request->get('toUpdateOrdering'),true);

		foreach ($items as $item => $ordering){
			Homebook::find($item)->update(["ordering"=>$ordering]);
		}

		flash(trans("global.item_s_updated_ordering"), 'success');
		return redirect()->route('admin.homebook.index');
	}

	public function show(){
		//$data = Homebook::all()->keyBy("en_name");
		return view("homebook.show");
	}

    public function showIntro($intro){
        $data = BookIntro::where("id",$intro)->firstOrFail();
        return view("homebook.showIntro",compact("data"));
    }

	public function showByName($name){
    $bookIntros=  BookIntro::select('id','name','e_name','title')->orderBy("ordering")->get()->keyBy("e_name");
    //dd($BookIntros->toArray());
		$data = BookIntro::where("e_name",$name)->firstOrFail();
		return view("homebook.showByName",compact("data",'bookIntros'));
	}
}
