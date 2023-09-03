<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use App\Orders;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\OrdersStatus;
use App\Http\Requests\CreateOrdersStatusRequest;
use App\Http\Requests\UpdateOrdersStatusRequest;
use Illuminate\Http\Request;



class OrdersStatusController extends Controller {

	/**
	 * Display a listing of ordersstatus
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $ordersstatus = OrdersStatus::all();

		return view('admin.ordersstatus.index', compact('ordersstatus'));
	}

	/**
	 * Show the form for creating a new ordersstatus
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
        $state = KamiyarFunctions::TranslateState(OrdersStatus::$state);

		//$newOrder = OrdersStatus::latest()->orderBy('updated_at', 'desc')->first()->ordering + 1;

	    return view('admin.ordersstatus.create', compact("state","newOrder"));
	}

	/**
	 * Store a newly created ordersstatus in storage.
	 *
     * @param CreateOrdersStatusRequest|Request $request
	 */
	public function store(CreateOrdersStatusRequest $request)
	{
	    
		
		$new = OrdersStatus::create($request->all());
		
		return self::returnType($request->get("save_type"),$new->id);
		
	}

	/**
	 * Show the form for editing the specified ordersstatus.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$ordersstatus = OrdersStatus::find($id);
	    
	    
        $state = KamiyarFunctions::TranslateState(OrdersStatus::$state);

		return view('admin.ordersstatus.edit', compact('ordersstatus', "state"));
	}

	/**
	 * Update the specified ordersstatus in storage.
     * @param UpdateOrdersStatusRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateOrdersStatusRequest $request)
	{
		$ordersstatus = OrdersStatus::findOrFail($id);

        

		$ordersstatus->update($request->all());

		return self::returnType($request->get("save_type"),$ordersstatus->id);
	}

	/**
	 * Remove the specified ordersstatus from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		OrdersStatus::destroy($id);

		return redirect()->route('admin.ordersstatus.index');
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
            OrdersStatus::destroy($toDelete);
        } else {
            OrdersStatus::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.ordersstatus.index');
    }

	public function updateOrderStates(Request $request){
		//dd($request->all());
		OrdersStatus::setSubmitOrderStep($request->submit_order_step);
		OrdersStatus::setPaidOrderStep($request->paid_order_step);

		return redirect()->route('admin.ordersstatus.index');
	}
	
	private function returnType($save_type,$id){
		
		switch ($save_type){
			case "save":
				return redirect()->route("admin.ordersstatus.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.ordersstatus.create");
				break;
			case "save_close":
				return redirect()->route("admin.ordersstatus.index");
				break;
			default:
				return redirect()->route("admin.ordersstatus.index");
				break;

		}
	}

}
