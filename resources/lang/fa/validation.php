<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => 'The :attribute must be accepted.',
    'active_url'           => 'The :attribute is not a valid URL.',
    'after'                => 'The :attribute must be a date after :date.',
    'alpha'                => 'The :attribute may only contain letters.',
    'alpha_dash'           => 'فیلد :attribute تنها می تواند عدد، حروف انگلیسی و دش (-) باشد.',
    'alpha_num'            => 'فیلد :attribute باید حتما عدد و یا حرف انگلیسی باشد.',
    'array'                => 'The :attribute must be an array.',
    'before'               => 'The :attribute must be a date before :date.',
    'between'              => [
        'numeric' => 'The :attribute must be between :min and :max.',
        'file'    => 'The :attribute must be between :min and :max kilobytes.',
        'string'  => 'The :attribute must be between :min and :max characters.',
        'array'   => 'The :attribute must have between :min and :max items.',
    ],
    'boolean'              => 'The :attribute field must be true or false.',
    'confirmed'            => 'فیلد :attribute یکسان نیست!.',
    'date'                 => 'The :attribute is not a valid date.',
    'date_format'          => 'The :attribute does not match the format :format.',
    'different'            => 'The :attribute and :other must be different.',
    'digits'               => 'The :attribute must be :digits digits.',
    'digits_between'       => 'The :attribute must be between :min and :max digits.',
    'distinct'             => 'The :attribute field has a duplicate value.',
    'email'                => 'The :attribute must be a valid email address.',
    'exists'               => 'The selected :attribute is invalid.',
    'filled'               => 'The :attribute field is required.',
    'image'                => 'The :attribute must be an image.',
    'in'                   => 'The selected :attribute is invalid.',
    'in_array'             => 'The :attribute field does not exist in :other.',
    'integer'              => 'The :attribute must be an integer.',
    'ip'                   => 'The :attribute must be a valid IP address.',
    'json'                 => 'The :attribute must be a valid JSON string.',
    'max'                  => [
        'numeric' => 'The :attribute may not be greater than :max.',
        'file'    => 'The :attribute may not be greater than :max kilobytes.',
        'string'  => 'The :attribute may not be greater than :max characters.',
        'array'   => 'The :attribute may not have more than :max items.',
    ],
    'mimes'                => 'The :attribute must be a file of type: :values.',
    'min'                  => [
        'numeric' => 'The :attribute must be at least :min.',
        'file'    => 'The :attribute must be at least :min kilobytes.',
        'string'  => 'The :attribute must be at least :min characters.',
        'array'   => 'The :attribute must have at least :min items.',
    ],
    'not_in'               => 'The selected :attribute is invalid.',
    'numeric'              => 'The :attribute must be a number.',
    'present'              => 'The :attribute field must be present.',
    'regex'                => 'The :attribute format is invalid.',
    'required'             => 'فیلد :attribute الزامی می باشد.',
    'required_if'          => 'The :attribute field is required when :other is :value.',
    'required_unless'      => 'The :attribute field is required unless :other is in :values.',
    'required_with'        => 'The :attribute field is required when :values is present.',
    'required_with_all'    => 'The :attribute field is required when :values is present.',
    'required_without'     => 'The :attribute field is required when :values is not present.',
    'required_without_all' => 'The :attribute field is required when none of :values are present.',
    'same'                 => 'The :attribute and :other must match.',
    'size'                 => [
        'numeric' => 'The :attribute must be :size.',
        'file'    => 'The :attribute must be :size kilobytes.',
        'string'  => 'The :attribute must be :size characters.',
        'array'   => 'The :attribute must contain :size items.',
    ],
    'string'               => 'The :attribute must be a string.',
    'timezone'             => 'The :attribute must be a valid zone.',
    'unique'               => 'فیلد :attribute قبلا در دیتابیس ثبت شده است!.',
    'url'                  => 'The :attribute format is invalid.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [
        "title" =>"عنوان",
        "catroots_id" => Lang::get("global.catroots"),
        "name" => trans("global.name"),
        "family" => trans("global.family"),
        "categories" => Lang::get("global.categories"),
        "tags" => Lang::get("global.tags"),
        "filterItems" => Lang::get("global.filterItems"),
        "designs_id" => Lang::get("global.design"),
        "email" => trans("global.email"),
        "password" => trans("global.password"),
        "re-password" => trans("global.re-password"),
        "cmscategories_id" => trans("global.cmscategories"),
        "content" => trans("global.content"),
        "cmsmenus_id" => trans("global.cmsmenus_id"),
        "color" => trans("global.color"),
        "color_id" => trans("global.color"),
        "platformsordersparams_id" => trans("global.param"),
        "ostans_id" => trans("global.ostan"),
        "mobile" => trans("global.mobile"),
        "phone" => trans("global.phone"),
        "address" => trans("global.address"),
        "postal_code" => trans("global.postal_code"),
        "name_transferee" => trans("global.name_and_family_transferee"),
        "categories_id" => trans("global.categories_id"),
        "en_name" => trans("global.en_name"),
        "collection_id" => trans("global.collection_id"),
        "price" => trans("global.price"),
        "image" => trans("global.image"),
        "thumb_image" => trans("global.thumb_image"),
        "html_tags" => trans("global.html_tags"),
        "css_style" => trans("global.css_style"),
        "country_id" => trans("global.country"),
        "cities_id" => trans("global.city"),
        "city" => trans("global.city"),
        "google_map_url" => trans("global.google_map_url"),
        "job_title" => 'عنوان شغلی',
        "birthday" => 'تاریخ تولد',
    ],

];
