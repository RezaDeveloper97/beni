@extends('layouts.app')
@section("title",trans("global.order_submited_successfully"))
@section('content')
    <div class="container submit-order">
        <div class="row">


            <?php /*@include("orders/steps",["step"=>"submit"]) */ ?>

            <div class="clearfix"></div>
            <h2>{{ trans("global.order_submited_successfully") }}</h2>
            <hr>
            <div class="col-md-12">
                {!! \App\Kamiyar\KamiyarFunctions::showSetting("order_thanks_submit") !!}
            </div>
        </div>
    </div>

@endsection

@push('js')
<script>
    $("#submit_order_set_options").on("submit",function () {
       if(!$("input#confirm").is(':checked')){
           alert("{{\App\Kamiyar\KamiyarFunctions::showSetting("confirm_order_review_checkbox_alert",false)}}");
            return false;
       }
    });
</script>

@endpush