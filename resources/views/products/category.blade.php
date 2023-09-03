@extends('layouts.app')
@push("css")
<style>
    #contents{
        margin: 0;
    }
</style>
@endpush
@section("title",$category["title"])
@section('content')
<div id="wrapper">
    @include("partials/menu",["current"=>"products"])

<div id="product-category" class="container" style="margin-top: 20px;">
    <div class="row">
        <div id="category-collections" >
            <div id="topbar">
                <div id="cat-logo">
                    <a href="{{ url('/') }}"><img style="display: inline;" src="{{ asset('templates/default/images/cat-logo.png') }}"></a>
                </div>
                <div id="breadcrumbs">
                    {!! Breadcrumbs::render('category',$category) !!}
                </div>
            </div>

            @include('flash::message')

            <div id="category-info">
                <h1>{{ $category["title"] }}</h1>
                <div class="categoryDescription">{!! $category["description"] !!}</div>
            </div>

            <div id="collections">
                @foreach($category->collections as $collection)
                    <div class="collection">
                        <a href="{{ route("collection.show",$collection->en_name) }}">
                            <img src="{{ asset($collection->image) }}">
                        </a>
                        <div class="collectionName"><strong>{{ $category->title }} {{ $collection->title }}</strong>
                            <div class="collectionDetail">
                                <div>{!! $collection->short_desc !!}</div>
                                <a href="{{ route("collection.show",$collection->en_name) }}">{{ trans("global.interview") }}</a>
                            </div>
                        </div>

                        <div class="tags">
                            @if($collection->discount)
                            <span>%{{ $collection->discount }} {{ trans("global.discount") }}</span>
                            @endif
                            @if($collection->limited_sales)
                                <span>{{ trans("global.limited_sales") }}</span>
                            @endif
                        </div>
                    </div>
                @endforeach
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</div>
</div>
@endsection

@push('js')
<script>
    var tabbar = $('#topbar');
    $(window).scroll(function () {
        if($(this).scrollTop() > 0){
            tabbar.addClass('topbarFix');
        }else{
            tabbar.removeClass('topbarFix');
        }
        //if()
    });
</script>
@endpush