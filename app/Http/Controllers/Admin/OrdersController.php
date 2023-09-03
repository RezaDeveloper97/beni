<?php

namespace App\Http\Controllers\Admin;

use App\DeliverWays;
use App\Designs;
use App\DesignSections;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UsersController;
use App\Kamiyar\KamiyarFunctions;
use App\OrderItemsDesign;
use App\OrderItemsDesignParams;
use App\OrderItemsDesignSections;
use App\OrdersStatus;
use App\PaymentWays;
use App\Platforms;
use App\PlatformsOrderParamsOptions;
use App\PlatformsOrdersParams;
use App\Settings;
use App\ShoppingCart;
use App\ShoppingCartDesignParams;
use App\ShoppingCartDesigns;
use App\UserSavedCanvas;
use App\UsersLegalAddress;
use App\UsersRealAddress;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;
use Laracasts\Flash\Flash;
use Morilog\Jalali\Facades\jDate;
use Redirect;
use Schema;
use App\Orders;
use App\Http\Requests\CreateOrdersRequest;
use App\Http\Requests\UpdateOrdersRequest;
use Illuminate\Http\Request;
use App\User;


class OrdersController extends Controller {

	/**
	 * Display a listing of orders
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $orders = Orders::with("user")->get();

		//dd($orders->toArray());

		return view('admin.orders.index', compact('orders'));
	}

	/**
	 * Show the form for creating a new orders
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $users = User::lists("name", "id")->prepend(Lang::get('global.Please_select'), '');

	    
	    return view('admin.orders.create', compact("users"));
	}

	/**
	 * Store a newly created orders in storage.
	 *
     * @param CreateOrdersRequest|Request $request
	 */
	public function store(CreateOrdersRequest $request)
	{
	    
		Orders::create($request->all());

		return redirect()->route('admin.orders.index');
	}

	/**
	 * Show the form for editing the specified orders.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$orders = Orders::find($id);
	    $users = User::lists("name", "id")->prepend(Lang::get('global.Please_select'), '');

	    
		return view('admin.orders.edit', compact('orders', "users"));
	}

	/**
	 * Update the specified orders in storage.
     * @param UpdateOrdersRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateOrdersRequest $request)
	{
		$orders = Orders::findOrFail($id);

        

		$orders->update($request->all());

		return redirect()->route('admin.orders.index');
	}

	/**
	 * Remove the specified orders from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Orders::destroy($id);

		return redirect()->route('admin.orders.index');
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
            Orders::destroy($toDelete);
        } else {
            Orders::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.orders.index');
    }

	/**
	 * show and confirm use designs
	 * @param Request $request
	 * @return review VIEW
	 */
	public function review(Request $request){

		//dd($request->all());

		$USCU_ID = $request->USCU_ID;

		if(Auth::check()){
			$UserSavedCanvas = UserSavedCanvas::where("uscu_id",$USCU_ID)->with("parentDesign","sectionsWithParent")->first();
			$user_saved_canvas_id = $UserSavedCanvas->id;
			$userSections = $UserSavedCanvas->sectionsWithParent->toArray();
			//dd($userSections);
			$design = $UserSavedCanvas->parentDesign->toArray();
		}else{
			$guestSavedCanvas = session("guestSavedCanvas");
			$user_saved_canvas_id = null;
			if (!is_null($guestSavedCanvas) && key_exists($USCU_ID, $guestSavedCanvas)) {
				$guestSavedCanvas = $guestSavedCanvas[$USCU_ID];

				$design_id = explode("-",$USCU_ID)[2];
				$design_id = substr($design_id,1);
				$design = Designs::find($design_id)->toArray();


				foreach ($guestSavedCanvas as $item){
					$item["parent_section"] = DesignSections::find($item["design_section_id"])->toArray();
					$userSections[] = $item;
				}
				//dd($userSections);

			}
		}

		return view("orders.review",compact("userSections","design","USCU_ID","user_saved_canvas_id"));

	}

	/**
	 * show user design options
	 * @param Request $request
	 * @return review VIEW
	 */
	public function select_options(Request $request){

		$USCU_ID = $request->USCU_ID;

		$user_saved_canvas_id = $request->user_saved_canvas_id;

		$platform_order_params = Platforms::with("orderParams")->find($request->platform_id)->orderParams;

		//dd($platform_order_params);

		return view("orders.select_options",compact("platform_order_params","USCU_ID","user_saved_canvas_id"));
	}

	public function set_options(Request $request)
	{
		if(Auth::check())
			$this->addToCartUser($request->all());
		else
			$this->addToCartGuest($request->all());

		return redirect()->route("orders.cart");
	}

	protected function addToCartUser($data){

		$addShoppingCart["order_type"] = $data["order_type"];
		$addShoppingCart["user_id"] = Auth::id();
		$addShoppingCart["user_saved_canvas_id"] = $data["user_saved_canvas_id"];
		$addShoppingCart["uscu_id"] = $data["USCU_ID"];

		// first: create or update user cart
		$shoppingCart = ShoppingCart::where("uscu_id",$data["USCU_ID"])->first();

		if(empty($shoppingCart)) { // add new cart for user
			$shoppingCart = ShoppingCart::create($addShoppingCart);
		}

		// seconf: add params and options or update
		// params : param_id : option_id
		if(isset($data["params"])) {
			foreach ($data["params"] as $param => $option) {
				$ShoppingCartParams = ShoppingCartDesignParams::where("shopping_cart_id", $shoppingCart->id)->where("param_id", $param)->first();


				if (empty($ShoppingCartParams)) { // create one
					ShoppingCartDesignParams::create([
						"shopping_cart_id" => $shoppingCart->id,
						"param_id" => $param,
						"param_option_id" => $option,
					]);
				} else { // update existed
					$ShoppingCartParams->update([
						"param_option_id" => $option,
					]);
				}
			}


			return true;
		}

		// UATSCS : USER ADD TO SHOPPING CART SESSION
		return KamiyarFunctions::showError("UATSCS");

	}

	protected function addToCartGuest($data){


		$guestSavedCanvas = session("guestSavedCanvas");

		if (!is_null($guestSavedCanvas) && key_exists($data["USCU_ID"], $guestSavedCanvas)) {
			$USCU_ID =  $data["USCU_ID"];

			// get guest shopping cart
			$guestShoppingCart = session("guestShoppingCart");

			// ready data to add or update shopping cart
			$guestShoppingCart[$USCU_ID]["order_type"] = $data["order_type"];
			$guestShoppingCart[$USCU_ID]["uscu_id"] = $USCU_ID;

			$design_id = explode("-",$USCU_ID)[2];
			$design_id = substr($design_id,1);
			$guestShoppingCart[$USCU_ID]["design"] = Designs::find($design_id)->toArray();
			$guestShoppingCart[$USCU_ID]["platform"] = Platforms::find($guestShoppingCart[$USCU_ID]["design"]["platforms_id"])->toArray();

			$guestSavedCanvas = reset($guestSavedCanvas[$USCU_ID]);

			$guestSavedCanvas["parent_section"] = DesignSections::find($guestSavedCanvas["design_section_id"])->toArray();

			$guestShoppingCart[$USCU_ID]["section"] = $guestSavedCanvas;

			//dd($guestShoppingCart);
			//dd($userSections);
			// second: add params and options or update
			// params : param_id : option_id
			if(isset($data["params"])) {
				foreach ($data["params"] as $param => $option) {

					$guestShoppingCart[$USCU_ID]["design_params"][$param]["param"] = PlatformsOrdersParams::find($param)->toArray();
					$guestShoppingCart[$USCU_ID]["design_params"][$param]["option"] = PlatformsOrderParamsOptions::find($option)->toArray();

				}
			}

			session(["guestShoppingCart" => $guestShoppingCart]);
			//dd(session("guestShoppingCart"));
			return true;
		}

		// GATSCS : GUEST ADD TO SHOPPING CART SESSION
		return KamiyarFunctions::showError("GATSCS");
	}

	public function cart(){

		$cartData = null;

		if(Auth::check()) {
			$cartDataGet = ShoppingCart::with("designParams","userSavedCanvas")->where("user_id", Auth::id())->get();
			if(!empty($cartDataGet)) {
				foreach ($cartDataGet->toArray() as $key => $item){

					// set platform
					$item["platform"] = $item["user_saved_canvas"]["parent_design"]["platform"];
					unset($item["user_saved_canvas"]["parent_design"]["platform"]);
					// set design
					$item["design"] = $item["user_saved_canvas"]["parent_design"];
					// set first section
					$item["section"] = $item["user_saved_canvas"]["sections_with_parent"][0];
					// unset user_saved_canvas
					unset($item["user_saved_canvas"]);
					// set Item to
					$cartData[$item["uscu_id"]] = $item;

				}
			}
		}else{
			// because set all data in addToCartGuest
			$cartData = session("guestShoppingCart");
		}

		if(!empty($cartData)){
			//dd($cartData);
			return view("orders.cart",compact("cartData"));
		}

		return view("orders.empty_cart");
	}

	public function auth(){
		if(Auth::check())
			$hasCart = ShoppingCart::select("id","user_id")->where("user_id", Auth::id())->get();

			if(!empty($hasCart))
			return redirect()->route("orders.select_address");

		else {
			session(["fromOrder"=>true]);
			return view("orders.auth");
		}

	}

	public function select_address(){

		if(Auth::check()){
			$hasCart = ShoppingCart::select("id","user_id")->where("user_id", Auth::id())->get();
			if($hasCart->count()) {
				$realAddress = Auth::user()->realAddress()->orderBy("default_address", "acs")->get();
				$legalAddress = Auth::user()->legalAddress()->orderBy("default_address", "acs")->get();
								//dd($realAddress->toArray(),$legalAddress->toArray());
				return view("orders.select_address", compact("realAddress", "legalAddress"));
			}
		}

		return redirect()->route("orders.cart");

	}

	public function set_address(Request $request){
		if(Auth::check()){
			$orderData["address_type"] = $request->address_type;
			$orderData["address_real_id"] = $request->address_real_id;
			$orderData["address_legal_id"] = $request->address_legal_id;
			// SET SESSION FOR Continue
			session(["orderData"=>$orderData]);
			return redirect()->route("orders.checkout");
		}

		return redirect()->route("orders.cart");
	}
	
	public function checkout(){
		$cartDataGet = ShoppingCart::with("designParams","userSavedCanvas")->where("user_id", Auth::id())->get();
		if($cartDataGet->count()) {
			if(request()->session()->has("orderData")) {
				// show preview cart
				$orderData = session("orderData");
				// get address And SET it DEFAULT ADDRESS
				$address = "";
				if ($orderData["address_type"] == "real") {
					// if user select valid address then continue
					$address = UsersRealAddress::with("ostans", "cities")->find($orderData["address_real_id"]);

				}
				if (!empty($address)) {
					// go to model!
					UsersRealAddress::set_default($address->id);

					$address = $address->toArray();

					$address["address_type"] = $orderData["address_type"];

					$deliveryWays = $address["ostans"]["delivery_ways"];

					// get peymentMethods
					$paymentMethods = PaymentWays::activated()->get()->toArray();

					if(empty($deliveryWays) || empty($paymentMethods)){
						// NO HAVE DELIVERY OR PAYMENT METHOD TO SHOW;
						flash(KamiyarFunctions::showError("NHDOPMTS"),"danger");
						return redirect()->route("orders.cart");
					}

					foreach ($cartDataGet->toArray() as $key => $item){

						// set platform
						$item["platform"] = $item["user_saved_canvas"]["parent_design"]["platform"];
						unset($item["user_saved_canvas"]["parent_design"]["platform"]);
						// set design
						$item["design"] = $item["user_saved_canvas"]["parent_design"];
						// set first section
						$item["section"] = $item["user_saved_canvas"]["sections_with_parent"][0];
						// unset user_saved_canvas
						unset($item["user_saved_canvas"]);
						// set Item to
						$cartData[$item["uscu_id"]] = $item;

					}

					//dd($address, $deliveryWays, $peymentMethods,$cartData);

					return view("orders.checkout",compact("cartData",'address',"deliveryWays","paymentMethods"));
				}
			}
			return redirect()->route("orders.select_address");
		}

		return redirect()->route("orders.cart");
	}

