@extends('layouts.app')

@section("title",$cmsCategory->title)
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12" id="category-description">{!!  $cmsCategory->description !!}</div>
            @if($cmsCategory->articles->count())
            <div class="col-md-12">
                <h2>{{ trans("global.this_category_articles") }}</h2>
                <ul class="content-category-articles">
                @foreach($cmsCategory->articles as $article)
                    <li><a href="{{ route("article.show",$article->id) }}">{{ $article->title }}</a></li>
                @endforeach
                </ul>
            </div>
            @endif
        </div>
    </div>
@endsection
