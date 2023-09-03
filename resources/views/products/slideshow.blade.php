@if(isset($slidshow))
<div id="collection-slider">

    <div class="corner-top-left"></div>
    <div class="corner-top-right"></div>
    <div class="corner-bottom-left"></div>
    <div class="corner-bottom-right"></div>

    <div id="slideshow" class="slideshow"  dir="rtl">
        <ul>
        @foreach($slidshow as $item)
            <li>
                <img src="{{ asset($item->image) }}" alt="{{ $collectionTitle }}" style="width:100%">
            </li>
        @endforeach
        </ul>
    </div>

</div>
@push("css")
<link rel="stylesheet" href="{{ asset("plugins/slideshow/css/unslider.css") }}" type="text/css" media="screen" title="CSS" charset="utf-8" />

@endpush
@push('js')
<script src="{{ asset("plugins/slideshow/js/unslider-min.js") }}" type="text/javascript" charset="utf-8"></script>
<script>

    jQuery(document).ready(function($) {

        $('#slideshow').unslider({
            animation: 'fade',
            autoplay: true,
            speed: 1000,
            delay: 8000
        });

    });

</script>
@endpush
@endif
