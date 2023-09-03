@extends('layouts.app')
@section("title",trans("global.shopping_cart"))
@section('content')
    <div class="container cart">
        <div class="row">

            @include("orders/steps",["step"=>"cart"])

            <div class="col-md-12">
                <h3 style="display: inline-block;"> {{ trans("global.shopping_cart") }}</h3> <span class="count">| {{ count($cartData) }} {{ trans("global.item") }}</span>
                <br>
                <br>
                <?php $cartTotalPrice = 0 ?>
                @foreach($cartData as $key => $item)
                    <table class="table table-responsive">
                    <tr>
                        <td class="img">
                            <img class="source_bg img-responsive" src="{{ $item["section"]["parent_section"]["source_bg"] }}">
                            <img class="preview img-responsive" src="{{ $item["section"]["preview"] }}">
                            <br>
                            <div style="text-align: center;margin: 15px 0 0;"><a style="color: #337ab7;text-decoration: underline;" href="{{ route("custom_design.show",[$item["design"]["id"],$item["section"]["parent_section"]["color_id"],$item["section"]["design_section_id"]]) }}?USCU_ID={{$key}}">{{ trans("global.edit") }}</a></div>
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
                                       <li class="list-group-item">
                                           {{ Form::open(array('route' => 'orders.select_options', 'id' => 'submit_order_set_options', 'class' => 'form-horizontal', "style" =>"display: inline-block;")) }}

                                           {!! Form::hidden('USCU_ID',$key) !!}
                                           {!! Form::hidden('platform_id',$item["platform"]["id"]) !!}
                                           {!! Form::hidden('user_saved_canvas_id',isset($item["user_saved_canvas_id"]) ? $item["user_saved_canvas_id"] : null) !!}

                                           <button class="edit_params" type="submit" id="submit_order"> {{ trans("global.edit_params") }}</button>

                                           {{ Form::close() }}
                                       </li>
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

            <div class="col-md-12" id="TOTAL_PRICE">
                <table class="table table-responsive">
                    <tr>
                        <td class="img">
                        </td>
                        <td class="infos">
                            <h3 class="pull-right">{{ trans("global.total_price") }}</h3>
                            <h3 class="pull-left">{{ number_format($cartTotalPrice) }} {{ trans("global.toman") }}</h3>
                            <div class="clearfix"></div>
                        </td>
                    </tr>
                </table>

            </div>

            <div class="col-md-12" id="btns">
                @if(Auth::check())
                <a class="btn btn-primary pull-right" href="{{ route("user.my_designs") }}">{{ trans("global.continue_shopping") }}</a>
                @else
                <a class="btn btn-primary pull-right" href="{{ url("/") }}">{{ trans("global.continue_shopping") }}</a>
                @endif

                <a class="btn btn-success pull-left" href="{{ route("orders.auth") }}">{{ trans("global.finally_submit_order") }}</a>

                <div class="clearfix"></div>
            </div>
        </div>
    </div>

@endsection

@push('js')


@endpush