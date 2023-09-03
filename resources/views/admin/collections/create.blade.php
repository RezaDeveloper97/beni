@extends('admin.layouts.master')

@section('content')

<div class="row">
    <div class="col-sm-12">
        <h1 style="display: none;">{{ trans('quickadmin::templates.templates-view_create-add_new') }}</h1>

        @if ($errors->any())
        	<div class="alert alert-danger">
        	    <ul>
                    {!! implode('', $errors->all('<li class="error">:message</li>')) !!}
                </ul>
        	</div>
        @endif
    </div>
</div>

{!! Form::open(array('route' => 'admin.collections.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal')) !!}
<div class="form-group" id="form-btns-navs">
    <div class="col-sm-12">
        <br>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.collections.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
        <hr>
    </div>
</div>
<div class="col-sm-9">
    <div class="form-group">
        {!! Form::label('categories_id', trans("global.category").' *', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::select('categories_id', $categories, old('categories_id'), array('class'=>'form-control select2')) !!}
            <p class="help-block">در کدام دسته بندی</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('title', trans("global.title").' *', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('title', old('title'), array('class'=>'form-control')) !!}
            <p class="help-block">عنوان کالکشن</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('en_name', trans("global.en_name").' *', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::text('en_name', old('en_name'), array('class'=>'form-control')) !!}
            <p class="help-block">عنوان برای سئو (نباید تکراری باشد)</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('short_desc', trans("global.short_desc").'', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::textarea('short_desc', old('short_desc'), array('class'=>'form-control')) !!}
            <p class="help-block">توضیحات کوتاه (نمایش در لیست مجموعه)</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('slideshow_desc', trans("global.slideshow_desc").'', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::textarea('slideshow_desc', old('slideshow_desc'), array('class'=>'form-control')) !!}
            <p class="help-block">توضیحات کوتاه اسلایدشو (نمایش بر روی اسلاید شو این کالکشن)</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('long_desc', trans("global.long_desc").'', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::textarea('long_desc', old('long_desc'), array('class'=>'form-control ckeditor')) !!}
            <p class="help-block">توضیحات کامل (نمایش در محصول)</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('footer_desc', trans("global.footer_desc").'', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::textarea('footer_desc', old('footer_desc'), array('class'=>'form-control ckeditor')) !!}
            <p class="help-block">توضیحات پایین محصول</p>
        </div>
    </div>
</div>
<div class="col-sm-3">
    <div class="form-group">
        {!! Form::label('discount', trans("global.discount").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::text('discount', old('discount'), array('class'=>'form-control')) !!}
            <p class="help-block">مقدار تخفیف (کلی) برای محاسبه آیتم های این کالکشن (%)</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('image', trans("global.image").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            <div class="select_media_body">
                <button type="button" class="popup_selector btn btn-primary" data-inputid="image" >{{ trans("global.select_image") }}</button>
                {!! Form::hidden('image', old('image'), array('class'=>'form-control','id'=>'image')) !!}
                <div class="btn btn-default img-prev"  data-toggle="tooltip" data-picker="image" title="<img width='120px' src=''>"><i class="fa fa-eye"></i></div>
            </div>
            <p class="help-block">تصویر (نمایش در لیست مجموعه)</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('price_list_pdf', trans("global.price_list_pdf").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            <div class="select_media_body">
                <button type="button" class="popup_selector btn btn-primary" data-inputid="price_list_pdf" >{{ trans("global.select") }}</button>
                {!! Form::text('price_list_pdf', old('price_list_pdf'), array('id'=>'price_list_pdf','class'=>'form-control','readonly' => 'readonly')) !!}
            </div>
            <p class="help-block">مسیر pdf لیست قیمت</p>
        </div>
    </div><div class="form-group">
        {!! Form::label('catalog_pdf', trans("global.catalog_pdf").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            <div class="select_media_body">
                <button type="button" class="popup_selector btn btn-primary" data-inputid="catalog_pdf" >{{ trans("global.select") }}</button>
                {!! Form::text('catalog_pdf', old('catalog_pdf'), array('id'=>'catalog_pdf','class'=>'form-control','readonly' => 'readonly')) !!}
            </div>
            <p class="help-block">مسیر pdf کاتالوگ کالکشن</p>
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('opportunity', trans("global.opportunity").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::hidden('opportunity','') !!}
            {!! Form::checkbox('opportunity', 1, false) !!}
            <p class="help-block">فرصت استثنایی</p>
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('limited_sales', trans("global.limited_sales").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::hidden('limited_sales','') !!}
            {!! Form::checkbox('limited_sales', 1, false) !!}
            <p class="help-block">فروش محدود</p>
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('is_new', trans("global.is_new").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::hidden('is_new','') !!}
            {!! Form::checkbox('is_new', 1, false) !!}
            <p class="help-block">کالکشن جدید</p>
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('coll_related', trans("global.coll_related").' *', array('class'=>'col-sm-2 control-label')) !!}
        <div class="col-sm-10">
            {!! Form::select('coll_related[]', $coll_related, old('coll_related[]'), array('class'=>'form-control select2','multiple'=>"true")) !!}
            <p class="help-block">در کدام دسته بندی</p>
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
            {!! Form::select('state', $state, old('state'), array('class'=>'form-control select2')) !!}

        </div>
    </div>

</div>
<div class="form-group">
    <div class="col-sm-12">
        <hr>
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_new') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_new","name"=>"save_type")) !!}
        {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save_and_close') , array('class' => 'btn btn-default',"type"=>"submit", "value" => "save_close","name"=>"save_type")) !!}
        {!! link_to_route('admin.collections.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection
