<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-Equiv="Cache-Control" Content="no-cache" />
    <meta http-Equiv="Pragma" Content="no-cache" />
    <meta http-Equiv="Expires" Content="0" />
    <title>@yield("title")</title>

    <link rel="stylesheet" href="{{ url('quickadmin/css') }}/font-awesome.min.css"/>
    <link rel="stylesheet" href="{{ url('quickadmin/css') }}/bootstrap.min.css"/>
    <link rel="stylesheet" href="{{ url('quickadmin/css') }}/bootstrap-rtl.min.css"/>

    <link href="{{ asset("plugins/select2/select2.min.css") }}" rel="stylesheet" />

    <link rel="stylesheet" href="{{ asset('plugins/konva/fonts.css') }}"/>

    @stack('css')
</head>
<body id="app-layout">

    @yield('content')

    <!-- JavaScripts -->
    <script src="{{ url('quickadmin/js') }}/jquery-3.1.1.min.js"></script>
    <script src="{{ url('quickadmin/js') }}/bootstrap.min.js"></script>

    <script src="{{ asset("plugins/select2/select2.min.js") }}"></script>
    <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();

            $('.select2').select2({
                dir: "rtl",
                placeholder: '{{ Lang::get("global.Select_an_option") }}',
                width: 'resolve'
            });
        });
    </script>
    @stack('js')
</body>
</html>
