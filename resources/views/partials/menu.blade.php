<nav class="navbar navbar-default navbar-fixed-top">
    <div class="navbar-header" id="nav2">

        <!-- Collapsed Hamburger -->
        <button type="button" class="toggleMenu navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
            <span class="sr-only">Toggle Navigation</span>
        </button>

        <!-- Branding Image -->
        <div id="lang" class="fright">

            <span class="langAct">FA</span>

            <div class="langOther" style="display: none;">
                <a href="https://www.enzahome.com.tr/locale/en_US">EN</a>
                <a href="https://www.enzahome.com.tr/locale/tr_TR">TR</a>
            </div>
        </div>
    </div>
    <div class="collapse navbar-collapse" id="nav">
        <!-- Main Menu -->
        <ul class="nav navbar-nav">
                <li><a href="{{ url('/') }}" target="_self"  class="@if($current == "home") current @endif">{{ trans("global.main_page") }}</a></li>
                <li>
                    <a class="@if($current == "products") current @endif" href="javascript:;" id="products-mega-menu" target="_self">{{ trans("global.products") }}</a>
                    <div id="subMenuContainer" style="display: none;">

                        @if(request()->get('mainMenu'))
                        <ul>
                            @foreach(request()->get('mainMenu') as $item)
                            <li>
                                <a href="{{ route("category.show",$item['en_name']) }}" class="catLink">{{ $item['title'] }}</a>
                            </li>
                            @endforeach
                        </ul>
                        @endif
                        <div id="searchBox">
                            <form method="GET" action="{{ route("search.show") }}">
                                <h3>جستجوی رویای تان</h3>
                                <input id="txtArama" type="submit" value="ara" class="btnAra fright">
                                <input id="txtArama" name="keyword" type="text" placeholder="آنچه به دنبالش هستید!" class="txtAra fright">
                                <div class="clearfix"></div>
                                <strong>مثال:</strong>
                                <span>سرویس مبل پذیرایی</span>
                            </form>
                        </div>

                    </div>
                </li>

                <!-- home_book -->
                <!--<li><a href="https://www.enzahome.com.tr/ebook" target="_blank"  >{{ trans("global.home_book") }}</a></li>-->
             <li><a target="_blank"  href="https://yatash.ir/pdf/enzahomebook.pdf"  class="">هوم بوک</a></li>

            <li class="nav-item dropdown">
                <a  style="color: red;" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    کاتالوگ جشنواره
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                    <a class="dropdown-item" href="https://yatash.ir/pdf/bedding-ok.pdf" target="_blank">کاتالوگ Bedding </a>
                    <a class="dropdown-item" href="https://yatash.ir/pdf/enza_catalog.pdf"  target="_blank">کاتالوگ Enza</a>
                </div>
            </li>

                <!-- opportunities -->
                @php($firstOppertunity = \App\Opportunities::orderBy('updated_at')->first())
                @if(!empty($firstOppertunity))
                <li><a href="{{ route('opportunities.show',$firstOppertunity->en_name) }}" target="_self"  class="@if($current == "opportunities") current @endif">{{ trans("global.opportunities") }}</a></li>
                @endif

                <!-- news -->
                @php($firstNews = \App\News::where("state","active")->orderBy("ordering","DESC")->first())
                @if(!empty($firstNews))
                <li><a href="{{ route('news.show',$firstNews->en_name) }}" target="_self"  class="@if($current == "news") current @endif">{{ trans("global.news") }}</a></li>
                @endif

                <!-- shopping center -->
                <li><a href="{{ route('shopping_center.show') }}" target="_self"  class="@if($current == "shopping_center") current @endif">{{ trans("global.shopping_center") }}</a></li>

                <!-- employment form -->
                <li><a href="{{ route('employment.show') }}" target="_self"  class="@if($current == "employment-form") current @endif">دعوت به همکاری</a></li>

                <!-- about us -->
                @php($firstMenu = \App\AboutUsMenus::orderBy('updated_at')->first())
                @if(!empty($firstMenu))
                <li><a href="{{ route('abs.menu.show',$firstMenu->en_name) }}" target="_self"  class="@if($current == "abs") current @endif">{{ trans("global.about_us") }}</a></li>
                @endif
            </ul>
        <!-- change Lang -->
        <div id="lang" class="fright">

            <span class="langAct">FA</span>

            <div class="langOther" style="display: none;">
                <a href="https://www.enzahome.com.tr/locale/en_US">EN</a>
                <a href="https://www.enzahome.com.tr/locale/tr_TR">TR</a>
            </div>
        </div>

    </div>

</nav>

@push("js")
<script>

    $(document).ready(function() {
        if ($('#lang').length != 0) {
            jQuery("#lang .langAct").click(function () {
                jQuery(".langOther").slideToggle(500);
            });
        }
    });

    var productMenuContainer = $("#subMenuContainer");
    var openProductsMenu = false;
    $("#products-mega-menu").on('click',function () {
        if(!openProductsMenu)
            productMenuContainer.fadeIn(0).css({"padding-top": "20px", "min-height": '320px'});
        else
            productMenuContainer.css({"padding-top": "0px", "min-height": '300px'}).delay(500).fadeOut(0);

        openProductsMenu = !openProductsMenu;
    });

    productMenuContainer.on('mouseleave',function () {
        $(this).css({"padding-top":"0px","min-height":'300px'}).delay(500).fadeOut(0);
    });

    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
    });

    var screenWidth = $(window).width();
    var screenHeight = $(window).height();

    $(".toggleMenu").click(function() {
        $(".toggleMenu").toggleClass("opened", "");
        $("#nav .nav").height(screenHeight);
        $("#nav").toggleClass("show", "").slideToggle(500);

        $("#subMenuContainer > ul > li > a").addClass("item-link");


        $("#subMenuContainer > ul > li > a.item-link").each(function() {
            $(this).bind("click", function() {
                $("#nav > ul > li").hide(), $("#nav > ul > li.collection-item").show(), $("#subMenuContainer > ul > li").hide(), $(this).parent().toggleClass("activeItem"), $(".back-btn").remove(), $(this).parent().css("height", $(window).height() - 40), $(this).parent().show(), $(this).parent().prepend('<a class="back-btn" href="javascript:;">ANA MENÜ</a>'), $(this).parent().find(".products").show(500), $(".back-btn").bind("click", function() {
                    return $(this).remove(), $(".activeItem").css("height", "auto"), $(".activeItem").removeClass("activeItem"), $(".products").hide(), $("#nav > ul > li").show(), $("#subMenuContainer > ul > li").show(), !1
                }), $(window).resize(function() {
                    $(".activeItem").height($(window).height() - 40)
                }), $(window).trigger("resize")
            })
        })
    });
</script>
@endpush