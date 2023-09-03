<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use App\Settings;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\EmploymentForm;
use App\Http\Requests\CreateEmploymentFormRequest;
use App\Http\Requests\UpdateEmploymentFormRequest;
use Illuminate\Http\Request;

use Yajra\Datatables\Facades\Datatables;
use Mail;




class EmploymentFormController extends Controller {

	/**
	 * Display a listing of employmentform
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        /** comment for dataTables get
		$employmentform = EmploymentForm::all();

		return view('admin.employmentform.index', compact('employmentform'));
		*/
		// get dataTableField from model and pass to view for DataTables
		$dataTableField = EmploymentForm::$dataTableField;

		$setting = Settings::where("name","employment-form-emails")->first();

		return view('admin.employmentform.index',compact("dataTableField",'setting'));
	}

	/**
	 * Get DataTable Ajax Data
	 * @param Request $request
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function getData(Request $request){

		if ($request->ajax() || $request->wantsJson()) {

			$datas = EmploymentForm::orderBy('created_at')->get();

			return Datatables::of($datas)

				->editColumn('idSelect', function ($item) {
					//return Form::checkbox('del-'.$item->id,1,false,['class' => 'single','data-id'=> $item->id]);
					return "<input type='checkbox' name='del-".$item->id."' value='1' class='single' data-id='".$item->id."'>";
				})
				->editColumn('title', function ($item) {
					if(isset($item->title))
					return '<span style="display: block; text-align: right;">
                            <a href="'.route("admin.employmentform.edit",$item->id).'" class="">'.  $item->title .'</a>
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

          ->editColumn('gender', function ($item) {
              if(isset($item->gender))
                  return EmploymentForm::$gender[$item->gender];
          })
          ->editColumn('married', function ($item) {
              if(isset($item->married))
                  return EmploymentForm::$married[$item->married];
          })
          ->editColumn('khedmat', function ($item) {
              if(isset($item->khedmat))
                  return EmploymentForm::$khedmat[$item->khedmat];
          })
          ->editColumn('work_time', function ($item) {
              if(isset($item->work_time))
                  return EmploymentForm::$work_time[$item->work_time];
          })

				->editColumn('action', function ($item) {
					$return = '
                                <a href="'.route("admin.employmentform.edit",$item->id).'" class="btn btn-xs btn-info">'.trans("global.show").'</a>
                                <form method="POST" action="'.route("admin.employmentform.destroy",$item->id).'" accept-charset="UTF-8" style="display: inline-block;" onsubmit="return confirm(\''.trans('quickadmin::admin.users-index-are_you_sure').'\');"><input name="_method" type="hidden" value="DELETE"><input name="_token" type="hidden" value="'.csrf_token().'">
                                <input class="btn btn-xs btn-danger" type="submit" value="'.trans("global.delete").'">
                                </form>
                            ';
					return $return;
				})

				->editColumn("english", function ($item) {
					if(isset($item->english)) {
						return trans("global.yes_no_".$item->english );
                    }
				})

				->editColumn("tork", function ($item) {
					if(isset($item->tork)) {
						return trans("global.yes_no_".$item->tork );
                    }
				})

				->editColumn("image", function ($item) {
					if(isset($item->image)) {
						$img = "<img width='120px' src='" . KamiyarFunctions::getTmb($item->image) ."'>";

						return '<div class="btn btn-default"  data-toggle="tooltip" data-picker="image" title="'. $img .'" ><i class="fa fa-eye"></i></div>';
					}
				})

				->make(true);
		}else{
			return view("admin.employmentform.index");
		}
	}

	/**
	 * Show the form for creating a new employmentform
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{

        $gender = EmploymentForm::$gender;
        $married = EmploymentForm::$married;
        $khedmat = EmploymentForm::$khedmat;
        $work_time = EmploymentForm::$work_time;
        $state = KamiyarFunctions::TranslateState(EmploymentForm::$state);

        $maxOrdering = EmploymentForm::max("ordering") + 1;

	      return view('admin.employmentform.create', compact("gender", "married", "khedmat", "work_time", "state", "maxOrdering"));
	}

	/**
	 * Store a newly created employmentform in storage.
	 *
     * @param CreateEmploymentFormRequest|Request $request
	 */
	public function store(CreateEmploymentFormRequest $request)
	{


		$inputs = $request->all();

		if($request->hasFile('image')) {
        $File = $request->file('image'); //line 1
        $sub_path = 'resumes/'; //line 2
        $real_name = uniqid().'.'.$File->getClientOriginalExtension(); //line 3
        //dd($real_name);

        $destination_path = public_path($sub_path);  //line 4

        $File->move($destination_path, $real_name);  //line 5

        //dd($destination_path, public_path($sub_path.$real_name));
        $inputs['image'] = $sub_path.$real_name;
      }

      if($request->hasFile('resume')) {
          $File = $request->file('resume'); //line 1
          $sub_path = 'resumes/'; //line 2
          $real_name = uniqid().'.'.$File->getClientOriginalExtension(); //line 3
          //dd($real_name);

          $destination_path = public_path($sub_path);  //line 4

          $File->move($destination_path, $real_name);  //line 5

          //dd($destination_path, public_path($sub_path.$real_name));
          $inputs['resume'] = $sub_path.$real_name;
      }

      $new = EmploymentForm::create($inputs);

      // send email
      $emails = explode(',',Settings::where("name","employment-form-emails")->first()->value);

      foreach ($emails as $key => $email)
          $emails[$key] = trim($email);

      Mail::send('emails.employment', ['employmentform'=>$new], function($message) use ($emails)
      {
          $message->to($emails)->subject('فرم استخدام از سایت یاتاش');
      });
      //dd($emails);


      flash('فرم شما با موفقیت ذخیره شد.','success');
		return redirect()->back();

	}

	/**
	 * Show the form for editing the specified employmentform.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$employmentform = EmploymentForm::findOrFail($id);



        $gender = EmploymentForm::$gender;
        $married = EmploymentForm::$married;
        $khedmat = EmploymentForm::$khedmat;
        $work_time = EmploymentForm::$work_time;
        $state = KamiyarFunctions::TranslateState(EmploymentForm::$state);


		return view('admin.employmentform.edit', compact('employmentform', "gender", "married", "khedmat", "work_time", "state"));
	}

	/**
	 * Update the specified employmentform in storage.
     * @param UpdateEmploymentFormRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateEmploymentFormRequest $request)
	{
		$employmentform = EmploymentForm::findOrFail($id);



		$inputs = $request->all();

		if($request->en_name)
			$inputs["en_name"] = trim(str_replace(" ","-",strtolower($inputs["en_name"])));

		$employmentform->update($inputs);

		return self::returnType($request->get("save_type"),$employmentform->id);
	}

	/**
	 * Remove the specified employmentform from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		EmploymentForm::destroy($id);

		flash(trans("global.item_s_deleted"), 'success');

		return redirect()->route('admin.employmentform.index');
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
            EmploymentForm::destroy($toDelete);
        } else {
            EmploymentForm::whereNotNull('id')->delete();
        }

		flash(trans("global.item_s_deleted"), 'success');
        return redirect()->route('admin.employmentform.index');
    }

	private function returnType($save_type,$id){

		flash(trans("global.item_saved"), 'success');
		switch ($save_type){
			case "save":
				return redirect()->route("admin.employmentform.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.employmentform.create");
				break;
			case "save_close":
				return redirect()->route("admin.employmentform.index");
				break;
			default:
				return redirect()->route("admin.employmentform.index");
				break;

		}
	}

	public function copyItems(Request $request){

		$toCopy = json_decode($request->get('toCopy'));
		foreach ($toCopy as $item){
			$copy = EmploymentForm::find($item);
			$newCopy = $copy->replicate();
			if($newCopy->title)
				$newCopy->title = $newCopy->title." (".trans("global.copy").")";
			if($newCopy->en_name)
				$newCopy->en_name = $newCopy->en_name."-".time();

			$newCopy->save();
		}

		flash(trans("global.items_copied"), 'success');
		return redirect()->route('admin.employmentform.index');
	}

	public function updateOrdering(Request $request)
	{
		//dd($request->get('toUpdateOrdering'));

		$items = json_decode($request->get('toUpdateOrdering'),true);

		foreach ($items as $item => $ordering){
			EmploymentForm::find($item)->update(["ordering"=>$ordering]);
		}

		flash(trans("global.item_s_updated_ordering"), 'success');
		return redirect()->route('admin.employmentform.index');
	}

	public function saveSettings(Request $request){
        //dd($request->all());

     Settings::where("name","employment-form-emails")->update(['value'=>$request->emails]);
      return redirect()->route('admin.employmentform.index');
	}

}
