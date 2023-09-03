@extends('admin.layouts.master')

@section('content')

<div class="row">
    <div class="col-sm-10 col-sm-offset-2">
        <h1>{{ trans('quickadmin::templates.templates-view_create-add_new') }}</h1>

        @if ($errors->any())
        	<div class="alert alert-danger">
        	    <ul>
                    {!! implode('', $errors->all('<li class="error">:message</li>')) !!}
                </ul>
        	</div>
        @endif
    </div>
</div>

{!! Form::open(array('route' => 'admin.deliverways.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal')) !!}
<div class="col-sm-8">
    <div class="form-group">
        {!! Form::label('title', 'عنوان*', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('title', old('title'), array('class'=>'form-control')) !!}

        </div>
    </div>
    <div class="form-group">
        {!! Form::label('ostans_id', 'استان ها*', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::select('ostans_id[]', $ostans, old('ostans_id'), array('class'=>'form-control select2',"multiple" => "multiple")) !!}

        </div>
    </div>
    <div class="form-group">
        {!! Form::label('description', 'توضیحات', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::textarea('description', old('description'), array('class'=>'form-control ckeditor')) !!}

        </div>
    </div>
</div>
<div class="col-sm-4">
    <div class="form-group">
        {!! Form::label('price', 'هزینه ارسال*', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('price', old('price'), array('class'=>'form-control')) !!}

        </div>
    </div><div class="form-group">
        {!! Form::label('ordering', 'ترتیب', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('ordering', old('ordering'), array('class'=>'form-control')) !!}

        </div>
    </div><div class="form-group">
        {!! Form::label('state', 'وضعیت', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::select('state', $state, old('state'), array('class'=>'form-control')) !!}

        </div>
    </div>
</div>
<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.deliverways.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection