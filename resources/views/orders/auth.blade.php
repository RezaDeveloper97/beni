@extends('layouts.app')
@section("title",trans("global.register"))
@section('content')
    <div class="container auth">
        <div class="row">

            @include("orders/steps",["step"=>"auth"])

            <div class="col-md-12">
                <h4 class="alert alert-info"> {{ trans("global.order_auth_pls") }}</h4>
            </div>

            <div class="col-md-6 col-sm-6 col-xs-12">
                @include("auth/partials/register_form")
            </div>

            <div class="col-md-6 col-sm-6 col-xs-12" id="shopping_login">
                @include("auth/partials/login_form")
            </div>

        </div>
    </div>

@endsection

@push('js')


@endpush