@extends('layouts.app')
@section("title",trans("global.shopping_cart"))
@section('content')
    <div class="container cart">
        <div class="row">

            @include("orders/steps",["step"=>"cart"])

            <div class="col-md-12">
                <h4> {{ trans("global.shopping_cart") }}</h4>
                <br>
                <p class="alert alert-info">{{ trans("global.shopping_cart_is_empty") }}</p>
            </div>


        </div>
    </div>

@endsection

@push('js')


@endpush