@extends('layouts.app')
@push("css")
<style>
    #contents{
        margin: 0;
    }
</style>
@endpush
@section("title",$article["title"])
@section('content')
<div id="wrapper">
    @include("partials/menu",["current"=>"abs"])

    <div id="heading" class="container-fluid">
        <div id="main-topbar">
            <div id="small-logo">
                <a href="{{ url('/') }}"><img src="{{ asset('templates/default/images/small-logo.png') }}"></a>
            </div>
            <div id="large-logo">
                <a href="{{ url('/') }}"><img src="{{ asset('templates/default/images/large-logo-dark.png') }}"></a>
            </div>
        </div>
    </div>
    <div id="corporate" class="patch">

        @include('flash::message')
        <div id="breadcrumbs" style="margin: 0 0 40px 40px;">
            {!! Breadcrumbs::render('about_us_article',$menu,$article) !!}
        </div>
        <div id="left-container" class="fleft">
            <div id="left-nav">
                {!! \App\Kamiyar\KamiyarFunctions::AboutUsMenuRender() !!}
            </div>
            <br>
            <br>
            <div class="left-banner">
                @showSetting(shopping_center_menu_contact_us)
            </div>
        </div>

        <div id="content">
            {!! $article->content !!}
        </div>
        <div class="clear"></div>
    </div>
</div>
@endsection
@push('css')
<style>{!! $article["css_style"] !!}</style>
@endpush
@push('js')
<script>
    var smallLogo = $('#small-logo');
    var largeLogo = $('#large-logo');
    $(window).scroll(function () {
        if($(this).scrollTop() > 0){
            smallLogo.show(0);
            largeLogo.hide(0);
            $('#corporate-content-title').addClass('cloned');
        }else{
            smallLogo.hide(0);
            largeLogo.show(0);
            $('#corporate-content-title').removeClass('cloned');
        }
        if($(this).scrollTop() > 400){
            $("#heading").addClass("fixed");
        }else{
            $("#heading").removeClass("fixed");
        }
        //if()
    });
    $("#left-container > #left-nav ul li span.linkMedia").click(function () {
        $('#left-container > #left-nav ul li > ul.level2').slideToggle(500);
    })


</script>
@endpush