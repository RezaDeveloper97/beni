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

{!! Form::model($settings, array('class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array('admin.settings.update', $settings->id))) !!}
<div class="col-md-9">
    @if(auth()->user()->role()->first()->id == 1)
    <div class="form-group">
        {!! Form::label('name', 'name*', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('name', old('name',$settings->name), array('class'=>'form-control')) !!}
            <p class="help-block">این عنوان فقط توسط برنامه نویس قابل رویت و تغییر می باشد</p>
        </div>
    </div>
    @endif
    <div class="form-group">
        {!! Form::label('title', 'عنوان*', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('title', old('title',$settings->title), array('class'=>'form-control')) !!}

        </div>
    </div><div class="form-group">
        {!! Form::label('value', 'مقدار*', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::textarea('value', old('value',$settings->value), array('class'=>'form-control ckeditor')) !!}

        </div>
    </div>
</div>
<div class="col-md-3">
    <div class="form-group">
    {!! Form::label('show_title', 'نمایش عنوان', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::hidden('show_title','') !!}
        {!! Form::checkbox('show_title', 1, $settings->show_title == 1) !!}
        
    </div>
    </div>
    <div class="form-group">
        {!! Form::label('state', 'وضعیت', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::select('state', $state, old('state',$settings->state), array('class'=>'form-control')) !!}

        </div>
    </div>

</div>
<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        @if(auth()->user()->role()->first()->id == 1)
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        @endif
            {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.settings.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection