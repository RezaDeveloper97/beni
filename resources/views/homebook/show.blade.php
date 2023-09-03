@extends('layouts.app')

@section("title",trans("global.homebook"))
@section('content')

    @include("partials/menu",["current"=>"homebook"])

    <section id="content" style="direction: ltr;">
        <!--
        <section class="introHomeBookOverlay">

            <p>
              Her biri alanlarında yaratıcı işlere imza atmış tasarım vizyonu yüksek sekiz kişi, ENZA HOME tasarımlarıyla ulaşılabilir, stil sahibi mekanlar tasarlamak ve dekorasyon önerilerini paylaşmak için bir araya geldiler.
            </p>


        </section> -->


        <!-- INTRO SECTION-->
        <div class="mobilhidehb container">
            <div class="tasarım-title">
                <h4 class="sse">STİL SAHİBİ EVLERİN DEKORASYON REHBERİ</h4>
                <h2 class="ee209">ENZA HOME BOOK 2019</h2>
                <h4 style="    font-size: 13px;    margin-bottom: 19px;    font-weight: 900;">Tasarımlarıyla fark yaratan 2019 koleksiyonu ve stil sahibi 12 başarılı ismin dekorasyon önerileri Enza Home Book'ta.</h4>
            </div>
            <section class="wrapperIntro" id="introScene" style="clear:both;">



            </section>


            <div class="tasarım">
                <div class="tasarımcı-1" style="    position: relative;">
                    <img class="leftarr" src="{{ asset("templates/default/img/homebookleftta.png") }}">
                    <a href="{{ route('homebook.showIntro',['intor'=>1]) }}">
                        <img src="{{ asset("templates/default/img/marco-laura.jpg") }}" class="img-responsive">
                    </a>
                </div>
                <div class="tasarımcı-3">
                    <a href="{{ route('homebook.showIntro',['intor'=>2]) }}">
                        <img src="{{ asset("templates/default/img/yalintan.jpg") }}" class="img-responsive">
                    </a>
                </div>
                <div class="tasarımcı-4">
                    <a href="{{ route('homebook.showIntro',['intor'=>3]) }}">
                        <img src="{{ asset("templates/default/img/levent-atilla.jpg") }}" class="img-responsive">
                    </a>
                </div>
                <div class="tasarımcı-5" style="    position: relative;">
                    <img class="rightarr" src="{{ asset("templates/default/img/homebookrighta.png") }}">
                    <a href="{{ route('homebook.showIntro',['intor'=>4]) }}">
                        <img src="{{ asset("templates/default/img/burcinmercan.jpg") }}" class="img-responsive">
                    </a>
                </div>
            </div>
            <div class="tasarım">
                <div class="tasarımcı-1">
                    <a href="{{ route('homebook.showIntro',['intor'=>5]) }}">
                        <img src="{{ asset("templates/default/img/tuna.jpg") }}" class="img-responsive">
                    </a>
                </div>
                <div class="tasarımcı-2">
                    <a href="{{ route('homebook.showIntro',['intor'=>6]) }}">
                        <img src="{{ asset("templates/default/img/mertkeramkutay.jpg") }}" class="img-responsive">
                    </a>
                </div>

                <div class="tasarımcı-6">
                    <a href="{{ route('homebook.showIntro',['intor'=>7]) }}">
                        <img src="{{ asset("templates/default/img/ilkayduygu.jpg") }}" class="img-responsive">
                    </a>
                </div>
            </div>
        </div>

        <!-- INTRO SECTION -->
        <figure class="logoBookMain" style="">
            <img src="{{ asset("templates/default/img/homebook_logo_syh-2.png") }}" class="img-responsive">
        </figure>
        <section class="moHolder hidden-md hidden-lg hidden-sm">
            <!-- MOBILE CONTAINER START HERE  ///////////////////////////////////////  -->
            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b1">
                <a href="/ebook/marco-laura" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/marco-laura" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/marco.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/marco-laura" class="fw">
                            <h4>MARCO PAOLELLI</h4>
                            <p>Tasarımcılığın yanı sıra endüstriyel ürünler için stratejik danışmanlık yapan...</p>
                        </a><a href="/ebook/marco-laura" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->

            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b2">
                <a href="/ebook/marco-laura" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/marco-laura" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/laura.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/marco-laura" class="fw">
                            <h4>LAURA DELFINA SARI</h4>
                            <p>Laura Delfina Sari, otel, restoran, perakende mağaza ve özel evler için iç tasarım ve stil odaklı çalışan...</p>
                        </a><a href="/ebook/marco-laura" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->


            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b1">
                <a href="/ebook/burcin-ozgul" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/burcin-ozgul" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/burcin.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/burcin-ozgul" class="fw">
                            <h4>BURÇİN MERCAN ÖZGÜL</h4>
                            <p>1989 yılında İstanbul’da doğdu. 2011 yılında burslu okuduğu Doğuş Üniversitesi Sanat ve Tasarım Fakültesi İç Mimarlık bölümünden mezun oldu...</p>
                        </a><a href="/ebook/burcin-ozgul" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->

            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b2">
                <a href="/ebook/erbil-tunaboylu" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/erbil-tunaboylu" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/erbil.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/erbil-tunaboylu" class="fw">
                            <h4>ERBİL TUNABOYLU</h4>
                            <p>Erbil Tunaboylu, 1985’te İstanbul’da doğdu. Yeditepe Üniversitesi, Güzel Sanatlar Fakültesi, Endüstri Ürünleri Tasarımı Bölümü’nden mezun oldu...</p>
                        </a><a href="/ebook/erbil-tunaboylu" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->

            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b1">
                <a href="/ebook/levent-atilla" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/levent-atilla" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/levent.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/levent-atilla" class="fw">
                            <h4>LEVENT ÇIRPICI </h4>
                            <p>1989’da Mimar Sinan Üniversitesi Mimarlık Fakültesi’nden mezun oldu. 1994 yılında ortağı iç mimar Atilla Kuzu ile...</p>
                        </a><a href="/ebook/levent-atilla" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->
            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b2">
                <a href="/ebook/levent-atilla" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/levent-atilla" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/atilla.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/levent-atilla" class="fw">
                            <h4>ATİLLA KUZU</h4>
                            <p>Marmara Üniversitesi Endüstri Ürünleri Tasarımı Bölümü, İç Mimarlık Anasanat Dalı’ndan 1987’de mezun oldu. 1994 yılında ortağı mimar Levent Çırpıcı ile...</p>
                        </a><a href="/ebook/levent-atilla" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->
            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b1">
                <a href="/ebook/ilkay-duygu" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/ilkay-duygu" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/ilkay.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/ilkay-duygu" class="fw">
                            <h4>İLKAY ALA</h4>
                            <p>2002 senesinde Dokuz Eylül Üniversitesi Mimarlık Fakültesi Mimarlık Bölümünden mezun olan İlkay Ala, 2008 senesinde Bilgi Üniversitesi...</p>
                        </a><a href="/ebook/ilkay-duygu" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->
            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b2">
                <a href="/ebook/ilkay-duygu" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/ilkay-duygu" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/duygu.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/ilkay-duygu" class="fw">
                            <h4>DUYGU KARAKAŞ</h4>
                            <p>Üsküdar Amerikan Lisesi’nden mezun olduktan sonra Boğaziçi Üniversitesi Uluslararası Ticaret bölümünü bitiren Duygu Karakaş, altı sene boyunca...</p>
                        </a><a href="/ebook/ilkay-duygu" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->
            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b2">
                <a href="/ebook/mert-kerem-kutay" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/mert-kerem-kutay" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/kerem.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/mert-kerem-kutay" class="fw">
                            <h4>KEREM ÖZERLER</h4>
                            <p>İzmir Ekonomi Üniversitesi İç Mimarlık ve Çevre Tasarımı bölümünden mezun olan Özerler, kariyerine İstanbul‘da başlamıştır...</p>
                        </a><a href="/ebook/mert-kerem-kutay" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->
            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b1">
                <a href="/ebook/mert-kerem-kutay" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/mert-kerem-kutay" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/kutay.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/mert-kerem-kutay" class="fw">
                            <h4>KUTAY YORULMAZ</h4>
                            <p>Bilkent Üniversitesi İç Mimarlık ve Çevre Tasarımı bölümünden mezun olan Yorulmaz, kariyerine İstanbul‘da başlamıştır...</p>
                        </a><a href="/ebook/mert-kerem-kutay" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->
            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b1">
                <a href="/ebook/mert-kerem-kutay" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/mert-kerem-kutay" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/mert.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/mert-kerem-kutay" class="fw">
                            <h4>MERT CAN UZYILDIRIM</h4>
                            <p>İzmir Ekonomi Üniversitesi İç Mimarlık ve Çevre Tasarımı Bölümü’nden mezun olan Uzyıldırım, kariyerine İstanbul ‘da başlamıştır...</p>
                        </a><a href="/ebook/mert-kerem-kutay" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->
            <!-- DESIGNER ITEM -->
            <section class="row mobileContainer hidden-md hidden-lg hidden-sm b2">
                <a href="/ebook/yalin-tan" class="fw">
                </a><div class="row mDesignerBox"><a href="/ebook/yalin-tan" class="fw">
                        <div class="col-xs-4 mDesignerImg">
                            <img style="border-radius: 59px;border:2px solid #3c90c5;" src="{{ asset("templates/default/img/yalin.jpg") }}" class="img-responsive">
                        </div>
                    </a><div class="col-xs-8 mDesignerShort"><a href="/ebook/yalin-tan" class="fw">
                            <h4>YALIN TAN</h4>
                            <p>Yalın Tan 1969 yılında İzmir’ de doğmuş, eğitimine İstanbul‘da devam etmiştir. 1992 yılında Bilkent Üniversitesi İç Mimarlık ve Çevre Tasarımı bölümünden...</p>
                        </a><a href="/ebook/yalin-tan" class="mFbutton">İNCELE</a>
                    </div>
                </div>

            </section>
            <!-- DESIGNER ITEM -->



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

        </section>

        <!-- MOBILE CONTAINER OVER HERE  ///////////////////////////////////////  -->



        <section class="socialWidget">
            <ul>
                <li><a href="https://www.facebook.com/EnzaHome/?fref=ts" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/Enza_Home" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="https://www.instagram.com/enzahome/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCF6yX6t3ehGxtonRpva72gw" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
            </ul>
        </section>




        <section class="container">
            <div class="enzahomeBook">
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


                    <div class="inspect">

                        <div><img src="{{ asset("templates/default/img/inspectIcon.png") }}"></div>
                        <p><a href="https://www.enzahome.com.tr/2019ebook/" target="_blank">İNCELE</a></p>
                    </div>
                </div>
            </div>
            <figure class="appContainer">
                <ul>


                    <li><a class="adreseIsteButtonInside" id="inline" href="#data">ENZA HOME BOOK HAKKINDA</a></li>
                    <li><a href="https://www.instagram.com/enzahome_iran/" target="_blank"><img style="margin-top: 6px" src="{{ asset("templates/default/img/homebook_instagram.png") }}"></a></li>
                    <li><a href="https://www.instagram.com/yatash_iran/" target="_blank"><img style="margin-top: 6px" src="{{ asset("templates/default/img/homebook_instagram.png") }}"></a></li>
                    <li><a href="https://apps.apple.com/tr/app/enza-home-book/id1102181907?l=tr" target="_blank"><img style="margin-top: 6px" src="{{ asset("templates/default/img/appstore.png") }}"></a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.yatas.enzabook" target="_blank"><img style="margin-top: 6px" src="{{ asset("templates/default/img/googleplay.png") }}"></a></li>
                </ul>
            </figure>
        </section>
    </section>
    <div class="overlayView" style="display: none;">
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
        .sloganTitle{font-size: 45px;color: #debc55;margin-top: 10px;margin-bottom: 10px;font-weight: bold;}


        html, body {
            background-color: #ffffff!important;
        }

        #background {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 414px;
            background-color: #e9e8e8;
            z-index: 0;
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

@endpush
