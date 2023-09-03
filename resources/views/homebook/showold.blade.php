@extends('layouts.app')

@section("title",trans("global.homebook"))
@section('content')

    @include("partials/menu",["current"=>"homebook"])


    <div class="ded" id="text">
        <div class="box">
            <a class="close" href="#">X</a>
            <div class="content">
                <p>Adresinize katalog gönderimi tarihi sona ermiştir, size en yakın Enza Home mağazalarından kataloğumuza ulaşabilir veya online olarak web sitemiz üzerinden detaylı olarak inceleyebilirsiniz. İlginize teşekkür ederiz.</p>
            </div>
        </div>
    </div>
    <!-- modal -->
    <!-- The Modal -->

    <div class="overlayView">
        <div id="data">
            <section class="container modalView">
                <div class="closeView">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <article>
                    <h1>
                        “Dekorasyon Önerileriyle 8 Başarılı İsim Enza’da”               </h1>
                    <p>
                        Yenilikçi vizyonuyla Enza Home, insan ruhuna hitap eden bu öncü dekoratif
                        unsurları görselliğinden ödün vermeyen, ulaşılabilir mekanlarla buluşturmak amacıyla Türkiye’de alanında öncü ve fark yaratan işlere imza atmış 8 başarılı ismi Enza Home Book’ta buluşturdu.              </p>
                    <p>Mimar ve tasarımcılarından oluşan, farklı disiplinlerden gelen 8 stil sahibi kişi, Enza Home kullanıcılarına dekorasyona dair kolayca uygulanabilecek yenilikçi fikirler vermek amacıyla Enza Home mobilyalarla kendi vizyonları ışığında stilize mekan tasarladılar. Mekanların tasarım sürecinde; konsept hazırlığından ürün revize taleplerine ve sonrasında fotoğraf çekimine kadar uzanan keyifli bir çalışmanın ardından konuklarımızın yaratıcı zihinlerinden çıkan stilize mekanlar tasarladılar. Yaşam alanlarında ihtiyacımız olan huzurlu, rahat, şık ve yenileyici enerjileri, dekorasyonun ötesinde ilham veren bir yaşam tarzına dönüştüren eşi görülmemiş bu proje ile ortaya çıkan mekanları Enza Home Book’un ilerleyen sayfalarında görebilirsiniz.
                    </p>

                    <p>Yoğun tempolarından zaman ayırarak stil sahibi vizyonlarıyla bu eşsiz projede bizimle birlikte olan tüm konuklarımıza sonsuz teşekkürler.

                    </p>

                    <ul>
                        <li>ESRA ERKUTUN, Mimar, <span> “Düş bahçesi…”  <a href="/ebook/esra-erkutun-ve-filiz-ozdiller"> İncele</a></span></li>
                        <li>FİLİZ ÖZDİLLER, Proje Geliştirme Direktörü, <span> “Düş bahçesi…” <a href="/ebook/esra-erkutun-ve-filiz-ozdiller" target="_self"> İncele</a>  </span></li>
                        <li>ONUR ÖZGÜL, İç Mimar, <span> “Zamansız güzellik…”    <a href="/ebook/onur-ozgul" target="_self"> İncele</a>  </span></li>
                        <li>EMRE EVRENOS İç Mimar, <span> “Kalıpların dışına çıkmak…”   <a href="/ebook/emre-evrenos" target="_self"> İncele</a>  </span></li>
                        <li>MERAL AKÇAY, İç Mimar, <span> “Zıtlıkların kusursuz dengesi…”  <a href="/ebook/meral-akcay" target="_self"> İncele</a>  </span></li>
                        <li>İREM AŞÇIOĞLU, İç Mimar, <span> “Detayların uyumu…”  <a href="/ebook/irem-ascioglu" target="_self"> İncele</a>  </span></li>
                        <li>ERSİN TUNÇAY, Tasarımcı, <span> “Doğaya uyanmak”   <a href="/ebook/ersin-tuncay" target="_self"> İncele</a>  </span></li>
                        <li>GÜNEŞ GÜNER, Yaratıcı Direktör, <span> “Yalın, özgün, ferah ve dengeli…” <a href="/ebook/gunes-guner" target="_self"> İncele</a>  </span></li>
                    </ul>
                </article>
            </section>


        </div>
    </div>
    <!-- modal -->
    <section class="wrapperIntro" id="introScene">
        <section class="container-fluid designerSelect">

            <div class="designerNames">
                <a data-idx="1" href="/ebook/ersin-tuncay" id="" class="a1 animated fadeInUp delay1">{{ $data["ersin-tuncay"]->title }}</a>
                <a data-idx="2" href="/ebook/gunes-guner" id="" class="a2 animated fadeInUp delay2">{{ $data["gunes-guner"]->title }}</a>
                <a data-idx="3" href="/ebook/onur-ozgul" id="" class="a3">{{ $data["onur-ozgul"]->title }}</a>
                <a data-idx="4" href="/ebook/emre-evrenos" id="" class="a4">{{ $data["emre-evrenos"]->title }}</a>
                <a data-idx="5" href="/ebook/irem-ascioglu" id="" class="a5">{{ $data["irem-ascioglu"]->title }}</a>
                <a data-idx="6" href="/ebook/meral-akcay" id="" class="a6">{{ $data["meral-akcay"]->title }}</a>
                <a data-idx="7" href="/ebook/esra-erkutun-ve-filiz-ozdiller" id="" class="a7">{{ $data["esra-erkutun-ve-filiz-ozdiller"]->title }}</a>
                <img src="{{ asset("media/homebook/introDesigners.png")}}" class="img-responsive animated fadeInLeft">
            </div>





        </section>
    </section>
    <figure class="logoBookMain">
        <img src="{{ asset("media/homebook/book.png") }}" class="img-responsive">
    </figure>
    <figure class="appContainer">
        <ul>
            <li><a data-balloon-length="xlarge" data-balloon="Adresinize katalog gönderimi tarihi sona ermiştir, size en yakın Enza Home mağazalarından kataloğumuza ulaşabilir veya online olarak web sitemiz üzerinden detaylı olarak inceleyebilirsiniz. İlginize teşekkür ederiz." data-balloon-pos="up" class="adreseIsteButtonInside" href="">ÜCRETSİZ ADRESE İSTE</a></li>
            <li><a class="adreseIsteButtonInside" id="inline" href="#data">ENZA HOME BOOK HAKKINDA</a></li>
            <li><a href="https://itunes.apple.com/us/app/enza-home-book/id1102181907?mt=8" target="_blank"><img src="{{ asset("media/homebook/appstore.png")}}"></a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.app.enzahome_book&amp;hl=tr" target="_blank"><img src="{{ asset("media/homebook/googleplay.png")}} "></a></li>
        </ul>
    </figure>
    <section class="socialWidget">
        <ul>
            <li><a href="https://www.facebook.com/EnzaHome/?fref=ts" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="https://twitter.com/Enza_Home" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/enzahome/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCF6yX6t3ehGxtonRpva72gw" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
        </ul>
    </section>
    <div class="designerPortraits">
        <figure class="designerCanvas t1 dNone">
            <img src="{{ asset("media/homebook/ersin_tuncay.png")}}" class="">
        </figure>
        <figure class="designerCanvas t2 dNone">
            <img src="{{ asset("media/homebook/gunes_guner.png")}}" class="">
        </figure>
        <figure class="designerCanvas t3 dNone">
            <img src="{{ asset("media/homebook/onur_ozgul.png")}}" class="">
        </figure>
        <figure class="designerCanvas t4 dNone">
            <img src="{{ asset("media/homebook/emre_evrenos.png")}}" class="">
        </figure>
        <figure class="designerCanvas t5 dNone">
            <img src="{{ asset("media/homebook/irem_ascioglu.png")}}" class="">
        </figure>
        <figure class="designerCanvas t6 dNone">
            <img src="{{ asset("media/homebook/meral_akcay.png")}}" class="">
        </figure>
        <figure class="designerCanvas t7 dNone">
            <img src="{{ asset("media/homebook/esra_erkutun_ve_filiz_ozdiller.png")}}" class="">
        </figure>
    </div>
    <section class="row">
        <div class="coe">
            <section class="container scene dNone" id="circleScene">

                <!-- Designer Item -->
                <section id="drawing" class="bigCircleContainer" >
                    <!-- Designer Item -->
                    <div class="designerExcept dNone" data-href="/ebook/ersin-tuncay" style="width: 127.18px;">
                        <div class="designerShort ">
                            <h1 class="dname">{{ $data["ersin-tuncay"]->title }}</h1>
                            <figure class="dtitle">
                                <img src="{{ asset("media/homebook/dogaya_uyanmak.png")}}" class="img/img-responsive">
                            </figure>
                            <p class="dabout">{!!  $data["ersin-tuncay"]->short_desc !!}</p>
                            <div class="arrow bounce">
                                <a class="fa fa-arrow-down fa-2x" href="#"></a>
                            </div>
                        </div>
                    </div>
                    <!-- Designer Item -->

                    <!-- Designer Item -->
                    <div class="designerExcept dNone" data-href="/ebook/gunes-guner" style="width: 127.18px;">
                        <div class="designerShort ">
                            <h1 class="dname">{{ $data["gunes-guner"]->title }}</h1>
                            <figure class="dtitle">
                                <img src="{{ asset("media/homebook/yalin_ozgun_ferah_ve_dengeli.png")}}" class="img/img-responsive">
                            </figure>
                            <p class="dabout">{!! $data["gunes-guner"]->short_desc !!}</p>
                            <div class="arrow bounce">
                                <a class="fa fa-arrow-down fa-2x" href="#"></a>
                            </div>
                        </div>
                    </div>
                    <!-- Designer Item -->

                    <!-- Designer Item -->
                    <div class="designerExcept dNone" data-href="/ebook/onur-ozgul" style="width: 127.18px;">
                        <div class="designerShort ">
                            <h1 class="dname">{{ $data["onur-ozgul"]->title }}</h1>
                            <figure class="dtitle">
                                <img src="{{ asset("media/homebook/zamansiz_guzellik.png")}}" class="img/img-responsive">
                            </figure>
                            <p class="dabout">{!! $data["onur-ozgul"]->short_desc !!}</p>
                            <div class="arrow bounce">
                                <a class="fa fa-arrow-down fa-2x" href="#"></a>
                            </div>
                        </div>
                    </div>
                    <!-- Designer Item -->

                    <!-- Designer Item -->
                    <div class="designerExcept dNone" data-href="/ebook/emre-evrenos" style="width: 127.18px;">
                        <div class="designerShort ">
                            <h1 class="dname">{{ $data["emre-evrenos"]->title }}</h1>
                            <figure class="dtitle">
                                <img src="{{ asset("media/homebook/kaliplarin_disina_cikmak.png")}}" class="img/img-responsive">
                            </figure>
                            <p class="dabout">{!! $data["emre-evrenos"]->short_desc !!}</p>
                            <div class="arrow bounce">
                                <a class="fa fa-arrow-down fa-2x" href="#"></a>
                            </div>
                        </div>
                    </div>
                    <!-- Designer Item -->

                    <!-- Designer Item -->
                    <div class="designerExcept dNone" data-href="/ebook/irem-ascioglu" style="width: 127.18px;">
                        <div class="designerShort ">
                            <h1 class="dname">{{ $data["irem-ascioglu"]->title }}</h1>
                            <figure class="dtitle">
                                <img src="{{ asset("media/homebook/detaylarin_uyumu.png")}}" class="img/img-responsive">
                            </figure>
                            <p class="dabout">{!!  $data["irem-ascioglu"]->short_desc !!}</p>
                            <div class="arrow bounce">
                                <a class="fa fa-arrow-down fa-2x" href="#"></a>
                            </div>
                        </div>
                    </div>
                    <!-- Designer Item -->

                    <!-- Designer Item -->
                    <div class="designerExcept dNone" data-href="/ebook/meral-akcay" style="width: 127.18px;">
                        <div class="designerShort ">
                            <h1 class="dname">{{ $data["meral-akcay"]->title }}</h1>
                            <figure class="dtitle">
                                <img src="{{ asset("media/homebook/zitliklarin_kusursuz_dengesi.png")}}" class="img/img-responsive">
                            </figure>
                            <p class="dabout">{!! $data["meral-akcay"]->short_desc !!}</p>
                            <div class="arrow bounce">
                                <a class="fa fa-arrow-down fa-2x" href="#"></a>
                            </div>
                        </div>
                    </div>
                    <!-- Designer Item -->

                    <!-- Designer Item -->
                    <div class="designerExcept dNone" data-href="/ebook/esra-erkutun-ve-filiz-ozdiller" style="width: 127.18px;">
                        <div class="designerShort ">
                            <h1 class="dname">{{ $data["esra-erkutun-ve-filiz-ozdiller"]->title }}</h1>
                            <figure class="dtitle">
                                <img src="{{ asset("media/homebook/dus_bahcesi.png")}}" class="img/img-responsive">
                            </figure>
                            <p class="dabout">{!!  $data["esra-erkutun-ve-filiz-ozdiller"]->short_desc !!}</p>
                            <div class="arrow bounce">
                                <a class="fa fa-arrow-down fa-2x" href="#"></a>
                            </div>
                        </div>
                    </div>
                    </section>
            </section>
        </div>
    </section>
    <section class="container">
        <div class="enzahomeBook">
            <figure>
                <img src="{{ asset("media/homebook/enzahomeBook.png")}}" class="img-responsive">
            </figure>
            <div class="down">
                <p><strong>ENZA HOME BOOK</strong> <br>DEKORASYON REHBERİ</p>
            </div>
            <div class="buttons">
                <div class="download">
                    <div><img src="{{ asset("media/homebook/downloadIcon.png")}}"></div>
                    <p><a data-balloon-length="medium" data-balloon="Güncel Enza Home Book yakında yayında!" data-balloon-pos="up" href="http://www.yatash.ir/filemanager/connector?_token=dJCYNNYBJFiByhzKEMSVUle61DX9jypHuV4VVT8J&cmd=file&target=fls2_cGRmcy9FTlpBX0hPTUVCT09LXzIwMTgucGRm">İNDİR</a></p>
                </div>
                <div class="inspect">
                    <div><img src="{{ asset("media/homebook/inspectIcon.png")}}"></div>
                    <p><a data-balloon-length="medium" data-balloon="Güncel Enza Home Book yakında yayında!" data-balloon-pos="up" href="http://www.yatash.ir/filemanager/connector?_token=dJCYNNYBJFiByhzKEMSVUle61DX9jypHuV4VVT8J&cmd=file&target=fls2_cGRmcy9FTlpBX0hPTUVCT09LXzIwMTgucGRm">İNCELE</a></p>
                </div>
            </div>
        </div>
    </section>

    <section class="moFooter hidden-md hidden-lg hidden-sm">
        <div class="row">
            <div class="col-xs-12 mFButtons mf1">
                <a href="/ebook/rehber">ENZA HOME BOOK DEKORASYON REHBERİ</a>
            </div>
            <div class="col-xs-12 mFButtons mf2">
                <a href="#text" id="linkmodal">ÜCRETSİZ ADRESE İSTE</a>
            </div>
            <div class="col-xs-12 mFButtons mf3">
                <a href="/ebook/home-book-hakkinda">ENZA HOME BOOK HAKINDA</a>
            </div>
        </div>
        <div class="row mfSS">
            <div class="col-xs-3 mFSocial mS1">
                <a href=""></a><a href="https://www.facebook.com/EnzaHome/?fref=ts" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            </div>
            <div class="col-xs-3 mFSocial mS2">
                <a href="https://twitter.com/Enza_Home" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
            <div class="col-xs-3 mFSocial mS3">
                <a href="https://www.instagram.com/enzahome/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
            <div class="col-xs-3 mFSocial mS4">
                <a href="https://www.youtube.com/channel/UCF6yX6t3ehGxtonRpva72gw" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
            </div>
        </div>
    </section>

    <svg id="SvgjsSvg1001" width="2" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" style="overflow: hidden; top: -100%; left: -100%; position: absolute; opacity: 0;"><defs id="SvgjsDefs1002"></defs><polyline id="SvgjsPolyline1003" points="0,0"></polyline><path id="SvgjsPath1004" d="M0 0 "></path></svg>