	public function submit(Request $request){
		//dd($request->all());

		$inputs = $request->only(["address_type", "address_id", "delivery_way", "payment_method"]);


		if(key_exists("address_type",$inputs) && key_exists("address_id",$inputs) && key_exists("delivery_way",$inputs) && key_exists("payment_method",$inputs)){

			$order_status = OrdersStatus::select("id","title")->where("submit_order_step",1)->first();
			$delivery_method = DeliverWays::find($inputs["delivery_way"]);
			$address = $inputs["address_type"] = "real" ? UsersRealAddress::with("ostan","cities")->find($inputs["address_id"]) : UsersLegalAddress::with("ostan","cities")->find($inputs["address_id"]);
			$payment_method = PaymentWays::find($inputs["payment_method"]);

			//TODO: DELETE THIS SECTION (TEMPORARY FOR TEST)
			/*$userCarts = ShoppingCart::with("designParams","userSavedCanvas")->where("user_id",Auth::id());
			//dd($userCarts->get()->toArray());
			foreach ($userCarts->get() as $userCart) {
				foreach ($userCart->designParams as $params) {

					dd($params->option->toArray());
				}
			}*/

			$total_price = 0;
			$delivery_price = $delivery_method->price;

			//dd($total_price,$delivery_price);

			$newOrder = Orders::create([
				'code' => Orders::generateOrderCode(),
				'order_status_title' => $order_status->title,
				'order_status_id' => $order_status->id,
				'users_id' => Auth::id(),
				'user_full_name' => Auth::user()->name." ".Auth::user()->family,
				'user_email' => Auth::user()->email,
				'user_mobile' => Auth::user()->mobile,
				'persian_submit_date' => jDate::forge()->format('datetime'),
				'delivery_method_title' => $delivery_method->title,
				'delivery_params' => $delivery_method->toJson(),
				'transferee_name' => $address->name_transferee,
				'transferee_ostan' => $address->ostans->title,
				'transferee_city' => $address->cities->title,
				'transferee_address_params' => $address->toJson(),
				'payment_method_title' => $payment_method->title,
				'payment_params' => $payment_method->toJson(),
				'total_price' => $total_price,
				'delivery_price' => $delivery_price,
				'discount_price' => 0,
				'tax_price' => 0,
				'final_price' => 0,
			]);

			// create order Items
			$userCarts = ShoppingCart::with("designParams","userSavedCanvas")->where("user_id",Auth::id());

			foreach ($userCarts->get() as $userCart)
			{

				$newItemDesign = OrderItemsDesign::create([
					'order_id' => $newOrder->id,
					'uscu_id' => $userCart->uscu_id,
					'title' => $userCart->userSavedCanvas->parentDesign->title,
					'price' => $userCart->userSavedCanvas->parentDesign->price,
					'parent_id' => $userCart->userSavedCanvas->parentDesign->id,
					'user_saved_canvas_id' => $userCart->userSavedCanvas->id,
					'color_id' => $userCart->userSavedCanvas->sectionsWithParent[0]->parentSection->color->id,
					'color_title' => $userCart->userSavedCanvas->sectionsWithParent[0]->parentSection->color->title,
					'color_code' => $userCart->userSavedCanvas->sectionsWithParent[0]->parentSection->color->color
				]);

				// append PLUS this design for calculate TOTAL ORDER PRICE
				$total_price += $userCart->userSavedCanvas->parentDesign->price;

				// ADD SECTION USER DATA TO ORDER
				//dd($userCart->userSavedCanvas->sectionsWithParent->toArray());
				foreach ($userCart->userSavedCanvas->sectionsWithParent as $section){
					//if($section->id != 324) continue;
					$option['option_name'] = $section->options;
					$option['option_price'] = null;
					if(!is_null($section->parentSection->options) && !is_null($section->options)) {
						$optionTemp = json_decode($section->parentSection->options,true);

						if (!is_null($optionTemp) && $optionTemp["use_options"]) {
							//dd($section->id,$optionTemp,$section->options,$optionTemp[$section->options]);
							$option['option_name'] = $section->options;

							$option['option_price'] = key_exists($option['option_name'],$optionTemp) ? $optionTemp[$option['option_name']] : null;

							// append PLUS this section price for calculate TOTAL ORDER PRICE : if has price
							$total_price += $option['option_price'];
						}
						unset($optionTemp);
					}

					OrderItemsDesignSections::create([
						'order_items_design_id' => $newItemDesign->id,
						'parent_id' => $section->parentSection->id,
						'title' => $section->parentSection->title,
						'source_bg' => $section->parentSection->source_bg,
						'without_source_bg' => $section->parentSection->without_source_bg,
						'size_fix_x'  => $section->parentSection->size_fix_x,
						'size_fix_y'  => $section->parentSection->size_fix_y,
						'safe_area'  => $section->parentSection->safe_area,
						'canvas_data'  => $section->canvas_data,
						'params'  => $section->params,
						'preview'  => $section->preview,
						'preview_bg'  => $section->parentSection->preview_bg,
						'option_name'  => $option['option_name'],
						'option_price'  => $option['option_price']
					]);



				}

				// ADD DESIGN PARAMS TO ORDER
				foreach ($userCart->designParams as $params){
					OrderItemsDesignParams::create([
						'order_items_design_id' => $newItemDesign->id,
						'param_id' => $params->param->id,
						'param_title' => $params->param->title,
						'option_id' => $params->option->id,
						'option_title' => $params->option->title,
						'option_price' => $params->option->price,
					]);

					// append PLUS this param Option price for calculate TOTAL ORDER PRICE
					$total_price += $params->option->price;
				}
			}

			$userCarts->delete();

			// update total and final price to this order
			$newOrder->total_price = $total_price;
			$newOrder->final_price = $total_price + $delivery_price;

			if($newOrder->save()){
				//TODO: SEND EMAIL TO ADMIN FOR NOTIFY HIM ADD NEW ORDER
				//TODO: SEND EMAIL TO THIS USER FOR NOTIFY NEW ORDER
				//TODO: check payment_method: if is online (submit order then go to bank) : go bank. if is others : do right thinks
				return view("orders.submit");
			}

			// user has submit order.
			flash(KamiyarFunctions::showError("UHSO"),"danger");
			return redirect()->route("orders.cart");
		}

		return redirect()->route("orders.cart");

	}

