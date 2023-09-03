<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>
        {{ trans('global.admin') }}
    </title>

    <meta http-equiv="X-UA-Compatible"
          content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0"
          name="viewport"/>
    <meta http-equiv="Content-type"
          content="text/html; charset=utf-8">


    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/font-awesome.min.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/bootstrap.min.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/bootstrap-rtl.min.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/components.css"/>
<!--<link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/quickadmin-layout.css"/>-->
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/quickadmin-layout-rtl.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/quickadmin-theme-default.css"/>

    @stack('css')

</head>

<body class="page-header-fixed">

<div class="clearfix"></div>
<div class="page-container">


    @include('admin.partials.sidebar')
    <div class="page-content-wrapper">
        <div class="page-content">



            <h3 class="page-title">
                <?php
                    $menu = \Laraveldaily\Quickadmin\Models\Menu::where("name",str_replace('Controller','',explode("@",class_basename(app('request')->route()->getAction()['controller']))[0]))->first();
                    if($menu){
                        echo $menu->title;
                    }else{
                        echo trans("global.".strtolower(str_replace('Controller','',explode("@",class_basename(app('request')->route()->getAction()['controller']))[0])));
                    }
                ?>
            </h3>

            <div class="row">
                <div class="col-md-12">
                    @include('flash::message')
                    @if (Session::has('message'))
                        <div class="note note-info">
                            <p>{{ Session::get('message') }}</p>
                        </div>
                    @endif

                    @yield('content')

                </div>
            </div>

        </div>
    </div>
</div>

<div class="scroll-to-top"
     style="display: none;">
    <i class="fa fa-arrow-up"></i>
</div>
@include('admin.partials.javascripts')

@yield('javascript')
@stack('js')
@include('admin.partials.footer')


