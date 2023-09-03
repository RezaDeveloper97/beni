@extends('layouts.app')

@section("title",$cmsarticle->title)
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">{!!  $cmsarticle->content !!}</div>
        </div>
    </div>
@endsection
