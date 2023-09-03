@extends('admin.layouts.master')

@section('content')

<div class="row">
    <div class="col-sm-10 col-sm-offset-2">
        <h1>{{ trans('quickadmin::templates.templates-view_edit-edit') }}</h1>

        @if ($errors->any())
        	<div class="alert alert-danger">
        	    <ul>
                    {!! implode('', $errors->all('<li class="error">:message</li>')) !!}
                </ul>
        	</div>
        @endif
    </div>
</div>

{!! Form::model($userslegaladdress, array('class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array('admin.userslegaladdress.update', $userslegaladdress->id))) !!}

<div class="form-group">
    {!! Form::label('users_id', trans("global.user")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('users_id', $users, old('users_id',$userslegaladdress->users_id), array('class'=>'form-control select2')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('company_name', trans("global.company_name")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('company_name', old('company_name',$userslegaladdress->company_name), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('economic_code', trans("global.economic_code")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('economic_code', old('economic_code',$userslegaladdress->economic_code), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('meli_code', trans("global.meli_certificate_code")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('meli_code', old('meli_code',$userslegaladdress->meli_code), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('record_number', trans("global.record_number")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('record_number', old('record_number',$userslegaladdress->record_number), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('ostans_id', trans("global.ostan")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('ostans_id', $ostans, old('ostans_id',$userslegaladdress->ostans_id), array('class'=>'form-control select2')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('cities_id', trans("global.city")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('cities_id', $cities, old('cities_id',$userslegaladdress->cities_id), array('class'=>'form-control select2')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('address', trans("global.company_address")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('address', old('address',$userslegaladdress->address), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('postal_code', trans("global.postal_code")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('postal_code', old('postal_code',$userslegaladdress->postal_code), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('name_transferee', trans("global.name_and_family_transferee")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('name_transferee', old('name_transferee',$userslegaladdress->name_transferee), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('mobile_transferee', trans("global.mobile_transferee")." *", array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('mobile_transferee', old('mobile_transferee',$userslegaladdress->name_transferee), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('default_address', trans("global.default_address"), array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::hidden('default_address','') !!}
        {!! Form::checkbox('default_address', 1, $userslegaladdress->default_address == 1) !!}
        
    </div>
</div>

<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.userslegaladdress.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection