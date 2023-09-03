<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\Intro;
use App\Http\Requests\CreateIntroRequest;
use App\Http\Requests\UpdateIntroRequest;
use Illuminate\Http\Request;

use Yajra\Datatables\Facades\Datatables;




class IntroController extends Controller {

	/**
	 * Display a listing of intro
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        /** comment for dataTables get 
		$intro = Intro::all();

		return view('admin.intro.index', compact('intro'));
		*/
		// get dataTableField from model and pass to view for DataTables
		$dataTableField = Intro::$dataTableField;

		return view('admin.intro.index',compact("dataTableField"));
	}
	
	/**
	 * Get DataTable Ajax Data
	 * @param Request $request
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function getData(Request $request){

		if ($request->ajax() || $request->wantsJson()) {

			$datas = Intro::all();

			return Datatables::of($datas)

				->editColumn('idSelect', function ($item) {
					//return Form::checkbox('del-'.$item->id,1,false,['class' => 'single','data-id'=> $item->id]);
					return "<input type='checkbox' name='del-".$item->id."' value='1' class='single' data-id='".$item->id."'>";
				})
				->editColumn('title', function ($item) {
					if(isset($item->title))
					return '<span style="display: block; text-align: right;">
                            <a href="'.route("admin.intro.edit",$item->id).'" class="">'.  $item->title .'</a>
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
                                <a href="'.route("admin.intro.edit",$item->id).'" class="btn btn-xs btn-info">'.trans("global.edit").'</a>
                                <form method="POST" action="'.route("admin.intro.destroy",$item->id).'" accept-charset="UTF-8" style="display: inline-block;" onsubmit="return confirm(\''.trans('quickadmin::admin.users-index-are_you_sure').'\');"><input name="_method" type="hidden" value="DELETE"><input name="_token" type="hidden" value="'.csrf_token().'">
                                <input class="btn btn-xs btn-danger" type="submit" value="'.trans("global.delete").'">
                                </form>
                            ';
					return $return;
				})
				
				->make(true);
		}else{
			return view("admin.intro.index");
		}
	}

	/**
	 * Show the form for creating a new intro
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(Intro::$state);

		
		
$maxOrdering = Intro::max("ordering") + 1;

	    return view('admin.intro.create', compact("state", "maxOrdering"));
	}

	/**
	 * Store a newly created intro in storage.
	 *
     * @param CreateIntroRequest|Request $request
	 */
	public function store(CreateIntroRequest $request)
	{
	    
		
		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));
		
		$new = Intro::create($inputs);
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified intro.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$intro = Intro::findOrFail($id);
		
	    
	    
        $state = KamiyarFunctions::TranslateState(Intro::$state);

		
		return view('admin.intro.edit', compact('intro', "state"));
	}

	/**
	 * Update the specified intro in storage.
     * @param UpdateIntroRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateIntroRequest $request)
	{
		$intro = Intro::findOrFail($id);

        

		$inputs = $request->all();
		
		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$intro->update($inputs);

		return self::returnType($request->get("save_type"),$intro->id);
	}

	/**
	 * Remove the specified intro from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Intro::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');
		
		return redirect()->route('admin.intro.index');
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
            Intro::destroy($toDelete);
        } else {
            Intro::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.intro.index');
    }
	
	private function returnType($save_type,$id){
		
		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.intro.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.intro.create");
				break;
			case "save_close":
				return redirect()->route("admin.intro.index");
				break;
			default:
				return redirect()->route("admin.intro.index");
				break;

		}
	}
	
	public function copyItems(Request $request){
		
		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = Intro::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();
			
			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.intro.index');
	}
	
	public function updateOrdering(Request $request)
	{
		//dd($request->get('toUpdateOrdering'));

		$items = json_decode($request->get('toUpdateOrdering'),true);

		foreach ($items as $item => $ordering){
			Intro::find($item)->update(["ordering"=>$ordering]);
		}

		flash(trans("global.item_s_updated_ordering"), 'success');
		return redirect()->route('admin.intro.index');
	}
	
	public function show(){
	
	}

}
