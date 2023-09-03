<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\BookIntro;
use App\Http\Requests\CreateBookIntroRequest;
use App\Http\Requests\UpdateBookIntroRequest;
use Illuminate\Http\Request;

use Yajra\Datatables\Facades\Datatables;




class BookIntroController extends Controller {

	/**
	 * Display a listing of bookintro
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        /** comment for dataTables get
		$bookintro = BookIntro::all();

		return view('admin.bookintro.index', compact('bookintro'));
		*/
		// get dataTableField from model and pass to view for DataTables
		$dataTableField = BookIntro::$dataTableField;

		return view('admin.bookintro.index',compact("dataTableField"));
	}

	/**
	 * Get DataTable Ajax Data
	 * @param Request $request
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function getData(Request $request){

		if ($request->ajax() || $request->wantsJson()) {

			$datas = BookIntro::all();

			return Datatables::of($datas)

				->editColumn('idSelect', function ($item) {
					//return Form::checkbox('del-'.$item->id,1,false,['class' => 'single','data-id'=> $item->id]);
					return "<input type='checkbox' name='del-".$item->id."' value='1' class='single' data-id='".$item->id."'>";
				})
          ->editColumn('name', function ($item) {
              if(isset($item->name))
                  return '<span style="display: block; text-align: right;">
                            <a href="'.route("admin.bookintro.edit",$item->id).'" class="">'.  $item->name .'</a>
                            </span>';
          })
				->editColumn('title', function ($item) {
					if(isset($item->title))
					return '<span style="display: block; text-align: right;">
                            <a href="'.route("admin.bookintro.edit",$item->id).'" class="">'.  $item->title .'</a>
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
                                <a href="'.route("admin.bookintro.edit",$item->id).'" class="btn btn-xs btn-info">'.trans("global.edit").'</a>
                                <form method="POST" action="'.route("admin.bookintro.destroy",$item->id).'" accept-charset="UTF-8" style="display: inline-block;" onsubmit="return confirm(\''.trans('quickadmin::admin.users-index-are_you_sure').'\');"><input name="_method" type="hidden" value="DELETE"><input name="_token" type="hidden" value="'.csrf_token().'">
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
			return view("admin.bookintro.index");
		}
	}

	/**
	 * Show the form for creating a new bookintro
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{


        $state = KamiyarFunctions::TranslateState(BookIntro::$state);



$maxOrdering = BookIntro::max("ordering") + 1;

	    return view('admin.bookintro.create', compact("state", "maxOrdering"));
	}

	/**
	 * Store a newly created bookintro in storage.
	 *
     * @param CreateBookIntroRequest|Request $request
	 */
	public function store(CreateBookIntroRequest $request)
	{


		$inputs = $request->all();

		unset($inputs["save_type"]);


		if($request->en_name)
			$inputs["e_name"] = trim(str_replace(" ","-",strtolower($inputs["e_name"])));

		$new = BookIntro::create($inputs);

		return self::returnType($request->get("save_type"),$new->id);

	}

	/**
	 * Show the form for editing the specified bookintro.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$bookintro = BookIntro::findOrFail($id);



        $state = KamiyarFunctions::TranslateState(BookIntro::$state);


		return view('admin.bookintro.edit', compact('bookintro', "state"));
	}

	/**
	 * Update the specified bookintro in storage.
     * @param UpdateBookIntroRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateBookIntroRequest $request)
	{
		$bookintro = BookIntro::findOrFail($id);



		$inputs = $request->all();

      unset($inputs["save_type"]);

      //dd($inputs);

		if($request->en_name)
			$inputs["e_name"] = trim(str_replace(" ","-",strtolower($inputs["e_name"])));

		$bookintro->update($inputs);

		return self::returnType($request->get("save_type"),$bookintro->id);
	}

	/**
	 * Remove the specified bookintro from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		BookIntro::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');

		return redirect()->route('admin.bookintro.index');
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
            BookIntro::destroy($toDelete);
        } else {
            BookIntro::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.bookintro.index');
    }

	private function returnType($save_type,$id){

		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.bookintro.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.bookintro.create");
				break;
			case "save_close":
				return redirect()->route("admin.bookintro.index");
				break;
			default:
				return redirect()->route("admin.bookintro.index");
				break;

		}
	}

	public function copyItems(Request $request){

		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = BookIntro::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();

			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.bookintro.index');
	}

	public function updateOrdering(Request $request)
	{
		//dd($request->get('toUpdateOrdering'));

		$items = json_decode($request->get('toUpdateOrdering'),true);

		foreach ($items as $item => $ordering){
			BookIntro::find($item)->update(["ordering"=>$ordering]);
		}

		flash(trans("global.item_s_updated_ordering"), 'success');
		return redirect()->route('admin.bookintro.index');
	}

	public function show(){

	}

}
