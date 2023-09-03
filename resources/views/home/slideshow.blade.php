
@if(isset($slideshow))
<div id="home-slider" class="home-slider">

        <div class="corner-top-left"></div>
        <div class="corner-top-right"></div>
        <div class="corner-bottom-left"></div>
        <div class="corner-bottom-right"></div>

        <div id="slideshow" class="slideshow"  dir="rtl">
            <ul>
                @foreach($slideshow as $item)
                    <li>
                        <a href="{{ !empty($item->link_to) ? $item->link_to : 'javascript:;'}}">
                        <img src="{{ asset($item->image) }}" style="width:100%">
                        <div class="all-elements">
                            {!! $item->html_tags !!}
                        </div>
                        </a>
                        @push("css")
                            <style>
                                {!! $item->css_style !!}
                            </style>
                        @endpush
                        @push("js")
                        <style>
                            {!! $item->js_code !!}
                        </style>
                        @endpush
                    </li>
                @endforeach
            </ul>
        </div>

</div>
@push("css")
<link rel="stylesheet" href="{{ asset("plugins/slideshow/css/unslider.css") }}" type="text/css" media="screen" title="CSS" charset="utf-8" />
<style>
    .all-elements{
        position: absolute;
        z-index:2500;
        top: 50px;
        right: 50px;
        width: 100%;
    }
    .element{
        display: none;
        color: #fff;
    }
    .element h3{
        font-size: 34px;
    }

    .element p{
        font-size: 18px;
    }
    @media (max-width: 1024px){
        .all-elements{
            display: none !important;
        }
    }
</style>
@endpush
@push("js")
<script src="{{ asset("plugins/slideshow/js/unslider-min.js") }}" type="text/javascript" charset="utf-8"></script>
<script>
    jQuery(document).ready(function($) {

        var slider = $('#slideshow');
        slider.on('unslider.ready', function() {
            var elements = $(".unslider-wrap li:first-child").find(".element");
            elements.each(function (index) {
                $(this).hide(0);
            });
            var delay = 1000;
            elements.each(function (index) {
                $(this).delay(1000+(delay*index)).fadeIn(1000);
            });
        });

        slider.unslider({
            animation: 'fade',
            autoplay: true,
            speed: 1000,
            delay: 8000
        });

        slider.on('unslider.change', function(event, index, slide) {
            var elements = slide.find(".element");
            elements.each(function (index) {
                $(this).hide(0);
            });
           var delay = 1000;
            elements.each(function (index) {
               $(this).delay(1000+(delay*index)).fadeIn(1000);
            });
        });
    });
</script>
@endpush
@endif