<?php

namespace App\Http\Controllers;

use App\Cities;
use App\DesignSections;
use App\Http\Requests\CreateUsersRealAddressRequest;
use App\Ostans;
use App\Role;
use App\User;
use App\UserSavedCanvas;
use App\UserSavedCanvasSections;
use App\UsersRealAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;

class UsersController extends Controller
{
    /**
     * Show a list of users
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $users = User::all();

        return view('admin.users.index', compact('users'));
    }

    /**
     * Show a page of user creation
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $roles = Role::lists('title', 'id');

        return view('admin.users.create', compact('roles'));
    }

    /**
     * Insert new user into the system
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $user = User::create($input);

        return redirect()->route('users.index')->withMessage(trans('quickadmin::admin.users-controller-successfully_created'));
    }

    /**
     * Show a user edit page
     *
     * @param $id
     *
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $user  = User::findOrFail($id);
        $roles = Role::lists('title', 'id');

        return view('admin.users.edit', compact('user', 'roles'));
    }

    /**
     * Update our user information
     *
     * @param Request $request
     * @param         $id
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $user->update($input);

        return redirect()->route('users.index')->withMessage(trans('quickadmin::admin.users-controller-successfully_updated'));
    }

    /**
     * Destroy specific user
     *
     * @param $id
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        User::destroy($id);

        return redirect()->route('users.index')->withMessage(trans('quickadmin::admin.users-controller-successfully_deleted'));
    }

    

    public static function saveUserCanvas(Request $request){

        $inputs = $request->only("_token","design_id","USCU_ID","holderUserCanvases");

        //dd($request->all());

        $return_for_order_review = [];
        //dd($inputs["data_for_save"]);
        if(is_array($inputs["holderUserCanvases"]))
            $holderUserCanvases = $inputs["holderUserCanvases"];
        elseif(is_object($inputs["holderUserCanvases"]))
            $holderUserCanvases = (array) $inputs["holderUserCanvases"];
        else
            $holderUserCanvases = json_decode($inputs["holderUserCanvases"],true);


        // user_canvas_saved_unique_id

        $USCU_ID = empty($request->USCU_ID) ? UserSavedCanvas::generateUscuId($inputs["design_id"]) : $request->USCU_ID;


        if(Auth::check()) { // if user is login
            $UserSavedCanvas = UserSavedCanvas::where("uscu_id", $USCU_ID)->first();
            if(empty($UserSavedCanvas)){
                $UserSavedCanvas = UserSavedCanvas::create([
                    "design_id" => $inputs["design_id"],
                    "user_id" => Auth::id(),
                    "uscu_id" => $USCU_ID,
                ]);
            }

            $UserSavedCanvas->sections()->delete();

            foreach ($holderUserCanvases as $data){
                $data["user_saved_canvas_id"] = $UserSavedCanvas->id;
                $data["canvas_data"] = htmlspecialchars_decode($data["canvas_data"]);
                $data["params"] = htmlspecialchars_decode($data["params"]);
                UserSavedCanvasSections::create($data);
                //$return_for_order_review[] = $new->with("parentSection")->first()->toArray();
            }
        }else{ // if is guest

            // save this $USCU_ID for editing
            session(["guestSavedCanvas"=>[$USCU_ID=>$holderUserCanvases]]);

        }


        if($request->ajax())
            return response()->json(["success"=>true,"USCU_ID"=>$USCU_ID]);
        else{
            if($request->has("just_answer")){
                return true;
            }else {
                return $return_for_order_review;
            }
        }
    }

    public static function saveGuestCanvasToDb(){

        $holderUserCanvases = session("guestSavedCanvas");

        if(is_object($holderUserCanvases))
            $holderUserCanvases = (array) $holderUserCanvases;
        elseif(!is_array($holderUserCanvases))
            $holderUserCanvases = json_decode($holderUserCanvases,true);

        foreach ($holderUserCanvases as $USCU_ID => $sections){
            $design_id = explode("-",$USCU_ID)[2];
            $design_id = substr($design_id,1);
            //dd($design_id);
            $UserSavedCanvas = UserSavedCanvas::where("uscu_id", $USCU_ID)->first();
            if(empty($UserSavedCanvas)){
                $UserSavedCanvas = UserSavedCanvas::create([
                    "design_id" => $design_id,
                    "user_id" => Auth::id(),
                    "uscu_id" => $USCU_ID.Auth::id(),
                ]);
            }

            $UserSavedCanvas->sections()->delete();

            foreach ($sections as $data){
                //dd($data);
                $data["user_saved_canvas_id"] = $UserSavedCanvas->id;
                $data["canvas_data"] = htmlspecialchars_decode($data["canvas_data"]);
                $data["params"] = htmlspecialchars_decode($data["params"]);
                UserSavedCanvasSections::create($data);
                //$return_for_order_review[] = $new->with("parentSection")->first()->toArray();
            }
        }

        request()->session()->forget("guestSavedCanvas");

        return true;
    }


    public function add_address_form(){
        $ostans = Ostans::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');
        $cities = Cities::lists("title", "id")->prepend(Lang::get('global.Please_select'), '');

        return view("user.add_address", compact("ostans", "cities"));

    }

    public function add_address_store(CreateUsersRealAddressRequest $request)
    {

        UsersRealAddress::where("users_id",Auth::id())->update(["default_address"=>0]);

        UsersRealAddress::create($request->all());

        return redirect()->back()->with("addressAdded",true);

    }

    public function profile(){
        //return
    }

    public function my_designs(){
        dd("show user Designs");
    }
}