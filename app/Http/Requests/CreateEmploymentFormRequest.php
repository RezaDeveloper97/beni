<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreateEmploymentFormRequest extends Request {

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
            'job_title' => 'required',
            'name' => 'required',
            'birthday' => 'required', 
            'email' => 'required',
            'city' => 'required',
            'mobile' => 'required',

		];
	}
}
