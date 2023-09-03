@extends('layouts.app')

@section("title",trans("global.homebook"))
@section('content')

    @include("partials/menu",["current"=>"homebook"])
    <section class="row" style="    direction: ltr;">


        <div class="designerShort infoIntermediate" style="    direction: ltr;">
            <h1 class="dname" style="opacity: 1;">{!! $data->title !!}</h1>
            <figure class="dtitle" style="opacity: 1;">
                <h5 class="sloganTitle">{!! $data->subtitle !!}</h5>
            </figure>
            <p class="dabout" style="opacity: 1;">{!! $data->content !!}
            </p>
            <div style="opacity: 1;margin-top: 20px;">
                <a class="fa-2x" href="{{ route("homebook.showByName",["name"=>$data->e_name]) }}">İNCELE</a>
            </div>
        </div>
    </section>
    <div class="designerPortraits">
        <figure class="designerCanvas t1" style="margin-right: 0px; opacity: 1; direction: ltr;">
            <img src="{{asset($data->image)}}" class="">
        </figure>

    </div>
    <figure class="logoBookMain" style="">
        <img src="{{ asset("templates/default/img/homebook_logo_byz-2.png") }}" class="img-responsive">
    </figure>
    <section class="row mobileContainer hidden-md hidden-lg hidden-sm appPin">
        <div class="container">
            <div class="col-xs-6">
                <a href="https://itunes.apple.com/us/app/enza-home-book/id1102181907?mt=8" target="_blank"><img src="{{ asset("templates/default/img/appstore.png") }}"></a>
            </div>
            <div class="col-xs-6">
                <a href="https://play.google.com/store/apps/details?id=com.app.enzahome_book&amp;hl=tr" target="_blank"><img src="{{ asset("templates/default/img/googleplay.png") }}"></a>
            </div>
        </div>
    </section>
    <section class="socialWidget">
        <ul>
            <li><a href="https://www.facebook.com/EnzaHome/?fref=ts" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="https://twitter.com/Enza_Home" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/enzahome/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCF6yX6t3ehGxtonRpva72gw" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
        </ul>
    </section>
    <section class="container">
        <div class="enzahomeBook1">
            <figure>
                <img style="height: 120px" src="{{ asset("templates/default/img/enzahomebook2019.png") }}" class="img-responsive">
            </figure>
            <div class="down">
                <p><strong>ENZA HOME BOOK</strong> <br>DEKORASYON REHBERİ</p>
            </div>
            <div class="buttons">
                <div class="download">
                    <div><img src="{{ asset("templates/default/img/downloadIcon.png") }}"></div>
                    <p><a href="https://www.enzahome.com.tr/ebook/katalog/Enza-HomeBook-Katalog-2019.pdf">İNDİR</a></p>
                </div>

            </div>
        </div>
        <figure class="appContainer">
            <ul>


                <li><a class="adreseIsteButtonInside" id="inline" href="#data">ENZA HOME BOOK HAKKINDA</a></li>
                <li><a href="https://www.instagram.com/enzahome_iran/" target="_blank"><img style="margin-top: 6px" src="{{ asset("templates/default/img/homebook_instagram.png") }}"></a></li>
                <li><a href="https://www.instagram.com/yatash_iran/" target="_blank"><img style="margin-top: 6px" src="{{ asset("templates/default/img/homebook_instagram.png") }}"></a></li>
            </ul>
        </figure>
    </section>
    <section class="moFooter hidden-md hidden-lg hidden-sm">
        <div class="row">
            <!--<div class="col-xs-12 mFButtons mf1">
                  <a href="/ebook/rehber">ENZA HOME BOOK DEKORASYON REHBERİ</a>
            </div>-->
            <div class="col-xs-12 mFButtons mf2" style="display: none">
                <a href="/ebook/form" i="">ÜCRETSİZ ADRESE İSTE</a>
            </div>
            <div class="col-xs-12 mFButtons mf3">
                <a href="/ebook/home-book-hakkinda">ENZA HOME BOOK HAKkINDA</a>
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
    <div class="overlayView" dir="ltr" style="display: none; direction: ltr">
        <div id="data">
            <section class="container modalView">
                <div class="closeView">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <article>
                    <h1>
                        “Dekorasyon Önerileriyle 12 Başarılı İsim Enza’da”               </h1>
                    <p>
                        Yenilikçi vizyonuyla Enza Home, insan ruhuna hitap eden dekoratif
                        unsurları görselliğinden ödün vermeyen, ulaşılabilir mekanlarla buluşturmak amacıyla Türkiye’de alanında öncü ve fark yaratan işlere imza atmış 12 başarılı ismi Enza Home Book’ta buluşturdu.              </p>
                    <p>Mimar ve tasarımcılarından oluşan, farklı disiplinlerden gelen 12 stil sahibi kişi, Enza Home kullanıcılarına dekorasyona dair kolayca uygulanabilecek yenilikçi fikirler vermek amacıyla Enza Home mobilyalarla kendi vizyonları ışığında stilize mekan tasarladılar. Mekanların tasarım sürecinde; konsept hazırlığından ürün revize taleplerine ve sonrasında fotoğraf çekimine kadar uzanan keyifli bir çalışmanın ardından konuklarımızın yaratıcı zihinlerinden çıkan stilize mekanlar tasarladılar. Yaşam alanlarında ihtiyacımız olan huzurlu, rahat, şık ve yenileyici enerjileri, dekorasyonun ötesinde ilham veren bir yaşam tarzına dönüştüren eşi görülmemiş bu proje ile ortaya çıkan mekanları Enza Home Book’un ilerleyen sayfalarında görebilirsiniz.
                    </p>

                    <p>Yoğun tempolarından zaman ayırarak stil sahibi vizyonlarıyla bu eşsiz projede bizimle birlikte olan tüm konuklarımıza sonsuz teşekkürler.

                    </p>

                    <ul>
                        <li>MARCO PAOLELLI, Tasarımcı, <span> “Eşsiz ve davetkar mekanlar…”  <a href="/ebook/marco-laura"> İncele</a></span></li>
                        <li>LAURA DELFINA SARI, İç Mimar, <span> “Eşsiz ve davetkar mekanlar…” <a href="/ebook/marco-laura" target="_self"> İncele</a>  </span></li>
                        <li>YALIN TAN, İç Mimar, <span> “Doğaya hakim ve şeffaf mekanlar…”    <a href="/ebook/yalin-tan" target="_self"> İncele</a>  </span></li>
                        <li>LEVENT ÇIRPICI,  Mimar, <span> “Geçmiş ve gelecek harmonisi…”   <a href="/ebook/levent-atilla" target="_self"> İncele</a>  </span></li>
                        <li>ATİLLA KUZU, İç Mimar, <span> “Geçmiş ve gelecek harmonisi…”  <a href="/ebook/levent-atilla" target="_self"> İncele</a>  </span></li>
                        <li>BURÇİN MERCAN ÖZGÜL, İç Mimar, <span> “Elektik &amp; huzurlu…”  <a href="/ebook/burcin-ozgul" target="_self"> İncele</a>  </span></li>
                        <li>ERBİL TUNABOYLU, Tasarımcı, <span> “Doğal denge…”  <a href="/ebook/erbil-tunaboylu"> İncele</a></span></li>
                        <li>KEREM ÖZERLER , İç Mimar, <span> “Güçlü ve zamansız tasarımlar…” <a href="/ebook/mert-kerem-kutay" target="_self"> İncele</a>  </span></li>
                        <li>KUTAY YORULMAZ, İç Mimar, <span> “Güçlü ve zamansız tasarımlar…”    <a href="/ebook/mert-kerem-kutay" target="_self"> İncele</a>  </span></li>
                        <li>MERT CAN UZYILDIRIM,  İç Mimar, <span> “Güçlü ve zamansız tasarımlar…”   <a href="/ebook/mert-kerem-kutay" target="_self"> İncele</a>  </span></li>
                        <li>İLKAY ALA, Mimar, <span> “Konfor, lüks ve doğa dengesi…”  <a href="/ebook/ilkay-duygu" target="_self"> İncele</a>  </span></li>
                        <li>DUYGU KARAKAŞ, Tasarımcı, <span> “Konfor, lüks ve doğa dengesi…”  <a href="/ebook/ilkay-duygu" target="_self"> İncele</a>  </span></li>
                    </ul>
                </article>
            </section>


        </div>
    </div>
    <div id="background"></div>
@endsection
@push("css")
<link rel="stylesheet" href="{{ asset("templates/default/css/homebook.css") }}" />
<style>

    #footer, #footer-fix, #analytics{
        display: none;
        visibility: hidden;
    }

    .sloganTitle{font-size: 45px;color: #debc55;margin-top: 10px;margin-bottom: 10px;font-weight: bold;}


    html, body {
        background-color: #0f1012!important;
    }

    svg circle.active {
        r: 4;
        fill: #858585;
        stroke: #7f7f7f;
    }

    svg circle.bigCircle.active {
        fill: #0f1012;
        stroke: #646464;
        r: 12;
    }



    #content {
        z-index: 1;
        position: relative;
    }

    .tasarım-title {
        color: #231f20!important;
        margin-top: 66px!important;;
    }

    h4.sse {
        text-decoration: underline;
        font-size: 24px;
    }

    h2.ee209 {
        font-size: 56px;
        margin-top: 0px;
    }

    figure.appContainer>ul>li>a>img {
        height: 27px;
    }

    img.rightarr {
        position: absolute;
        right: -43px;
        top: -75px;
        height: 80px;
    }
    img.leftarr {
        position: absolute;
        left: -43px;
        top: -75px;
        height: 80px;
    }


    .bigCircle:hover {
        fill: #0f1012;
        stroke: #0f1012;
        cursor: default;
    }

    @media only screen and (max-width: 1599px) and (min-width: 1024px){
        .designerCanvas.t1{
            right: -58%!important;
            height: 100%;
            width: 100%;
            top: 9%;
        }
        .bigCircleContainer svg {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-52%);
            overflow: visible;
            zoom: 0.8!important;
        }
        .bigCircleContainer {
            z-index: 100;
            position: fixed;
            top: 0;
            left: 0;
            right: 30%!important;
            bottom: 0;
            margin: auto;
        }
    }
    @media only screen and (max-width: 1920px) and (min-width: 1600px){
        .designerCanvas.t1 {
            right: -63%!important;
        }
        .bigCircleContainer {
            right: 15%!important;
        }
    }
    .fa-2x {
        font-size: 16px;
        color: white;
        font-weight: 600;
        border: 1.2px solid white;
        padding: 7px 50px 7px 50px;
        text-decoration: none;
        letter-spacing: 5px;
    }
    a:hover, a:focus{
        color: #0f1012;
        text-decoration: none;
        background-color: white;
    }

</style>
<style>.appContainer{position: absolute;}
    .infoIntermediate{position: absolute;width: 37%;left: 18%;top: 23%;}
</style>
@endpush

@push("js")
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
    <script type="text/javascript">
        var documentHeight;
        $(window).load(function(){


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

@endpush