	public static  function saveGuestShoppingCartToDb(){

		$guestShoppingCarts = session("guestShoppingCart");

		foreach ($guestShoppingCarts as $guestShoppingCart) {
			//dd($guestShoppingCart);
			$addShoppingCart["order_type"] = $guestShoppingCart["order_type"];
			$addShoppingCart["user_id"] = Auth::id();
			$USCU_ID = $guestShoppingCart["uscu_id"].Auth::id();
			//dd($USCU_ID,UserSavedCanvas::where("uscu_id",$USCU_ID)->first(),DB::enableQueryLog());
			$addShoppingCart["user_saved_canvas_id"] = UserSavedCanvas::where("uscu_id",$USCU_ID)->first()->id;
			$addShoppingCart["uscu_id"] = $USCU_ID;

			// first: create or update user cart
			$shoppingCart = ShoppingCart::where("uscu_id", $USCU_ID)->first();

			if (empty($shoppingCart)) { // add new cart for user
				$shoppingCart = ShoppingCart::create($addShoppingCart);

				// seconf: add params and options or update
				// params : param_id : option_id
				if (isset($guestShoppingCart["params"])) {
					foreach ($guestShoppingCart["params"] as $param => $option) {
						$ShoppingCartParams = ShoppingCartDesignParams::where("shopping_cart_id", $shoppingCart->id)->where("param_id", $param)->first();

						if (empty($ShoppingCartParams)) { // create one
							ShoppingCartDesignParams::create([
								"shopping_cart_id" => $shoppingCart->id,
								"param_id" => $param,
								"param_option_id" => $option,
							]);
						} else { // update existed
							$ShoppingCartParams->update([
								"param_option_id" => $option,
							]);
						}
					}
				}

			}
		}

		request()->session()->forget("guestShoppingCart");

		return true;

		/*
		// UATSCS : SESSIN ADD TO SHOPPING CART AFTER LOGIN OR REG
		return KamiyarFunctions::showError("SATSCALOR");*/

	}
}
