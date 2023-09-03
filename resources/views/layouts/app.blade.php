<!DOCTYPE html>
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link id="page_favicon" href="/favicon.ico" rel="icon" type="image/x-icon" />
    <link rel="apple-touch-icon" href="/favicon-app.png">

    @stack('head')

    <title>{{ trans("global.siteName") }} - @yield("title")</title>

    <link rel="stylesheet" href="{{ url('quickadmin/css') }}/font-awesome.min.css"/>
    <link rel="stylesheet" href="{{ url('quickadmin/css') }}/bootstrap.min.css"/>
    <link rel="stylesheet" href="{{ url('quickadmin/css') }}/bootstrap-rtl.min.css"/>

    <link href="{{ asset("plugins/select2/select2.min.css") }}" rel="stylesheet" />

    <link rel="stylesheet" href="{{ asset("templates/default/css/style.css") }}"/>
    <link rel="stylesheet" href="{{ asset("plugins/jquery-labelauty/jquery-labelauty.css") }}"/>


    <!-- Add fancyBox -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3252406140772556" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset("plugins/fancybox/source/jquery.fancybox.css?v=2.1.5") }}" type="text/css" media="screen" />
    @stack('css')
    <style>

        .fa-btn {
            margin-right: 6px;
        }
    </style>
</head>
<body id="app-layout">



    <div id="contents">
        @yield('content')
        <div class="clearfix"></div>
    </div>

    @include("partials/footer")

    <div  id="go-to-top">
        <i class="fa fa-arrow-up"></i>
    </div>

    <!-- JavaScripts -->
    <script src="{{ url('quickadmin/js') }}/jquery-3.1.1.min.js"></script>
    <script src="{{ url('quickadmin/js') }}/bootstrap.min.js"></script>
    <script src="{{ asset("plugins/jquery-labelauty/jquery-labelauty.js") }}"></script>

    <script src="{{ asset("plugins/select2/select2.min.js") }}"></script>

    <script src="{{ asset("plugins/number/jquery.number.min.js") }}"></script>

    <!-- Add fancyBox -->
    <script type="text/javascript" src="{{ asset("plugins/fancybox/source/jquery.fancybox.pack.js?v=2.1.5") }}"></script>

    <script>


        $(document).ready(function(){


            $('[data-toggle="tooltip"]').tooltip();

            $('.select2').select2({
                dir: "rtl",
                placeholder: '{{ Lang::get("global.Select_an_option") }}'
            });

            $(".fancybox").fancybox();


            /** footer show hide **/
            var footerFix = $('#footer-fix');

            if($(window).scrollTop() > 0){
                footerFix.show(0);
            }else{
                footerFix.hide(0);
            }

            $(window).scroll(function () {
                if($(this).scrollTop() > 0){
                    footerFix.show(0);
                }else{
                    footerFix.hide(0);
                }
                //if()
            });
        });

        /*** SMOOTH SCROLL ***/

        $(function() {
            var offset = 0;
            if($("#collection-header").length != 0) offset = 104;

            if ( $('.jumper').length != 0 ) {
                $('.jumper').on("click", function( e ) {
                    e.preventDefault();
                    $("body, html").animate({
                        scrollTop: ($( $(this).attr('href') ).offset().top - offset)
                    }, 600);
                });
            }else {
                $('a[href*="#"]:not([href="#"])').click(function () {

                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html, body').animate({
                                scrollTop: (target.offset().top - offset)
                            }, 700);
                            return false;
                        }
                    }
                });
            }

            if ( $('.paylas').length != 0 ) {
                $(".paylas").click(function () {
                    $(".paylasContent").slideToggle(500);
                });
            }

        });

        $(document).on("click",".tel",function () {
            window.open('tel:02125932');
        });
        $(window).scroll(function (event) {
            if($(window).scrollTop() > 5){
                $('#go-to-top').fadeIn(500);
            }else{
                $('#go-to-top').fadeOut(300);
            }

        });
        $('#go-to-top').each(function(){
            $(this).click(function(){
                $('html,body').animate({ scrollTop: 0 }, 'slow');
                return false;
            });
        });

    </script>

    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}
    @stack('js')

    <a id="analytics" title="Real Time Analytics" href="http://clicky.com/101067389"><img alt="Real Time Analytics" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
    <script src="//static.getclicky.com/js" type="text/javascript"></script>
    <script type="text/javascript">try{ clicky.init(101067389); }catch(e){}</script>
    <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101067389ns.gif" /></p></noscript>
    <?php /*<!— PersianStat —>
    <!— URL: http://www.yatash.ir —>
    <script language='javascript' type='text/javascript' src='http://www.persianstat.com/service/stat.js'></script>
    <script language='javascript' type='text/javascript'>
        persianstat(10309666, 0);
    </script>
    <!— /PersianStat —>*/ ?>
</body>
</html>
