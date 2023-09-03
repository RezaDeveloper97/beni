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

{!! Form::model($cmscategories, array('class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array('admin.cmscategories.update', $cmscategories->id))) !!}
<div class="form-group">
    {!! Form::label('parent_id', Lang::get("global.parent"), array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('parent_id', $cmscategoriesNested, old('parent_id',$cmscategories->parent_id), array('class'=>'form-control select2')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('title', 'عنوان*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('title', old('title',$cmscategories->title), array('class'=>'form-control')) !!}

    </div>
</div>

<div class="form-group">
    {!! Form::label('description', trans("global.description"), array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('description', old('description',$cmscategories->description), array('class'=>'form-control textarea')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('ordering', trans("global.ordering"), array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('ordering', old('ordering',$cmscategories->ordering), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('state', 'وضعیت*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('state', $state, old('state',$cmscategories->state), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
      {!! Form::submit(trans('quickadmin::templates.templates-view_edit-update'), array('class' => 'btn btn-primary')) !!}
      {!! link_to_route('admin.cmscategories.index', trans('quickadmin::templates.templates-view_edit-cancel'), null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection