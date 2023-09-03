<?php
Breadcrumbs::register('home', function($breadcrumbs) {
    $breadcrumbs->push(trans("global.main_page"), url("/"));
});

Breadcrumbs::register('category', function($breadcrumbs,$category) {
    $breadcrumbs->parent('home',$breadcrumbs);
    $breadcrumbs->push($category["title"], route('category.show',$category["en_name"]));
});

Breadcrumbs::register('collection', function($breadcrumbs,$category,$collection) {
    $breadcrumbs->parent('category',$category);
    $breadcrumbs->push($category["title"]." ".$collection["title"], route('category.show',$collection["en_name"]));
});

Breadcrumbs::register('opportunities', function($breadcrumbs,$thisOpportunity) {
    $breadcrumbs->parent('home',$breadcrumbs);
    $breadcrumbs->push(trans("global.opportunities"), route('opportunities.show',$thisOpportunity["en_name"]));
    $breadcrumbs->push($thisOpportunity["title"]);
});

Breadcrumbs::register('news', function($breadcrumbs,$thisNews) {
    $breadcrumbs->parent('home',$breadcrumbs);
    $breadcrumbs->push(trans("global.news"), route('news.show',$thisNews["en_name"]));
    $breadcrumbs->push($thisNews["title"]);
});

Breadcrumbs::register('shopping_center', function($breadcrumbs) {
    $breadcrumbs->parent('home',$breadcrumbs);
    $breadcrumbs->push(trans("global.shopping_center"));
});

Breadcrumbs::register('about_us_article', function($breadcrumbs,$menu,$article) {
    $breadcrumbs->parent('home',$breadcrumbs);
    $breadcrumbs->push(trans("global.about_us"), route('abs.menu.show',$menu["en_name"]));
    $breadcrumbs->push($article["title"]);
});