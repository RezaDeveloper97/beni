<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\UsersRealAddress;
use App\Http\Requests\CreateUsersRealAddressRequest;
use App\Http\Requests\UpdateUsersRealAddressRequest;
use Illuminate\Http\Request;

use App\User;
use App\Ostans;
use App\Cities;


class UsersRealAddressController extends Controller {

	/**
	 * Display a listing of usersrealaddress
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $usersrealaddress = UsersRealAddress::with("users")->with("ostans")->with("cities")->get();

		return view('admin.usersrealaddress.index', compact('usersrealaddress'));
	}

	/**
	 * Show the form for creating a new usersrealaddress
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $users = User::lists("name", "id")->prepend(Lang::get('global.Please_select'), '');
$ostans = Ostans::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');
$cities = Cities::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

	    
	    return view('admin.usersrealaddress.create', compact("users", "ostans", "cities"));
	}

	/**
	 * Store a newly created usersrealaddress in storage.
	 *
     * @param CreateUsersRealAddressRequest|Request $request
	 */
	public function store(CreateUsersRealAddressRequest $request)
	{
	    
		
		$new = UsersRealAddress::create($request->all());
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified usersrealaddress.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$usersrealaddress = UsersRealAddress::find($id);
	    $users = User::lists("name", "id")->prepend(Lang::get('global.Please_select'), '');
$ostans = Ostans::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');
$cities = Cities::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

	    
		return view('admin.usersrealaddress.edit', compact('usersrealaddress', "users", "ostans", "cities"));
	}

	/**
	 * Update the specified usersrealaddress in storage.
     * @param UpdateUsersRealAddressRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateUsersRealAddressRequest $request)
	{
		$usersrealaddress = UsersRealAddress::findOrFail($id);

        

		$usersrealaddress->update($request->all());

		return self::returnType($request->get("save_type"),$usersrealaddress->id);
	}

	/**
	 * Remove the specified usersrealaddress from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		UsersRealAddress::destroy($id);

		return redirect()->route('admin.usersrealaddress.index');
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
            UsersRealAddress::destroy($toDelete);
        } else {
            UsersRealAddress::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.usersrealaddress.index');
    }
	
	private function returnType($save_type,$id){
		
		switch ($save_type){
			case "save":
				return redirect()->route("admin.usersrealaddress.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.usersrealaddress.create");
				break;
			case "save_close":
				return redirect()->route("admin.usersrealaddress.index");
				break;
			default:
				return redirect()->route("admin.usersrealaddress.index");
				break;

		}
	}

}
