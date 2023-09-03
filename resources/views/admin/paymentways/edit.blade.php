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

{!! Form::model($paymentways, array('class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array('admin.paymentways.update', $paymentways->id))) !!}

<div class="form-group">
    {!! Form::label('title', 'عنوان*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('title', old('title',$paymentways->title), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('description', 'توضیحات*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('description', old('description',$paymentways->description), array('class'=>'form-control ckeditor')) !!}
        
    </div>
</div>
@if(auth()->user()->role()->first()->id == 1)
<div class="form-group">
    {!! Form::label('params', 'params', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('params', old('params',$paymentways->params), array('class'=>'form-control')) !!}
        
    </div>
</div>
@endif
<div class="form-group">
    {!! Form::label('ordering', 'ordering', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('ordering', old('ordering',$paymentways->ordering), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('state', 'وضعیت', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('state', $state, old('state',$paymentways->state), array('class'=>'form-control')) !!}
        
    </div>
</div>

<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        @if(auth()->user()->role()->first()->id == 1){!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}@endif
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.paymentways.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection