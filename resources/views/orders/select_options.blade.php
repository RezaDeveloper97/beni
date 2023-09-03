@extends('layouts.app')

@section("title",trans("global.select_order_options"))
@section('content')
    <div class="container select_option">
        <div class="row">


            <div class="col-md-12">
                {{ Form::open(array('route' => 'orders.set_options', 'id' => 'submit_order_set_options', 'class' => 'form-horizontal')) }}

                <div class="panel panel-default">
                    <div class="panel-heading">{{ trans("global.order_pls_select_order_type") }}</div>
                    <div class="panel-body">
                        <div class="select_option_inputs">{!! Form::radio('order_type', 'download_file', true,["id"=>"download_file"]) !!}{!! Form::label('download_file', trans("global.you_want_download_file")) !!}</div>
                        <div class="select_option_inputs">{!! Form::radio('order_type', 'print_file', false,["id"=>"print_file"]) !!}{!! Form::label('print_file', trans("global.you_want_print_file")) !!}</div>
                    </div>
                </div>

                <div id="select_order_options">
                    <hr>
                    <h4>{{ trans("global.order_pls_select_options_below") }}: </h4>
                    <br>
                    <?php $first = true; $checkOptions = 0 ?>
                    @foreach($platform_order_params as $key => $order_param)
                        <?php $checkOptions += 1 ?>
                        <div id="option_{{ $order_param["id"] }}" class="panel panel-default option_root">
                            <div class="panel-heading">{{ $order_param["title"] }}</div>
                            <div class="panel-body">
                                @if($order_param["show_type"] == "horizontal")
                                    <div class="row row-centered">
                                    @foreach($order_param["options"] as $option)
                                        <div class="col-md-3 col-sm-4 col-xs-6 horizontal col-centered option_main">
                                            <div class="option_body">
                                                @if($option["show_type"] == "title" || $option["show_type"] == "both")
                                                    <h5>{{ $option["title"] }}</h5>
                                                @endif
                                                @if($option["show_type"] == "description" || $option["show_type"] == "both")
                                                    <div class="option_desc">{!! $option["description"]  !!}</div>
                                                @endif
                                                @if($order_param["show_price"])
                                                    <div class="option_price">{{ number_format($option["price"]) }} {{ trans("global.toman") }}</div>
                                                @endif
                                                    <div class="option_select_radio">
                                                        <input type="radio" name="params[{{ $order_param["id"] }}]" value="{{ $option["id"] }}" class="options_radio" data-labelauty="{{ trans("global.select") }}|{{ trans("global.selected") }}" data-cur-option="option_{{ $order_param["id"] }}" data-next-option="{{ isset($platform_order_params[$key+1]) ? "option_".$platform_order_params[$key+1]["id"] : "" }}" >
                                                    </div>
                                            </div>
                                        </div>
                                    @endforeach
                                    </div>
                                @endif
                                @if($order_param["show_type"] == "vertical")
                                    <div class="row">
                                        @foreach($order_param["options"] as $option)
                                            <div class="col-md-12 col-sm-12 col-xs-12 vertical option_main">
                                                <div class="option_body">

                                                    <div class="option_select_radio">
                                                        <input type="radio" name="params[{{ $order_param["id"] }}]" value="{{ $option["id"] }}" class="options_radio" data-labelauty="{{ trans("global.select") }}|{{ trans("global.selected") }}" data-cur-option="option_{{ $order_param["id"] }}" data-next-option="{{ isset($platform_order_params[$key+1]) ? "option_".$platform_order_params[$key+1]["id"] : "" }}" >
                                                    </div>

                                                    @if($option["show_type"] == "title" || $option["show_type"] == "both")
                                                        <div class="option_title"><h5>{{ $option["title"] }}</h5></div>
                                                    @endif
                                                    @if($option["show_type"] == "description" || $option["show_type"] == "both")
                                                        <div class="option_desc">{!! $option["description"]  !!}</div>
                                                    @endif
                                                    @if($order_param["show_price"])
                                                        <div class="option_price">{{ number_format($option["price"]) }} {{ trans("global.toman") }}</div>
                                                    @endif
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                @endif
                            </div>
                        </div>
                        <?php $first = false; ?>
                    @endforeach
                </div>

                <br>

                <div>
                    <button class="btn btn-success  pull-left"  type="submit" id="next_step"> {{ trans("global.add_to_cart") }}</button>
                    <button class="btn btn-primary"  type="button" id="prev_review"> {{ trans("global.back") }}</button>
                </div>

                <input type="hidden" name="USCU_ID" value="{{ $USCU_ID }}">
                <input type="hidden" name="user_saved_canvas_id" value="{{ $user_saved_canvas_id }}">

                {{ Form::close() }}
                <div style="display: none;">
                    {{ Form::open(array('route' => 'orders.review', 'id' => 'prev_review_form', 'class' => 'form-horizontal', "style" =>"display: inline-block;")) }}

                    <input type="hidden" name="USCU_ID" value="{{ $USCU_ID }}">
                    <button class="btn btn-success" type="submit" id="submit_order"> {{ trans("global.next-step") }} <i class="fa fa-arrow-left"></i></button>

                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>

@endsection

@push('js')
<script>
    // Init
    var nextSubmitOrderBtn = $("#next_step");
    $("document").ready(function () {
        checkOrderType();
        $(".options_radio").labelauty();
    });
    $("#prev_review").on("click",function () {
        $("#prev_review_form").submit();
    });

    $("input[name=order_type]").on("change",function () {
        checkOrderType();
    });

    function checkOrderType() {
        var orderType = $("input[name=order_type]:checked").val();
        if(orderType === "download_file"){
            nextSubmitOrderBtn.removeAttr("readonly").removeAttr("disabled");
            $('#next_step').html("{{ trans("global.add_to_cart") }}").removeClass("btn-danger").addClass("btn-success");

            $("#select_order_options").slideUp(200);
        }else if(orderType === "print_file"){
            nextSubmitOrderBtn.attr("readonly","readonly").attr("disabled","disabled");
            $('#next_step').html("{{ trans("global.pls_fill_all_options") }}").addClass("btn-danger").removeClass("btn-success");
            $("#select_order_options").slideDown(500);
        }
    }

    $("input.options_radio").on("change",function () {
        $(this).closest(".option_root").find(".option_body").removeClass("option_body_selected");
        $(this).closest(".option_main").find(".option_body").addClass("option_body_selected");
        checkRadiosOptionsForSubmitForm()
    });

    var selectedOption = '{{ $checkOptions }}';
    var canSubmitForm = false;
    function checkRadiosOptionsForSubmitForm() {
       if(parseInt(selectedOption) === parseInt($("input.options_radio:checked").length)){
           canSubmitForm = true;
           nextSubmitOrderBtn.removeAttr("readonly").removeAttr("disabled");
           $('#next_step').html("{{ trans("global.add_to_cart") }}").removeClass("btn-danger").addClass("btn-success");
       }
    }

    $("#submit_order_set_options").on("submit",function () {
        if($(".select_option_inputs:checked") === "print_file") {
            if (!canSubmitForm) {
                alert("{{ trans("global.pls_fill_all_options") }}");
            }
        }
    });
</script>

@endpush