@extends('layouts.app')
@push("css")
<style>
    #contents{
        margin: 0;
    }
</style>
@endpush
@section("title",isset($thisOpportunity) ? $thisOpportunity["title"] : "بدون فرصت ویژه")
@section('content')
<div id="wrapper">
    @include("partials/menu",["current"=>"opportunities"])
    @if(isset($thisOpportunity))
    <div id="opportunities-page" class="container-fluid">
        <div class="row">
            <div id="main-topbar">
                <div id="small-logo">
                    <a href="{{ url('/') }}"><img src="{{ asset('templates/default/images/small-logo.png') }}"></a>
                </div>
                <div id="large-logo">
                    <a href="{{ url('/') }}"><img src="{{ asset('templates/default/images/large-logo-dark.png') }}"></a>
                </div>
            </div>


            <div id="opportunities" >
                @include('flash::message')
                <div id="breadcrumbs">
                    {!! Breadcrumbs::render('opportunities',$thisOpportunity) !!}
                </div>
                <div id="opportunities-left-nav-container" class="fleft">
                    <div id="opportunities-left-content">
                        @foreach($opportunities as $opportunity)
                            <a href="{{ route("opportunities.show",$opportunity['en_name']) }}" @if($opportunity['en_name'] == $thisOpportunity['en_name']) class="active" @endif>{{ $opportunity['title'] }}</a>
                        @endforeach
                    </div>
                </div>
                <div id="opportunity-content">
                    {!! $thisOpportunity["description"] !!}
                </div>
            </div>
        </div>
    </div>

    @else
        <div id="opportunities" style="
    text-align: center;
    font-size: 25px;
    margin: 143px auto;
">در حال حاظر فرصت ویژه ای در سایت موجود نمی باشد!</div>
    @endif

</div>
@endsection

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
            $("#collection-header").addClass("fixed");
        }else{
            $("#collection-header").removeClass("fixed");
        }
        //if()
    });
    if ( $('#opportunities-content').length != 0 ) {

			$("#opportunities-content .btnIncele").click(function () {
            $(".text-hidden").slideToggle(500);
                if ($(this).text() == "اطلاعات") {
                    $(this).text("مخفی");
                }
                else {
                    $(this).text("اطلاعات");
                }
        });
   }

</script>
@endpush
