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

{!! Form::open(array('route' => 'admin.aboutusmenus.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal')) !!}

<div class="form-group">
    <div class="col-sm-12">
	<br>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.aboutusmenus.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
	<hr>	
    </div>
</div>

<div class="form-group">
    {!! Form::label('parent_id', Lang::get("global.parent"), array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('parent_id', $aboutusmenusNested, old('parent_id'), array('class'=>'form-control select2')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('title', trans("global.title").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('title', old('title'), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('en_name', trans("global.en_name").' *', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('en_name', old('en_name'), array('class'=>'form-control')) !!}
        
    </div>
</div>
<div class="panel panel-default">
    <div class="panel-heading">
        <div class="form-group">
            {!! Form::label('extension',  trans("global.extension_menu"), array('class'=>'col-sm-2 control-label')) !!}
            <div class="col-sm-10">
                {!! Form::select('extension', config("enums.about_us_menu_extensions"), old('extension'), array('class'=>'form-control',"id"=>"extension_name")) !!}

            </div>
        </div>
    </div>
    <div class="panel-body">
        <div id="menu_extension_params"></div>
        <div id="menu_target">
            <div class="form-group">
                {!! Form::label('menu_target', trans("global.menu_target"), array('class'=>'col-sm-2 control-label')) !!}
                <div class="col-sm-10">
                    {!! Form::select('params[target]', ["_self"=>trans("global._self"),"_blank"=>trans("global._blank")], old('params[target]'), array('class'=>'form-control select2')) !!}

                </div>
            </div>
        </div>
    </div>
</div>
<div class="form-group">
    {!! Form::label('ordering', trans("global.ordering").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('ordering', old('ordering'), array('class'=>'form-control')) !!}
        
    </div>
</div><div class="form-group">
    {!! Form::label('state', trans("global.state").'', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('state', $state, old('state'), array('class'=>'form-control select2')) !!}
        
    </div>
</div>

<div class="form-group">
    <div class="col-sm-12">
	<hr>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.aboutusmenus.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}


<div style="display: none !important;" id="menu_extensions">
    <div id="article">
        <div class="form-group">
            {!! Form::label('article', config("enums.about_us_menu_extensions.article"), array('class'=>'col-sm-2 control-label')) !!}
            <div class="col-sm-10">
                {!! Form::select('params[article]', $articles, old('params[article]'), array('class'=>'form-control')) !!}

            </div>
        </div>
    </div>
    <div id="external">
        <div class="form-group">
            {!! Form::label('external', config("enums.about_us_menu_extensions.external"), array('class'=>'col-sm-2 control-label')) !!}
            <div class="col-sm-10">
                {!! Form::text('params[external]', old('params[external]'), array('class'=>'form-control')) !!}
            </div>
        </div>
    </div>
    <div id="none">
        <div class="form-group">
            {!! Form::label('none', config("enums.about_us_menu_extensions.none"), array('class'=>'col-sm-2 control-label')) !!}
            <div class="col-sm-10">
                {!! Form::hidden('params[none]', old('params[none]'), array('class'=>'form-control')) !!}
            </div>
        </div>
    </div>
</div>

@endsection

@push("js")
<script>
    var menu_extensions = $("#menu_extensions"),
            menu_extension_params = $("#menu_extension_params");

    $(document).ready(function () {
        getMenuExtensionParams($("#extension_name").val());
    });

    $("#extension_name").on("change",function () {
        getMenuExtensionParams($(this).val());
    });

    function getMenuExtensionParams(ext_name) {
        menu_extension_params.html(menu_extensions.find("#"+ext_name).html());
        var select = menu_extensions.find("#"+ext_name).find("select");

    }
</script>
@endpush