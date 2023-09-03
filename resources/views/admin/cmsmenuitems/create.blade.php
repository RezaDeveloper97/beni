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

{!! Form::open(array('route' => 'admin.cmsmenuitems.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal')) !!}

<div class="form-group">
    {!! Form::label('title', 'عنوان*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('title', old('title'), array('class'=>'form-control')) !!}
        
    </div>
</div>
<div class="form-group">
    {!! Form::label('cmsmenus_id', 'ریشه منو*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('cmsmenus_id', $cmsmenus, old('cmsmenus_id'), array('class'=>'form-control')) !!}
        
    </div>
</div>
<div class="form-group">
    {!! Form::label('parent_id', trans("global.parent_menu"), array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('parent_id', $cmsmenuitemsNested, old('parent_id'), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="panel panel-default">
    <div class="panel-heading">
        <div class="form-group">
            {!! Form::label('extension', 'نوع منو*', array('class'=>'col-sm-2 control-label')) !!}
            <div class="col-sm-10">
                {!! Form::select('extension', config("enums.menu_extensions"), old('extension'), array('class'=>'form-control',"id"=>"extension_name")) !!}

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
    {!! Form::label('ordering', trans("global.ordering"), array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('ordering', old('ordering'), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('state', 'وضعیت*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('state', $state, old('state'), array('class'=>'form-control')) !!}

    </div>
</div>

<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
      {!! Form::submit( trans('quickadmin::templates.templates-view_create-create') , array('class' => 'btn btn-primary')) !!}
    </div>
</div>

{!! Form::close() !!}

    <div style="display: none !important;" id="menu_extensions">
        <div id="home">
            <div class="form-group">
                {!! Form::label('menu_home_hint', trans("global.description"), array('class'=>'col-sm-2 control-label')) !!}
                <div class="col-sm-10">
                    <p>{{ trans("global.menu_home_hint") }}</p>
                </div>
            </div>
        </div>
        <div id="oneCategory">
            <div class="form-group">
            {!! Form::label('oneCategory', config("enums.menu_extensions.oneCategory"), array('class'=>'col-sm-2 control-label')) !!}
                <div class="col-sm-10">
                    {!! Form::select('params[oneCategory]', $cmscategoriesNested, old('params[oneCategory]'), array('class'=>'form-control')) !!}

                </div>
            </div>
        </div>
        <div id="article">
            <div class="form-group">
                {!! Form::label('article', config("enums.menu_extensions.article"), array('class'=>'col-sm-2 control-label')) !!}
                <div class="col-sm-10">
                    {!! Form::select('params[article]', $articles, old('params[article]'), array('class'=>'form-control')) !!}

                </div>
            </div>
        </div>
        <div id="platform">
            <div class="form-group">
                {!! Form::label('platform', config("enums.menu_extensions.platform"), array('class'=>'col-sm-2 control-label')) !!}
                <div class="col-sm-10">
                    {!! Form::select('params[platform]', $platformsNested, old('params[platform]'), array('class'=>'form-control')) !!}

                </div>
            </div>
        </div>
        <div id="external">
            <div class="form-group">
                {!! Form::label('external', config("enums.menu_extensions.external"), array('class'=>'col-sm-2 control-label')) !!}
                <div class="col-sm-10">
                    {!! Form::text('params[external]', old('params[external]'), array('class'=>'form-control')) !!}
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