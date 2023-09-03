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

{!! Form::open(array('route' => 'admin.settings.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal')) !!}

<div class="col-md-9">
    <div class="form-group">
        {!! Form::label('name', 'name*', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('name', old('name'), array('class'=>'form-control')) !!}
            <p class="help-block">این عنوان فقط توسط برنامه نویس قابل رویت و تغییر می باشد</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('title', 'عنوان*', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('title', old('title'), array('class'=>'form-control')) !!}

        </div>
    </div><div class="form-group">
        {!! Form::label('value', 'مقدار*', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::textarea('value', old('value'), array('class'=>'form-control ckeditor')) !!}

        </div>
    </div>
</div>
<div class="col-md-3">
    <div class="form-group">
        {!! Form::label('show_title', 'نمایش عنوان', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::hidden('show_title','') !!}
            {!! Form::checkbox('show_title', 1, true) !!}

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
        {!! link_to_route('admin.settings.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection