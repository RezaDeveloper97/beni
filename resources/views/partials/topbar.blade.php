<div id="main-topbar">
    <div id="small-logo">
        <a href="{{ url('/') }}"><img src="{{ asset('templates/default/images/small-logo.png') }}"></a>
    </div>
    <div id="large-logo">
        <a href="{{ url('/') }}"><img src="{{ asset('templates/default/images/large-logo.png') }}"></a>
    </div>
</div>


@push('js')
<script>
    var smallLogo = $('#small-logo');
    var largeLogo = $('#large-logo');
    $(window).scroll(function () {
        if($(this).scrollTop() > 0){
            smallLogo.show(0);
            largeLogo.hide(0);
        }else{
            smallLogo.hide(0);
            largeLogo.show(0);
        }
       //if()
    });
</script>
@endpush