@extends('admin.layouts.master')

@section('content')

<div class="row">
    <div class="col-sm-12">
        <h1 style="display:none;">{{ trans('quickadmin::templates.templates-view_edit-edit') }}</h1>

        @if ($errors->any())
        	<div class="alert alert-danger">
        	    <ul>
                    {!! implode('', $errors->all('<li class="error">:message</li>')) !!}
                </ul>
        	</div>
        @endif
    </div>
</div>

{!! Form::model($shoppingcenter, array('class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array('admin.shoppingcenter.update', $shoppingcenter->id))) !!}

<div class="form-group">
    <div class="col-sm-12">
	<br>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.shoppingcenter.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
	<hr>
    </div>
</div>

<div class="form-group">
    {!! Form::label('cities_id', trans("global.city").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('cities_id', $cities, old('cities_id',$shoppingcenter->cities_id), array('class'=>'form-control select2')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('title', trans("global.title").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('title', old('title',$shoppingcenter->title), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('address', trans("global.address").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('address', old('address',$shoppingcenter->address), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('phone', trans("global.phone").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('phone', old('phone',$shoppingcenter->phone), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('google_map_url', trans("global.google_map_url").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('google_map_url', old('google_map_url',$shoppingcenter->google_map_url), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('ordering', trans("global.ordering").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('ordering', old('ordering',$shoppingcenter->ordering), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('state', trans("global.state").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('state', $state, old('state',$shoppingcenter->state), array('class'=>'form-control select2')) !!}
        
    </div>
</div>

<div class="form-group">
    <div class="col-sm-12">
	<hr>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.shoppingcenter.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}

    </div>
</div>

{!! Form::close() !!}

@endsection