@endsection
@push("css")
<link rel="stylesheet" href="{{ asset("templates/default/css/homebook.css") }}" />
@endpush

@push("js")

<script src="{{ asset("templates/default/js/homebook/svg.min.js") }}"></script>

<!--<script src="{{ asset("templates/default/js/homebook/jui.js") }}"></script>-->
<script src="{{ asset("templates/default/js/homebook/jquery.cookie.js") }}"></script>

<script src="{{ asset("templates/default/js/homebook/main.js") }}"></script>
<script src="{{ asset("templates/default/js/homebook/jquery.mousewheel.min.js") }}"></script>


<script type="text/javascript">
    var documentHeight;
    $(window).on("load", function(){


        documentHeight = $('html').height();




        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop()+window.innerHeight;
            documentHeight = $('html').height();
            if(scrollTop > documentHeight - 380 ) {
                $('.moFixfooter').addClass('moHide');
                $('.moFixfooter').removeAttr('style');
            }
            else  {
                $('.moFixfooter').removeClass('moHide');
            }

        });

    });
</script>
<script>
    var base_url = "https://www.enzahome.com.tr";
    var form_url = "/ebook/form";
    var site_webhost = "https://www.enzahome.com.tr";
    var site_locale = "";
    var lang_magaza_tipleri = "Mağaza Tipleri";
    var lang_sehir = "Şehir";
    var lang_ilce = "İlçe";
    var lang_google_mapste_goster = "Google Mapste göster";
    var lang_hadi_enza_homea = "Enza Home Book 2016";

    function shareWindowBook(siteName) {
        var sharedPage = site_webhost;
        var sharedLink = site_webhost;
        var sharedPageLink = $(location).attr('href');
        var sharedName = lang_hadi_enza_homea;
        var sharedImageUrl = site_webhost + '/frontEnd/site/images/enza_fbshare2017.png';
        if (siteName == "facebook") {
            t = 'Enza Home';
            openedWindow = window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(sharedPageLink) + '&t=' + encodeURIComponent(sharedName), 'sharer', 'toolbar=0,status=0,width=500,height=350' + 'v=1');
            setTimeout(openedWindow.location.reload, 3000);
        } else if (siteName == "twitter") {
            window.open('http://twitter.com/?status=Enza%20Home%20Book%202017%20' + encodeURIComponent(sharedPageLink), 'sharer', 'toolbar=1,status=1,width=500,height=350');
        } else if (siteName == "pinterest") {
            window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(sharedPageLink) + '&media=' + encodeURIComponent(sharedImageUrl) + '&description=' + encodeURIComponent(sharedName) + '', 'sharer', 'toolbar=1,status=1,width=400,height=300');
        } else if (siteName == "googleplus") {
            window.open('https://plus.google.com/share?url=' + encodeURIComponent(sharedPageLink), 'sharer', 'toolbar=1,status=1,width=500,height=350');
        }
    }

</script>
<script>
    $(document).ready(function(){
        $("#inline").click(function(e){
            e.preventDefault();

            $('#data').parent().fadeIn();
        });

        $(".closeView").click(function(c){
            $(".overlayView").fadeOut();
        });

    });
</script>

@endpush
