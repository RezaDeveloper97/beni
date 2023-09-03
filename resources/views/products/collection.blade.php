@extends('layouts.app')
@push("css")
<style>
    #contents{
        margin: 0;
    }
</style>
@endpush
@section("title",$collection["title"])
@section('content')
<div id="wrapper">
    @include("partials/menu",["current"=>"products"])

    <div id="product-collection" class="container-fluid">
        <div class="row">
            <div id="main-topbar">
                <div id="small-logo">
                    <a href="{{ url('/') }}"><img src="{{ asset('templates/default/images/small-logo.png') }}"></a>
                </div>
                <div id="large-logo">
                    <a href="{{ url('/') }}"><img src="{{ asset('templates/default/images/large-logo.png') }}"></a>
                </div>
            </div>


            <div id="slideshow">
                @include("products.slideshow",["slidshow"=>$collection->slideshow,"collectionTitle"=>$collection->title])
            </div>
            <div id="collection-header" class="">
                <div class="collection-title fleft">
                    <h1>{{ $collection->title }}</h1>
                    <h2>{{ $collection->slideshow_desc }}</h2>
                </div>
                <div class="promos-info fleft">
                    @if($collection->discount)
                        <span class="firsaturunu">%{{ $collection->discount }} {{ trans("global.discount") }}</span>
                    @endif

                    @if($collection->opportunity)
                        <span class="">{{ trans("global.opportunity") }}</span>
                    @endif

                    @if($collection->is_new)
                        <span class="">{{ trans("global.is_new") }}</span>
                    @endif
                </div>
                <a href="#breadcrumbs" class="btnDetail fright jumper">{{ trans("global.details") }}</a>
                <div class="clear"></div>

            </div>

            <br>

            <div id="breadcrumbs">

                {!! Breadcrumbs::render('collection',$collection->category,$collection) !!}
            </div>

            @include('flash::message')

            <div id="collection_content">
                <div id="description">
                    {!! $collection->long_desc !!}
                </div>
                <div id="collection_items">
                    <div id="collection-addpiece" class="newAddPiece">
                        <h4>{{ trans("global.create_your_oun_collection") }}</h4>
                        <?php $totalItemPrices = 0; ?>
                        @foreach($collection->items as $item)
                            <?php $totalItemPrices += $item->price; ?>
                            <div class="addpiece-box fleft">
                                <img src="{{ asset($item->thumb_image) }}" class="productPartImage">
                                <div class="productName">
                                    <strong style="text-align:center;">{{ $item->title }}</strong>
                                    <div style="text-align:center;">{{ $item->description }}</div>

                                    <div class="selectNumber">
                                        {{ Form::select("productAmount",$select_amount,$item->amount_default,["id"=>"productAmount","class"=>"fright productAmount"]) }}

                                        <div class="clear"></div>
                                    </div>
                                    <div class="fleft">{{ trans("global.base_price") }}</div>
                                   <div class="fright oldPrice">{{ number_format($item->price) }}</div>
                                <!--<div class="fright oldPrice">0</div>-->
                                    <div class="clear"></div>

                                    @if($collection->discount > 0)
                                    <div class="newPriceContent">
                                        <div class="fleft">{{ trans("global.price_with_discount",["dis"=>$collection->discount]) }}</div>
                                        <div class="fright newPrice">
                                            {{ number_format(\App\Kamiyar\KamiyarFunctions::calDiscount($item->price,$collection->discount)) }} {{ trans("global.T") }}
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    @endif
                                </div>

                                <div class="btnIncele fright">
                                    <a class="fancybox" rel="group" href="{{ asset($item->image) }}" title="{{ $item->title }}">{{ trans("global.show") }}</a>
                                </div>
                                <div class="clear"></div>
                            </div>
                        @endforeach


                        <div class="clear"></div>

                        <div class="collection-addpeace-footer">
                            <div class="borderBottom">
                                <div class="fleft">{{ trans("global.selected_item_count") }}: <strong id="totalAmount">{{ count($collection->items) }}</strong></div>
                                <div class="fleft taksit">&nbsp;</div>
                                <div class="fleft" id="seciliUrunler"><!--<div>1 adet 3’lü Koltuk</div><div>1 adet 2’li Koltuk</div><div>1 adet Tekli Koltuk</div>--></div>
                                <div class="clear"></div>
                                <div class="fleft newPriceContainer cachPrice">
                                    <div class="priceTitle newPriceContainerRow">{{ trans("global.total_price") }}</div>
                                    <div class="priceValue newPriceContainerRow">
                                        <s><strong id="totalCachePrice">{{ number_format($totalItemPrices) }}</strong></s>
                                    <!--<s><strong id="totalCachePrice">0</strong></s>-->
                                        {{ trans("global.T") }}
                                    </div>
                                </div>
                                <div class="fleft newPriceContainer toplamFiyat">
                                    <div class="priceTitle newPriceContainerRow productGroupPictoText">{{ trans("global.price_with_discount",["dis"=>$collection->discount]) }}</div>
                                    <div class="priceValue newPriceContainerRow">
                                        <strong id="totalPrice">{{ number_format(\App\Kamiyar\KamiyarFunctions::calDiscount($totalItemPrices,$collection->discount)) }} </strong>
                                    <!-- <strong id="totalPrice">0</strong>-->
                                        {{ trans("global.T") }}
                                    </div>
                                </div>
                                <!--<div class="fleft newPriceContainer productGroupDiscountedTotalPrice" style="display: none;">
                                    <div class="priceTitle newPriceContainerRow productGroupDiscountedLimit">
                                        TL ve Üzeri Alışverişlerde  Geçerli Fiyatı
                                    </div>
                                    <div class="priceValue newPriceContainerRow">
                                        <strong id="totalGroupPrice">0</strong>
                                        {{ trans("global.T") }}
                                    </div>
                                </div>-->
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
{{--            <div class="odemeSecenekleri">--}}
{{--                <div class="inner">--}}
{{--                    <img src="{{ asset("templates/default/images/ico-odemesecenekleri.png") }}" class="icon">--}}
{{--                    {{ trans("global.click_for_pay") }}--}}
{{--                    <img src="{{ asset("templates/default/images/odeme-secenekleri-arrow.png") }}" class="arrow">--}}
{{--                    <div class="odemeSecenekleriContent">--}}
{{--                        <table width="100%" border="0" cellspacing="0" cellpadding="0">--}}
{{--                            <tbody><tr>--}}
{{--                                <td align="right">Garanti Bonus Kart'a</td>--}}
{{--                                <td align="left">x 12 Taksit <strong id="installmentYapiKredi">395,28</strong> </td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td align="right">Diğer Kartlara</td>--}}
{{--                                <td align="left"><strong id="installmentOthers">527,04</strong> x 9 Taksit</td>--}}
{{--                            </tr>--}}
{{--                            </tbody></table>--}}
{{--                        <br>--}}
{{--                        <p><strong>Enza Home Kampanya</strong><br>--}}
{{--                            Garanti Bonus ile anlaşmalı Yataş satış noktalarında 1 Kasım - 31 Ocak 2017 tarihleri arasında Garanti Bonus kart ile Garanti Bonus POS'larından yapılacak 6 taksitli alışverişlere müşteri talebine bağlı olarak +6 taksit fırsatı sunulacaktır. Diğer banka kartları hakkında ödeme seçenekleri bilgisi için satış noktalarına danışınız.			</p>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
            <div id="kampanya">
                <div class="kampanyaContent">
                    {!! $collection->footer_desc !!}
                </div>
            </div>
            <div id="collection-other">
                <h4 class="fleft">{{ trans("global.decorasion_offer_for") }} {{ $collection->title }}</h4>
                <div class="clear"></div>
                <div id="collection-other-content">
                    <div class="scroll ps-container ps-active-y">
                        @foreach($collection->activeRelated as $item)
                            <div class="collection-box fleft">
                                <a href="{{ route("collection.show",$item->en_name) }}">
                                    <img src="{{ asset($item->image) }}">
                                </a>
                                <div class="productName">
                                    <strong>
                                        <a href="{{ route("collection.show",$item->en_name) }}">{{ $item->categories->title }} {{ $item->title }} </a>
                                    </strong>
                                </div>

                                @if(count($item->slideshow) > 0)
                                @endif

                                <div class="btnIncele">

                                    <a class="fancybox" rel="group_{{ $item->id }}" href="{{ asset($item->slideshow->first()["image"]) }}" title="{{ $item->title }}">{{ trans("global.show") }}</a>

                                </div>
                                <div class="clear"></div>
                            </div>
                        @endforeach
                        <div class="clear"></div>

                    </div>

                </div>
                    <div class="clear"></div>
            </div>

                <div class="clear"></div>
            <div class="menuBar">
                <ul>
                    <li style="width: 25%;"><a href="{{ route("shopping_center.show") }}">{{ trans("global.nearest_shop_in_your_place") }}</a></li>
                    <li class="favoriler" style="width: 25%;"><a href="javascript:;" id="addFavorite" data-product-id="{{ $collection->id }}">{{ trans("global.add_to_favorite") }}</a></li>
                    <li style="width: 25%;"><a target="_blank" href="{{ asset( $collection->price_list_pdf ) }}">{{ trans("global.download_price_list") }}</a></li>
                    <li style="width: 25%;"><a target="_blank" href="{{ asset($collection->catalog_pdf) }}" target="_blank">{{ trans("global.download_catalog") }}</a></li>
                </ul>
            </div>
        </div>
    </div>
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

    $(function () {
        if ( $('.odemeSecenekleri').length != 0 ) {
            /* 197 */ 			jQuery(".odemeSecenekleri").click(function () {
                /* 198 */ 				jQuery(".odemeSecenekleriContent").slideToggle(500);
                /* 199 */ 			});
            /* 200 */ 		}
    });

</script>
@endpush
