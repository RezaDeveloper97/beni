@extends('layouts.app')

@section("title",trans("global.homebook")." - ".$data->name)
@section('content')

    @include("partials/menu",["current"=>"homebook"])

    <div class="overlayView" style="direction: ltr" >
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

    <div class="bs"  style="direction: ltr">
        <section class="row">


            <div class="designerSelectInside">

                <ul>
                    @foreach($bookIntros as $bi)
                    <li @if($data->e_name == $bi->e_name) class="active" @endif>
                        <a class="circleLink" href="{{ route("homebook.showByName",["name"=>$bi->e_name]) }}"></a>
                        <a href="{{ route("homebook.showByName",["name"=>$bi->e_name]) }}" class="circleNav"><span>{{ $bi->title }}</span></a>
                    </li>
                    @endforeach
                </ul>
            </div>
            <div>
                {!! $data->full_content !!}
            </div>
        </section>



        <div class="row moSoShare hidden-md hidden-lg hidden-sm text-center center-block">
            <div>
                <p>PAYLAŞ</p>
                <a class="sshare" href="javascript:shareWindowBook('facebook');"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a class="sshare" href="javascript:shareWindowBook('twitter');"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a class="sshare" href="mailto:?subject=Hadi Enza Home'a&amp;body=Yemek odasından genç odasına, yatak çeşitlerinden, tekstil ve aksesuara kadar birbirinden geniş ürün yelpazesiyle hayatı şekillendiren Enza Home! İncelemek için :https://www.enzahome.com.tr/ebook" id="emailShareLink" title="Arkadaşlarınızla paylaşın"><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>

        <div class="row mooDesignerSelect hidden-md hidden-lg hidden-sm text-center center-block">
            <ul>
                <li @if($data->e_name == "ersin-tuncay") class="active" @endif>
                    <a href="/ebook/ersin-tuncay" @if($data->e_name == "ersin-tuncay") class="mooActive" @endif><span>ERSİN TUNÇAY</span></a></li>
                <li @if($data->e_name == "gunes-guner") class="active" @endif>
                    <a href="/ebook/gunes-guner" @if($data->e_name == "gunes-guner") class="mooActive" @endif><span>GÜNEŞ GÜNER</span></a></li>
                <li @if($data->e_name == "onur-ozgul") class="active" @endif>
                    <a href="/ebook/onur-ozgul" @if($data->e_name == "onur-ozgul") class="mooActive" @endif><span>ONUR ÖZGÜL</span></a></li>
                <li @if($data->e_name == "emre-evrenos") class="active" @endif>
                    <a href="/ebook/emre-evrenos" @if($data->e_name == "emre-evrenos") class="mooActive" @endif><span>EMRE EVRENOS</span></a></li>
                <li @if($data->e_name == "irem-ascioglu") class="active" @endif>
                    <a href="/ebook/irem-ascioglu" @if($data->e_name == "irem-ascioglu") class="mooActive" @endif><span>İREM AŞÇIOĞLU</span></a></li>
                <li @if($data->e_name == "meral-akcay") class="active" @endif>
                    <a href="/ebook/meral-akcay" @if($data->e_name == "meral-akcay") class="mooActive" @endif><span>MERAL AKÇAY</span></a></li>
                <li @if($data->e_name == "esra-erkutun-ve-filiz-ozdiller") class="active" @endif>
                    <a href="/ebook/esra-erkutun-ve-filiz-ozdiller" @if($data->e_name == "esra-erkutun-ve-filiz-ozdiller") class="mooActive" @endif><span>ESRA ERKUTUN & FİLİZ ÖZDİLLER</span></a></li>
            </ul>
        </div>




        <footer class="row stickyfooter fixfooter hidden-xs" id="footer">
            <section class="container fcontainer">
                <div class="col-md-5">
                    <div class="enzahomeBookInside">
                        <figure>
                            <img src="/frontEnd/site/ebook/img/enzahomeBook.png" class="img-responsive" />
                        </figure>
                        <div class="down">
                            <p><strong>ENZA HOME BOOK</strong> <br>DEKORASYON REHBERİ</p>
                        </div>
                        <div class="buttons">
                            <div class="download">
                                <div><img src="/frontEnd/site/ebook/img/downloadIcon.png" /></div>
                                <p><a href="/ebook/katalog/ENZA_HomeBook_Mayis2017.pdf">İNDİR</a></p>
                            </div>
                            <div class="inspect">
                                <div><img src="/frontEnd/site/ebook/img/inspectIcon.png" /></div>
                                <p><a href="/EnzaHome-Book-E-Katalog/" target="_blank">İNCELE</a></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-7 adreseIsteButton">

                    <div class="isteContainer">
                        <!--<a data-balloon-length="xlarge" data-balloon="Adresinize katalog gönderimi tarihi sona ermiştir, size en yakın Enza Home mağazalarından kataloğumuza ulaşabilir veya online olarak web sitemiz üzerinden detaylı olarak inceleyebilirsiniz. İlginize teşekkür ederiz." data-balloon-pos="up" class="iste" href="">ÜCRETSİZ ADRESE İSTE</a>-->
                        <a class="iste" id="inline" href="#data">ENZA HOME BOOK HAKKINDA</a>
                    </div>


                    <div>
                        <a class="sshare" href="javascript:shareWindowBook('facebook');"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a class="sshare" href="javascript:shareWindowBook('twitter');"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a class="sshare" href="mailto:?subject=Hadi Enza Home'a&amp;body=Yemek odasından genç odasına, yatak çeşitlerinden, tekstil ve aksesuara kadar birbirinden geniş ürün yelpazesiyle hayatı şekillendiren Enza Home! İncelemek için :https://www.enzahome.com.tr/ebook" id="emailShareLink" title="Arkadaşlarınızla paylaşın"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                    </div>

                </div>
            </section>
        </footer>




        <section class="socialWidgetInside hidden-xs">
            <ul>
                <li><a href="https://www.facebook.com/EnzaHome/?fref=ts" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/Enza_Home" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="https://www.instagram.com/enzahome/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCF6yX6t3ehGxtonRpva72gw" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
            </ul>
        </section>

    </div>



    <!-- modal -->



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
                <a href="https://www.facebook.com/EnzaHome/?fref=ts" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
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
@endsection
@push("css")
<link rel="stylesheet" href="{{ asset("templates/default/css/homebook.css") }}" />
<style>
    .slideshow{padding-top: 64.5%!important;}
    .brsDuzenle {
        position: absolute;
        padding: 0;
        width: 100%;
        margin-top: 4%;
    }
    .sloganTitle{font-size: 40px;color:#debc55;font-family: 'Arial';margin-top: 20px;margin-bottom: 60px;font-weight: bold;}
    .sloganWidth{width: 125%;}
    @media (max-width: 768px){
        .sloganWidth{width: 100%!important;}
        .sloganTitle{font-size: 35px!important;text-align: center;}
    }
    @media only screen and (max-width: 1024px) and (min-width: 768px){
        .sloganTitle{font-size: 35px!important;}
    }
    h4.mimarTitle{text-align: center;}

    body{
        background-color: #fff;
    }
    @media (min-width: 1300px) {
        .container {
            width: 1170px !important;
        }
    }
</style>
@endpush

@push("js")
<script src="{{ asset("templates/default/js/homebook/jquery.cookie.js") }}"></script>

<script src="{{ asset("templates/default/js/homebook/main.js") }}"></script>
<script src="{{ asset("templates/default/js/homebook/jquery.mousewheel.min.js") }}"></script>

<script>
    !function(e){e.fn.hover3d=function(t){var r=e.extend({selector:null,perspective:1e3,sensitivity:20,invert:!1,shine:!1,hoverInClass:"hover-in",hoverOutClass:"hover-out",hoverClass:"hover-3d"},t);return this.each(function(){function t(e){i.addClass(r.hoverInClass+" "+r.hoverClass),currentX=currentY=0,setTimeout(function(){i.removeClass(r.hoverInClass)},1e3)}function s(e){var t=i.innerWidth(),s=i.innerHeight(),n=Math.round(e.pageX-i.offset().left),o=Math.round(e.pageY-i.offset().top),v=r.invert?(t/2-n)/r.sensitivity:-(t/2-n)/r.sensitivity,c=r.invert?-(s/2-o)/r.sensitivity:(s/2-o)/r.sensitivity,u=n-t/2,p=o-s/2,f=Math.atan2(p,u),h=180*f/Math.PI-90;0>h&&(h+=360),i.css({perspective:r.perspective+"px",transformStyle:"preserve-3d",transform:"rotateY("+v+"deg) rotateX("+c+"deg)"}),a.css("background","linear-gradient("+h+"deg, rgba(255,255,255,"+e.offsetY/s*.5+") 0%,rgba(255,255,255,0) 80%)")}function n(){i.addClass(r.hoverOutClass+" "+r.hoverClass),i.css({perspective:r.perspective+"px",transformStyle:"preserve-3d",transform:"rotateX(0) rotateY(0)"}),setTimeout(function(){i.removeClass(r.hoverOutClass+" "+r.hoverClass),currentX=currentY=0},1e3)}var o=e(this),i=o.find(r.selector);currentX=0,currentY=0,r.shine&&i.append('<div class="shine"></div>');var a=e(this).find(".shine");o.css({perspective:r.perspective+"px",transformStyle:"preserve-3d"}),i.css({perspective:r.perspective+"px",transformStyle:"preserve-3d"}),a.css({position:"absolute",top:0,left:0,bottom:0,right:0,transform:"translateZ(1px)","z-index":9}),o.on("mouseenter",function(){return t()}),o.on("mousemove",function(e){return s(e)}),o.on("mouseleave",function(){return n()})})}}(jQuery);

    $(document).ready(function(){
        $('.designerBio > figure > a').attr('href', $('.designerBio > figure > a').attr('href') + '?');
        $('.mEbook').attr('href', $('.mEbook').attr('href') + '?');
        $(".slideshow").hover3d({
            selector: ".slide--currentopportunities",
            shine: false,
            sensitivity: 150,
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
