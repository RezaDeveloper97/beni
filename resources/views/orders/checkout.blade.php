@extends('layouts.app')
@section("title",trans("global.checkout_final_order"))
@section('content')
    <div class="container checkout">
        <div class="row">

            @include("orders/steps",["step"=>"checkout"])

            <div class="col-md-12">
                <h3 style="display: inline-block;"> {{ trans("global.checkout_final_order") }}</h3> <span class="count">| {{ count($cartData) }} {{ trans("global.item") }}</span>
                <br>
                <br>
                <?php $cartTotalPrice = 0 ?>
                @foreach($cartData as $key => $item)
                    <table class="table table-responsive checkout">
                    <tr>
                        <td class="img">
                            <img class="source_bg img-responsive" src="{{ $item["section"]["parent_section"]["source_bg"] }}">
                            <img class="preview img-responsive" src="{{ $item["section"]["preview"] }}">
                        </td>
                        <td class="infos">
                            <div class="platform"><h4>{{ $item["platform"]["title"] }}</h4></div>
                            <div class="design">{{ $item["design"]["title"] }}</div>

                            <?php $paramsPrices = 0 ?>
                            @if(!empty($item["design_params"]))
                            <hr>
                            <div class="params">
                                <a data-toggle="collapse" href="#params_{{$key}}">+ {{ trans("global.show") }} {{ trans("global.params") }}</a>
                                <div id="params_{{$key}}" class="collapse">
                                    <ul class="list-group">
                                   @foreach($item["design_params"] as $param)
                                            <?php $paramsPrices += $param["option"]["price"] ?>
                                        <li class="list-group-item">
                                            <span class="pull-right">{{ $param["option"]["title"] }}</span>
                                            <span class="pull-left">{{ number_format($param["option"]["price"]) }} {{ trans("global.toman") }}</span>
                                            <div class="clearfix"></div>
                                        </li>
                                   @endforeach
                                    </ul>
                                </div>
                            </div>
                            @endif
                            <hr>
                            <div class="total_price">
                                <span class="pull-right">{{ trans("global.item_price") }}</span>
                                <?php $cartTotalPrice += ($item["design"]["price"] + $paramsPrices) ?>
                                <span class="pull-left">{{ number_format($item["design"]["price"] + $paramsPrices) }} {{ trans("global.toman") }}</span>
                                <div class="clearfix"></div>
                            </div>
                        </td>
                    </tr>
                    </table>
                    <br>
                @endforeach
            </div>
            {{ Form::open(array('route' => 'orders.submit', 'id' => 'submit_order')) }}

            {{ Form::hidden('address_type',$address["address_type"]) }}
            {{ Form::hidden('address_id',$address["id"]) }}
            <hr>

            <div class="col-md-12" id="address">
                <div class="panel panel-default">
                    <div class="panel-heading" style="padding: 0;">
                        <img src="{{ asset("templates/default/images/address.png") }}" style="display: inline-block;"><h4 style="display: inline-block;">{{ trans("global.step_address") }}</h4>
                    </div>
                    <div class="panel-body">
                        <table class="table table-bordered" style="margin: 0;">
                            <tr>
                                <td colspan="4" style="padding: 10px 15px;">{{ $address["name_transferee"] }}</td>
                            </tr>
                            <tr>
                                <td width="15%">
                                    {{ trans("global.ostan") }}: {{ $address["ostans"]["title"] }}
                                    <hr>
                                    {{ trans("global.city") }}: {{ $address["cities"]["title"] }}
                                </td>
                                <td width="60%">
                                    {{ $address["address"] }}
                                    <br>
                                    {{ trans("global.postal_code") }}: {{ $address["postal_code"] }}
                                </td>
                                <td width="20%">
                                    {{ trans("global.mobile") }}: {{ $address["mobile"] }}
                                    <hr>
                                    {{ trans("global.phone") }}: {{ $address["phone"] }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-md-12" id="SELECT_DELIVERY_METHOD">
                <div class="panel panel-default">
                    <div class="panel-heading" style="padding: 0;">
                        <img src="{{ asset("templates/default/images/delivery.png") }}" style="display: inline-block;"><h4 style="display: inline-block;">{{ trans("global.delivery_way_select") }}</h4>: ({{ trans("global.delivery_way_select_hint") }})
                    </div>
                    <div class="panel-body">
                        <table class="table table-bordered" style="margin: 0;">
                        @foreach($deliveryWays as $deliveryWay)
                            <tr>
                                <td width="10%"><label><input type="radio" name="delivery_way" checked value="{{ $deliveryWay["id"] }}" price="{{ $deliveryWay["price"] }}"> {{ $deliveryWay["title"] }}</label></td>
                                <td>{!!  $deliveryWay["description"]  !!}</td>
                                <td width="10%">{{ number_format($deliveryWay["price"]) }} {{ trans("global.toman") }}</td>
                            </tr>
                        @endforeach
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-md-12" id="SELECT_PEYMANER_METHOD">
                <div class="panel panel-default">
                    <div class="panel-heading" style="padding: 0;">
                        <img src="{{ asset("templates/default/images/payment.png") }}" style="display: inline-block;"><h4 style="display: inline-block;">{{ trans("global.payment_way") }}</h4>
                    </div>
                    <div class="panel-body">
                        <table class="table table-bordered" style="margin: 0;">
                            @foreach($paymentMethods as $paymentMethod)
                                <tr>
                                    <td width="10%"><label><input type="radio" name="payment_method" checked value="{{ $paymentMethod["id"] }}" > {{ $paymentMethod["title"] }}</label></td>
                                    <td>{!!  $paymentMethod["description"]  !!}</td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-md-12" id="TOTAL_PRICE">
                <hr>
                <h3 style="display: inline-block;">{{ trans("global.payable_price") }}: </h3>
                <h3 style="display: inline-block;"><span id="total-price" total-price="{{ $cartTotalPrice }}">{{ number_format($cartTotalPrice) }}</span> {{ trans("global.toman") }}</h3>
                <br><br>
            </div>

            <div class="col-md-12" id="btns">
                <a class="btn btn-primary pull-right" href="{{ route("orders.select_address") }}">{{ trans("global.back") }}</a>


                <button type="submit" class="btn btn-success pull-left">{{ trans("global.submit_order") }}</button>

                <div class="clearfix"></div>
            </div>

            {{ Form::close() }}
        </div>
    </div>

@endsection

@push('js')
<script>

    $(document).ready(function () {
        updateTotalPrice();
    });

    $("input[name=delivery_way]").on("change",function () {
        updateTotalPrice();
    });

    function updateTotalPrice(){
        var dPrice = parseInt($("input[name=delivery_way]:checked").attr("price"));
        var tPrice = parseInt($("#total-price").attr("total-price"));
        var newPrice = tPrice + dPrice;

        $("#total-price").html($.number(newPrice));
    }
</script>

@endpush