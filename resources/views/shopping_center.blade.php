@extends('layouts.app')
@push("css")
<style>
    #contents{
        margin: 0;
    }
</style>
@endpush
@section("title",trans("global.shopping_center"))
@section('content')
<div id="wrapper">
    @include("partials/menu",["current"=>"shopping_center"])

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

    <div id="sales-contacts" class="patch">
        @include('flash::message')
        <div id="breadcrumbs">
            {!! Breadcrumbs::render('shopping_center')  !!}
        </div>

        <div id="left-container" class="fleft">
            <div id="left-nav">
                <ul>
                    <li><a href="{{ route("shopping_center.show") }}"><strong>{{ trans("global.shopping_center") }}</strong></a></li>
                </ul>
            </div>
            <div class="left-banner">
                <h1>{{ trans("global.last_places_shopping") }}</h1>
                <marquee direction="down" scrollamount="2">
                    <ul>
                        @foreach($last20ShoppingCenters as $last20ShoppingCenter)
                        <li><span>{{ $last20ShoppingCenter->title }}</span></li>
                        @endforeach
                    </ul>
                </marquee>
                @showSetting(shopping_center_menu_contact_us)
            </div>

        </div>



        <div id="sales-contacts-content" class="fright">
            <div class="bullet-map" id="geoLocationStatus">
                <h1>@showSetting(find_your_nearest_shopping_center,false)</h1>

                <h3></h3>
                <p></p>
                <div id="map" style="display:none;">
                </div>
            </div>
            <h2>{{ trans("global.other_shopping_centers") }}</h2>
            <select class="sales-select" id="selectCountry">
                <option selected value="0">{{ trans("global.country") }}</option>
                @foreach($data as $country)
                    <option value="country_{{ $country->id }}">{{ $country->title }}</option>
                @endforeach
            </select>
            <select class="sales-select" id="selectOstan">
                <option selected value="0">{{ trans("global.ostan") }}</option>
            </select>
            <select class="sales-select" id="selectCity">
                <option selected value="0">{{ trans("global.city") }}</option>
            </select>
            <div id="salesPointResults">
            </div>
        </div>


        <div class="clear"></div>
    </div>
</div>
<div id="holder_data" style="display: none;">
        @foreach($data as $country)
            <div id="country_{{ $country->id }}"> <!--make each country ostans-->
                <div class="ostans">
                    @foreach($country->ostans as $ostan)
                    <option value="ostan_{{ $ostan->id }}">{{ $ostan->title }}</option>
                    @endforeach
                </div>
                <div class="each_ostan_cities">
                    @foreach($country->ostans as $ostan)
                        <div id="ostan_{{ $ostan->id }}"> <!--make each ostan cities-->
                            <div class="cities">
                            @foreach($ostan->cities as $city)
                                <option value="city_{{ $city->id }}">{{ $city->title }}</option>
                            @endforeach
                            </div>
                            <div class="each_city_shopping_center">
                                @foreach($ostan->cities as $city)
                                    <div id="city_{{ $city->id }}"> <!--make each city shopping center-->
                                        <div class="shopping_centers">
                                            @foreach($city->shoppingCenters as $shopping_center)
                                                <div id="sales-search">
                                                    <h3>{{ $shopping_center->title }}</h3>
                                                    <p>{{ $shopping_center->address }}</p>
                                                    <p class="faNumber">{{ $shopping_center->phone }}</p>
                                                    <a href="{{ $shopping_center->google_map_url }}" target="_blank" class="haritadaGoster">{{ trans("global.show_on_google_map") }}</a>
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>
@endsection
@push('css')
<style>
    #footer-fix {
        display: block !important;
        background: #343434;
        position: fixed;
        bottom: -1px;
        width: 100%;
        z-index: 9;
    }
</style>
@endpush
@push('js')
<script>
    var holder_data = $("#holder_data");
    var selectCountry = $('#selectCountry');
    var selectOstan = $('#selectOstan');
    var selectCity = $('#selectCity');
    var showResults = $('#salesPointResults');
    selectCountry.change(function() {
        selectOstan.empty();
        var thisCountry = $(this).val();
        if(thisCountry != 0){
            selectOstan.append('<option value="0">{{ trans("global.select_it") }}</option>');
            selectOstan.append(holder_data.find("#"+thisCountry).find(".ostans").html());
        }else{
            selectOstan.html('<option selected value="0">{{ trans("global.ostan") }}</option>');
        }
    });

    selectOstan.change(function() {
        selectCity.empty();
        var thisOstan = $(this).val();
        if(thisOstan != 0){
            selectCity.append('<option value="0">{{ trans("global.select_it") }}</option>');
            selectCity.append('<option value="all" ostan="'+thisOstan+'">{{ trans("global.show_all") }}</option>');
            selectCity.append(holder_data.find("#"+thisOstan).find(".cities").html());
        }else{
            selectCity.html('<option selected value="0">{{ trans("global.city") }}</option>');
        }
    });

    selectCity.change(function() {
        showResults.empty();
        var thisCity = $(this).val();

        if(thisCity == "all"){
            var thisOstan = $('option:selected', this).attr("ostan");
            holder_data.find("#"+thisOstan).find(".shopping_centers").each(function () {
                showResults.append($(this).html());
            });

        }
        else if(thisCity != 0){
            showResults.html(holder_data.find("#"+thisCity).find(".shopping_centers").html());
        }
    });

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