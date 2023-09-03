@extends('layouts.app')
@push("css")
<style>
    #contents{
        margin: 0;
    }
</style>
@endpush
@section("title",trans("global.home"))
@section('content')
<div id="wrapper">
    @include("partials/menu",["current"=>"null"])

    @include("partials/topbar")


    <div class="container">
        <div class="row">
            @include('flash::message')
        </div>
    </div>

    <form name="SearchForm" method="GET" action="{{ route("search.show") }}" id="SearchForm">
        <!--	#search-results
        -------------------------->
        <div id="search-results">
            <div id="left-container" class="fleft">
                <h1>نتایج جستجو</h1>
                <div class="search-detail">
                    <span>کلمه جستجو شده: <strong><em>{{ $result["keyword"] }}</em></strong></span>
                    <span>تعداد نتایج: <strong><em>{{ $result["count"] }}</em></strong></span>

                    <div class="clear"></div>
                </div>
            </div>

            <div id="search-results-content" class="fright">
                <div class="productBreadcrumbs">
                </div>
                <div class="search-again">
                    <input type="text" name="keyword" placeholder="آنچه به دنبالش هستید!" class="txtAra fleft">
                    <input type="submit" value="ara" class="btnAra fleft">
                    <div class="clear"></div>
                    <p><strong>مثال: سرویس مبل پذیرایی</strong></p>
                </div>
                <div id="result">
                    @foreach($result["data"] as $collection)
                        @foreach($collection->items as $item)
                            <div class="result-box">
                                <img src="{{ asset($item->thumb_image) }}" class="fleft">
                                <div class="result-name fleft">
                                    <h2>{{ $collection->title }} - {{ $item->title }}</h2>
                                    <p>{{ $item->description }}</p>
                                </div>
                                <span class="btnIncele fright"><a href="{{ route("collection.show",$collection->en_name) }}">نمایش</a></span>
                                <div class="clear"></div>
                            </div>
                        @endforeach
                    @endforeach
                </div>
            </div>
            <div class="clear"></div>

        </div>
    </form>

</div>
@endsection

@push("js")
@endpush
