@extends('admin.layouts.master')

@section('content')

<div class="row">
    <div class="col-sm-12">
        <h1 style="display:none;">{{ trans('quickadmin::templates.templates-view_create-add_new') }}</h1>

        @if ($errors->any())
        	<div class="alert alert-danger">
        	    <ul>
                    {!! implode('', $errors->all('<li class="error">:message</li>')) !!}
                </ul>
        	</div>
        @endif
    </div>
</div>

{!! Form::open(array('route' => 'admin.bookintro.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal')) !!}

<div class="form-group">
    <div class="col-sm-12">
	<br>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.bookintro.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
	<hr>
    </div>
</div>

<div class="form-group">
    {!! Form::label('name', trans("global.name").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('name', old('name'), array('class'=>'form-control')) !!}

    </div>
</div>

<div class="form-group">
    {!! Form::label('e_name', trans("e_name").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('e_name', old('e_name'), array('class'=>'form-control')) !!}

    </div>
</div>

<div class="form-group">
    {!! Form::label('title', trans("global.title").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('title', old('title'), array('class'=>'form-control')) !!}

    </div>
</div>

<div class="form-group">
    {!! Form::label('subtitle', trans("global.subtitle").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('subtitle', old('subtitle'), array('class'=>'form-control')) !!}

    </div>
</div>

<div class="form-group">
    {!! Form::label('content', trans("global.content").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">

        {!! Form::textarea('content', old('content'), array('class'=>'form-control')) !!}

    </div>
</div>

<div class="form-group">
    {!! Form::label('image', trans("global.image").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        <div class="select_media_body">
			<button type="button" class="popup_selector btn btn-primary" data-inputid="image" >{{ trans("global.select") }}</button>
			{!! Form::hidden('image', old('image'), array('id'=>'image','class'=>'form-control','readonly' => 'readonly')) !!}
			<div class="btn btn-default img-prev"  data-toggle="tooltip" data-picker="image" title="{{ trans("global.whitout_prev") }}"><i class="fa fa-eye"></i></div>
		</div>

    </div>
</div>

<div class="form-group">
    {!! Form::label('full_content', trans("global.full_content").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('full_content', old('full_content'), array('class'=>'form-control','style'=>'direction: ltr;')) !!}

    </div>
</div>

<div class="form-group">
    {!! Form::label('ordering', trans("global.ordering").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::number('ordering', old('ordering',$maxOrdering), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('state', trans("global.state").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('state', $state, old('state'), array('class'=>'form-control select2')) !!}

    </div>
</div>
<!--
<div class="form-group">
    {!! Form::label('meta_keys', trans("global.meta_keys").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('meta_keys', old('meta_keys'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('meta_desc', trans("global.meta_desc").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('meta_desc', old('meta_desc'), array('class'=>'form-control')) !!}

    </div>
</div>
-->
<div class="form-group">
    <div class="col-sm-12">
	<hr>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.bookintro.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection
