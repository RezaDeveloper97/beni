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

{!! Form::open(array('route' => 'admin.collectionitems.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal')) !!}

<div class="form-group">
    <div class="col-sm-12">
	<br>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.collectionitems.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
	<hr>	
    </div>
</div>
<div class="col-sm-9">
    <div class="form-group">
        {!! Form::label('collections_id', trans("global.collection").' *', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::select('collections_id', $collections, old('collections_id'), array('class'=>'form-control select2')) !!}
            <p class="help-block">انتخاب کالکشن این آیتم</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('title', trans("global.title").' *', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('title', old('title'), array('class'=>'form-control')) !!}
            <p class="help-block">عنوان این آیتم</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('description', trans("global.description").'', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::textarea('description', old('description'), array('class'=>'form-control')) !!}
            <p class="help-block">توضیحات این آیتم</p>
        </div>
    </div>
</div>

<div class="col-sm-3">
    <div class="form-group">
    {!! Form::label('amount_default', trans("global.amount_default").' *', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::select('amount_default', $amount_default, old('amount_default'), array('class'=>'form-control select2')) !!}
        <p class="help-block">انتخاب کنید به صورت پیشفرض چه تعداد در این کالکشن باشد</p>
    </div>
    </div><div class="form-group">
        {!! Form::label('price', trans("global.price").' *', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::text('price', old('price'), array('class'=>'form-control')) !!}
            <p class="help-block">قیمت پایه این آیتم</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('image', trans("global.image").' *', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            <div class="select_media_body">
                <button type="button" class="popup_selector btn btn-primary" data-inputid="image" >{{ trans("global.select") }}</button>
                {!! Form::hidden('image', old('image'), array('id'=>'image','class'=>'form-control','readonly' => 'readonly')) !!}
                <div class="btn btn-default img-prev"  data-toggle="tooltip" data-picker="image" title="{{ trans("global.whitout_prev") }}"><i class="fa fa-eye"></i></div>
            </div>
            <p class="help-block">تصویر اصلی را انتخاب کنید</p>
        </div>
    </div>

    <div class="form-group">
        {!! Form::label('thumb_image', trans("global.thumb_image").' *', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            <div class="select_media_body">
                <button type="button" class="popup_selector btn btn-primary" data-inputid="thumb_image" >{{ trans("global.select") }}</button>
                {!! Form::hidden('thumb_image', old('thumb_image'), array('id'=>'thumb_image','class'=>'form-control','readonly' => 'readonly')) !!}
                <div class="btn btn-default img-prev"  data-toggle="tooltip" data-picker="thumb_image" title="{{ trans("global.whitout_prev") }}"><i class="fa fa-eye"></i></div>
            </div>
            <p class="help-block">تصویر کوچک (برای لود شدن سریعتر صفحه)</p>
        </div>
    </div>

    <div class="form-group">
        {!! Form::label('ordering', trans("global.ordering").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::text('ordering', old('ordering'), array('class'=>'form-control')) !!}

        </div>
    </div><div class="form-group">
        {!! Form::label('state', trans("global.state").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::select('state', $state, old('state'), array('class'=>'form-control select4')) !!}

        </div>
    </div>
</div>

<div class="form-group">
    <div class="col-sm-12">
	<hr>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.collectionitems.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection