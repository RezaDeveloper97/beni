@if(isset($modules))
<div id="modules">
    <div dir="rtl" id="home-supers">
        <div class="guide">
            @foreach($modules as $module)
            <div class="item col3" style="opacity: 1; margin-top: 0px;">
                <div class="img">
                    <img src="{{ asset($module->image) }}">
                </div>
                <div class="text">
                    <span class="title" style="opacity: 1; margin-top: 15px;">{!! $module->title !!}</span>
                    <span class="desc" style="opacity: 1; margin-top: 15px;">{!! $module->description !!}</span>
                    <a href="{{ $module->link_to }}" class="button" style="opacity: 1; margin-top: 0px;">{{ trans("global.readmore") }}</a>
                </div>
            </div>
            @endforeach


            <style>

                #home-supers .item.col2:first-child {
                    margin-left: 0;
                }


                #home-supers .item.col2 {
                    width: 47%;
                    float: left;
                    margin-left: 3%;
                    margin-bottom: 30px;
                    max-width: 531px;
                }
                #home-supers .item:first-child {
                    margin-left: 0;
                }
                #home-supers .item {
                    position: relative;
                    opacity: 0;
                    margin-top: 40px;
                    transition: all .2s ease-out;
                    -webkit-transition: all .2s ease-out;
                }

                #home-supers .item .img {
                    height: 350px;
                    white-space: nowrap;
                    text-align: center;
                    font: 0/0 a;
                    overflow: hidden;
                }

                #home-supers .item .text {
                    text-align: center;
                    width: 97%;
                    margin: 15px auto 0 auto;
                }

                #home-supers .item .text .title {
                    font: 14px 'open_sansbold';
                    margin-top: 25px;
                    min-height: 40px;
                }

                #home-supers .item .text .title, #home-supers .item .text .desc {
                    color: #282828;
                    margin: 50px 15px 15px 15px;
                    display: block;
                    opacity: 0;
                    transition: all .3s ease-in;
                    -webkit-transition: all .3s ease-in;
                }
                .text.custom>.title {
                    font-size: 10px!important;
                    max-width: 287px!important;
                    margin-top: 0!important;
                }
                .text>span.title {
                    font-weight: bold!important;
                }

                #home-supers .item .text .desc {
                    font: 12px 'open_sansregular';
                    line-height: 1.6;
                    min-height: 65px;
                }

                #home-supers .item .text .title, #home-supers .item .text .desc {
                    color: #282828;
                    margin: 50px 15px 15px 15px;
                    display: block;
                    opacity: 0;
                    transition: all .3s ease-in;
                    -webkit-transition: all .3s ease-in;
                }

                /*#home-supers .item .text a {*/
                /*    text-decoration: none;*/
                /*    color: #282828;*/
                /*    font: 12px 'BYekan';*/
                /*    position: relative;*/
                /*    display: block;*/
                /*    opacity: 0;*/
                /*    margin: 0 auto;*/
                /*    transition: all .5s ease-in;*/
                /*    -webkit-transition: all .5s ease-in;*/
                /*    border: none;*/
                /*    width: 149px;*/
                /*    line-height: auto;*/
                /*}*/

                div#home-footer-module-address {
                    padding-right: 10%;
                }
            </style>


                <div class="inner" style="width: 100%; max-width: 1130px; margin: 0 auto;">
                    <div class="item col2" style="opacity: 1; margin-top: 0px;">
                        <div class="img xx" style="height: auto;">
                            <img class="lazy" data-src="https://yatash.ir/images/yatas_super_711.jpg" src="https://yatash.ir/images/yatas_super_711.jpg">
                        </div>

                        <div class="text custom" style="position: absolute; top: 0px; text-align:right;">
                            <div class="text custom" style="position: absolute; top: 0px; text-align:right;">
            <span class="title" style="margin: 15px 0px 0px; float: right; width: 350px; font-size: 11px; text-transform: uppercase; opacity: 1;">

                                <div class="clear"></div>
                       

                                <div class="clear"></div>
 @showSetting(home-footer-module-address)
                            </div>
                        </div>
                    </div>

                    <div class="item col2" style="opacity: 1; margin-top: 0px;">
                        <div class="img xx" style="height: auto;">
                            <img class="lazy" data-src="https://yatash.ir/images/yatas_super_1023.png" src="https://yatash.ir/images/yatas_super_1023.png">
                        </div>

                        <div class="text" style="width:80%; background: #f2f2f2; min-height: auto; position:absolute; bottom: 0; left:0; right:0; text-align:center; margin:0 auto;">
                    <span class="title" style="margin: 15px 0px 10px;opacity: 1;font-family: 'BYekan';font-size: 14px;">
                   نزدیکترین مراکز فروش که می توانید مراجعه کنید...
                    </span>
                            <a href="https://yatash.ir/shopping_center" class="effect" style="font-family: 'BYekan';opacity: 1; margin-top: 0px;">
                                مشاهده
                            </a>
                        </div>
                    </div>





                </div>



        </div>
    </div>
</div>
<div class="clearfix"></div>
@endif

@push("js")
<script>
    function visibleSuperElements() {
        if ($(window).scrollTop() > 275) {
            $("#home-supers .item").css({
                opacity: 1,
                marginTop: 0
            })
        } else {
            $("#home-supers .item").css({
                opacity: 0,
                marginTop: 40
            })
        }
        if ($(window).scrollTop() > 500) {
            $("#home-supers .item .text .title").css({
                opacity: 1,
                marginTop: 15
            });
            $("#home-supers .item .text .desc").css({
                opacity: 1,
                marginTop: 15
            });
            $("#home-supers .item .text a").css({
                opacity: 1,
                marginTop: 0
            })
        } else {
            $("#home-supers .item .text .title").css({
                opacity: 0,
                marginTop: 50
            });
            $("#home-supers .item .text .desc").css({
                opacity: 0,
                marginTop: 50
            });
            $("#home-supers .item .text a").css({
                opacity: 0,
                marginTop: 30
            })
        }
        $("#home-supers .item .text.custom a").css({
            opacity: 1,
            marginTop: 15
        })
    }
    visibleSuperElements();
    $(window).on("scroll", function(){
        visibleSuperElements();
    });
</script>
@endpush