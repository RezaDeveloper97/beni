<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\UsersLegalAddress;
use App\Http\Requests\CreateUsersLegalAddressRequest;
use App\Http\Requests\UpdateUsersLegalAddressRequest;
use Illuminate\Http\Request;

use App\User;
use App\Ostans;
use App\Cities;


class UsersLegalAddressController extends Controller {

	/**
	 * Display a listing of userslegaladdress
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $userslegaladdress = UsersLegalAddress::with("users")->with("ostans")->with("cities")->get();

		return view('admin.userslegaladdress.index', compact('userslegaladdress'));
	}

	/**
	 * Show the form for creating a new userslegaladdress
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
		$users = User::lists("name", "id")->prepend(Lang::get('global.Please_select'), '');
		$ostans = Ostans::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');
		$cities = Cities::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');
	    
	    return view('admin.userslegaladdress.create', compact("users", "ostans", "cities"));
	}

	/**
	 * Store a newly created userslegaladdress in storage.
	 *
     * @param CreateUsersLegalAddressRequest|Request $request
	 */
	public function store(CreateUsersLegalAddressRequest $request)
	{
	    
		
		$new = UsersLegalAddress::create($request->all());
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified userslegaladdress.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$userslegaladdress = UsersLegalAddress::find($id);
		$users = User::lists("name", "id")->prepend(Lang::get('global.Please_select'), '');
		$ostans = Ostans::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');
		$cities = Cities::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');
	    
		return view('admin.userslegaladdress.edit', compact('userslegaladdress', "users", "ostans", "cities"));
	}

	/**
	 * Update the specified userslegaladdress in storage.
     * @param UpdateUsersLegalAddressRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateUsersLegalAddressRequest $request)
	{
		$userslegaladdress = UsersLegalAddress::findOrFail($id);

        

		$userslegaladdress->update($request->all());

		return self::returnType($request->get("save_type"),$userslegaladdress->id);
	}

	/**
	 * Remove the specified userslegaladdress from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		UsersLegalAddress::destroy($id);

		return redirect()->route('admin.userslegaladdress.index');
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
            UsersLegalAddress::destroy($toDelete);
        } else {
            UsersLegalAddress::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.userslegaladdress.index');
    }
	
	private function returnType($save_type,$id){
		
		switch ($save_type){
			case "save":
				return redirect()->route("admin.userslegaladdress.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.userslegaladdress.create");
				break;
			case "save_close":
				return redirect()->route("admin.userslegaladdress.index");
				break;
			default:
				return redirect()->route("admin.userslegaladdress.index");
				break;

		}
	}

}
