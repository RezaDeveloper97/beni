<div class="clearfix"></div>
<div id="footer">
    {!! \App\Kamiyar\KamiyarFunctions::showSetting("footer_all") !!}
</div>
<div id="footer-fix">
    <div class="inner">
        {!! \App\Kamiyar\KamiyarFunctions::showSetting("footer_fix") !!}
    </div>
</div>

@push("js")
<script>
    var openedWindow;
    var site_webhost = "{{ url('/') }}";
    var site_locale = "fa_FA";
    var lang_hadi_enza_homea = "{{ trans("global.siteName") }}";
    function shareWindow(siteName) {
        console.log(siteName);
        var sharedPage = site_webhost  + '/?locale=' + site_locale;
        var sharedLink = site_webhost  + '/?locale=' + site_locale;
        var sharedPageLink = $(location).attr('href') + '/?locale=' + site_locale;
        var sharedName = lang_hadi_enza_homea;
        var sharedImageUrl = site_webhost + 'media/enza_fbshare.jpg';
        if (siteName == "facebook") {
            t = 'Enza Home';
            openedWindow = window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(sharedPageLink) + '&t=' + encodeURIComponent(sharedName), 'sharer', 'toolbar=0,status=0,width=500,height=350' + 'v=1');
            setTimeout(openedWindow.location.reload, 3000);
        } else if (siteName == "twitter") {
            window.open('http://twitter.com/?status=' + encodeURIComponent(sharedPageLink), 'sharer', 'toolbar=1,status=1,width=500,height=350');
        } else if (siteName == "pinterest") {
            window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(sharedPageLink) + '&media=' + encodeURIComponent(sharedImageUrl) + '&description=' + encodeURIComponent(sharedName) + '', 'sharer', 'toolbar=1,status=1,width=400,height=300');
        } else if (siteName == "googleplus") {
            window.open('https://plus.google.com/share?url=' + encodeURIComponent(sharedPageLink), 'sharer', 'toolbar=1,status=1,width=500,height=350');
        }
    }
</script>
@endpush
