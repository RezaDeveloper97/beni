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
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/smoothness-jquery-ui.css">
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/jquery.dataTables.min.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/dataTables.bootstrap.min.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/jquery-ui-timepicker-addon.min.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/bootstrap-datepicker.standalone.min.css"/>

    <link href="{{ asset("plugins/select2/select2.min.css") }}" rel="stylesheet" />

    <link href="{{ asset("plugins/colorpicker/css/bootstrap-colorpicker.css") }}" rel="stylesheet" />

    <link href="{{ asset('plugins/colorbox/colorbox.css') }}" rel="stylesheet">
    @stack('css')

</head>

<body class="page-header-fixed">