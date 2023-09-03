<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UpdateUsersLegalAddressRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
            'users_id' => 'required', 
            'company_name' => 'required', 
            'economic_code' => 'required', 
            'meli_code' => 'required', 
            'record_number' => 'required', 
            'address' => 'required', 
            'postal_code' => 'required', 
            'name_transferee' => 'required',
			'mobile_transferee' => 'required',

		];
	}
}
