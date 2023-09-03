@extends('layouts.app')
@push("css")
<style>
    #contents{
        margin: 0;
    }
</style>
@endpush
@section("title",$thisNews["title"])
@section('content')
<div id="wrapper">
    
    @php
    
    ///var_dump($thisNews);
    @endphp
    @include("partials/menu",["current"=>"news"])

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

    <div id="actuel" class="patch">
        @include('flash::message')
        <div id="breadcrumbs">
            {!! Breadcrumbs::render('news',$thisNews) !!}
        </div>
        <div id="actuel-left-nav-container" class="fleft">

            <div id="left-nav">
                <ul>
                    @foreach($news as $newsItem)
                    
                    
                    @php 
                    if(1==2){
                    
                    @endphp 
                        <li>
                            <a href="{{ route("news.show",$newsItem['en_name']) }}" @if($newsItem['en_name'] == $thisNews['en_name']) class="active" @endif>
                                <strong>{{ $newsItem['title'] }}</strong>
                            </a>
                        </li>
                        @php
                        }
                        @endphp 
                        
                        
                             <li>
                            <a href="{{ route("news.show") }}?@php echo $newsItem['en_name']; @endphp" @if($newsItem['en_name'] == $thisNews['en_name']) class="active" @endif>
                                <strong>{{ $newsItem['title'] }}</strong>
                            </a>
                        </li>
                        
                    @endforeach

                </ul>
            </div>
        </div>
        <div>
            {!! $thisNews["html_tags"] !!}
            <div class="clearfix"></div>

            <div id="aktuel-prev-next">
                @if(!empty($prevNews))
                <div class="prev fright">
                    <a href="{{ route("news.show",$prevNews['en_name']) }}">{{ trans("global.prev") }}: <br>
                        <strong>{{ $prevNews["title"] }}</strong>
                    </a>
                </div>
                @endif
                @if(!empty($nextNews))
                <div class="next fleft">
                    <a href="{{ route("news.show",$nextNews['en_name']) }}">{{ trans("global.next") }}: <br>
                        <strong>{{ $nextNews["title"] }}</strong>
                    </a>
                </div>
                    @endif
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
@endsection
@push('css')
{!! $thisNews["css_style"] !!}
@endpush
@push('js')
<script>
    var smallLogo = $('#small-logo');
    var largeLogo = $('#large-logo');
    $(window).scroll(function () {
        if($(this).scrollTop() > 0){
            smallLogo.show(0);
            largeLogo.hide(0);
        }else{
            smallLogo.hide(0);
            largeLogo.show(0);
        }
        if($(this).scrollTop() > 400){
            $("#heading").addClass("fixed");
        }else{
            $("#heading").removeClass("fixed");
        }
        //if()
    });


</script>
@endpush