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
    @include("partials/menu",["current"=>"home"])

    @include("partials/topbar")


    @include("home/slideshow",["slideshow"=>$slideshow])

    <div class="container">
        <div class="row">
            @include('flash::message')
        </div>
    </div>

    <div>
        @showSetting(forMore-home)
    </div>

    @include("home/modules")
</div>
@endsection

@push("js")
@endpush
