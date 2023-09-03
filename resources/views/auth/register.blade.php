@extends('layouts.app')
@section("title",trans("global.register"))
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            @include("auth/partials/register_form")
        </div>
    </div>
</div>
@endsection
