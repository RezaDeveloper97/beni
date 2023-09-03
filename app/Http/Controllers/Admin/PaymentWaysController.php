<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Kamiyar\KamiyarFunctions;
use Illuminate\Support\Facades\Lang;
use Redirect;
use Schema;
use App\PaymentWays;
use App\Http\Requests\CreatePaymentWaysRequest;
use App\Http\Requests\UpdatePaymentWaysRequest;
use Illuminate\Http\Request;



class PaymentWaysController extends Controller {

	/**
	 * Display a listing of paymentways
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $paymentways = PaymentWays::all();

		return view('admin.paymentways.index', compact('paymentways'));
	}

	/**
	 * Show the form for creating a new paymentways
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    if(auth()->user()->role()->first()->id == 1) {

			$state = KamiyarFunctions::TranslateState(PaymentWays::$state);

			return view('admin.paymentways.create', compact("state"));
		}
		else{
			abort(403);
		}

	}

	/**
	 * Store a newly created paymentways in storage.
	 *
     * @param CreatePaymentWaysRequest|Request $request
	 */
	public function store(CreatePaymentWaysRequest $request)
	{
		if(auth()->user()->role()->first()->id == 1) {
		
			$new = PaymentWays::create($request->all());
			
			return self::returnType($request->get("save_type"),$new->id);
		}
		else{
			abort(403);
		}
	}

	/**
	 * Show the form for editing the specified paymentways.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$paymentways = PaymentWays::find($id);
	    
	    
        $state = KamiyarFunctions::TranslateState(PaymentWays::$state);

		return view('admin.paymentways.edit', compact('paymentways', "state"));
	}

	/**
	 * Update the specified paymentways in storage.
     * @param UpdatePaymentWaysRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdatePaymentWaysRequest $request)
	{
		$paymentways = PaymentWays::findOrFail($id);

        

		$paymentways->update($request->all());

		return self::returnType($request->get("save_type"),$paymentways->id);
	}

	/**
	 * Remove the specified paymentways from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		PaymentWays::destroy($id);

		return redirect()->route('admin.paymentways.index');
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
            PaymentWays::destroy($toDelete);
        } else {
            PaymentWays::whereNotNull('id')->delete();
        }

        return redirect()->route('admin.paymentways.index');
    }
	
	private function returnType($save_type,$id){
		
		switch ($save_type){
			case "save":
				return redirect()->route("admin.paymentways.edit",$id);
				break;
			case "save_new":
				return redirect()->route("admin.paymentways.create");
				break;
			case "save_close":
				return redirect()->route("admin.paymentways.index");
				break;
			default:
				return redirect()->route("admin.paymentways.index");
				break;

		}
	}

}
