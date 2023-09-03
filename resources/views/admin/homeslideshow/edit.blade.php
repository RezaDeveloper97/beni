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

{!! Form::model($homeslideshow, array('class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array('admin.homeslideshow.update', $homeslideshow->id))) !!}

<div class="form-group">
    <div class="col-sm-12">
	<br>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.homeslideshow.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
	<hr>
    </div>
</div>

<div class="form-group">
    {!! Form::label('title', trans("global.title").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('title', old('title',$homeslideshow->title), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('image', trans("global.image").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        <div class="select_media_body">
			<button type="button" class="popup_selector btn btn-primary" data-inputid="image" >{{ trans("global.select") }}</button>
			{!! Form::hidden('image', old('image',$homeslideshow->image), array('id'=>'image','class'=>'form-control','readonly' => 'readonly')) !!}
			<div class="btn btn-default img-prev"  data-toggle="tooltip" data-picker="image" title="{{ trans("global.whitout_prev") }}"><i class="fa fa-eye"></i></div>
		</div>
        
    </div>
</div>

<div class="form-group" dir="ltr">
    {!! Form::label('link_to', trans("global.link_to").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('link_to', old('link_to',$homeslideshow->link_to), array('class'=>'form-control')) !!}
        
    </div>
</div>
<!--<div class="form-group">
    {!! Form::label('params', trans("global.params").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('params', old('params',$homeslideshow->params), array('class'=>'form-control')) !!}
        
    </div>
</div>-->
<div class="form-group">
    {!! Form::label('html_tags', trans("global.html_tags").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('html_tags', old('html_tags',$homeslideshow->html_tags), array('class'=>'form-control ckeditor')) !!}
        
    </div>
</div><div class="form-group" dir="ltr">
    {!! Form::label('css_style', trans("global.css_style").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('css_style', old('css_style',$homeslideshow->css_style), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group" dir="ltr">
    {!! Form::label('js_code', trans("global.js_code").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('js_code', old('js_code',$homeslideshow->js_code), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('ordering', trans("global.ordering").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('ordering', old('ordering',$homeslideshow->ordering), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('state', trans("global.state").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('state', $state, old('state',$homeslideshow->state), array('class'=>'form-control select2')) !!}
        
    </div>
</div>

<div class="form-group">
    <div class="col-sm-12">
	<hr>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.homeslideshow.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}

    </div>
</div>

{!! Form::close() !!}

@endsection