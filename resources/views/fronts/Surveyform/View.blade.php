@extends('layouts.app')
@push("css")
    <style>
        #contents{
            margin: 0;
        }
    </style>
    <style>
        .l-preloader{display:none !important;}
        a{
            text-decoration:none !important;
        }
        .reqfilde::after {
            content: "*";
            color: red;
            position: relative;
            left: 0px;
        }
        .question-list-box:nth-child(odd) {
            background-color: #f7f7f7;
        }

        .question-list-box {
            padding-top: 15px;
            border: solid 1px #cdcdcd;
            padding-bottom: 20px;
            border-bottom: none;
        }
        .cardboxbh {
            background-color: #fff;
            border-radius: 20px;
            -webkit-box-shadow: 0 2px 30px rgba(0, 0, 0, .3);
            box-shadow: 0 2px 30px rgba(0, 0, 0, .3);
            margin: 0 auto;
            cursor: pointer;
        }


    </style>
    <style>

        /*checkbox bh fhbk start*/


        .checkboxbha input[type=radio],
        .checkboxbha input[type=checkbox]{
            /* Hide original inputs */
            visibility: hidden;
            position: absolute;
        }
        .checkboxbha input[type=radio] + label:before,
        .checkboxbha input[type=checkbox] + label:before{
            height: 22px !important;
            width: 22px !important;
            margin-right: 10px !important;
            content: "\f00c";
            font-family: "FontAwesome";
            color:white;
            display: inline-block !important;
            vertical-align: baseline !important;
            border: 2px solid #d0d0d0 !important;
            margin-left: 10px;
            border-radius: 100% !important;
            text-align: center;
            margin-top: 10px;
            margin-bottom: 3px;
        }


        .checkboxbha input[type=radio]:checked + label:before,
        .checkboxbha input[type=checkbox]:checked + label:before{

            content: "\f00c";
            font-family: "FontAwesome";
            color:white;
            background-color: #6ecca5 !important;
            border:none !important;
            font-weight: normal !important;
        }

        /* CUSTOM RADIO AND CHECKBOX STYLES */
        .checkboxbha input[type=radio] + label:before{
            border-radius:50%;
        }
        .checkboxbha input[type=checkbox] + label:before{
            border-radius:2px;
        }


        .col-mgbtm {

        }
        .whateverbhcehckbox{
            border: 1px solid #c8ccca;
            background: white;
            cursor: pointer;
            padding: 10px;
            margin-bottom: 25px;
            margin-right: 12px;
            text-align: right !important;
            box-shadow: 0 4px 10px rgba(67,100,148,.13);
            border-radius: 5px;
            width:100%;
        }
        .whateverbhcehckbox:hover {

            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

        }

        /*checkbox bh fhbk end*/



        .btnbhfhbk{
            background-color:#464646fa;

            border-radius: 7px;
            cursor: pointer;
            color: white;
            padding-right: 50px;
            padding-left: 50px;
            padding-top: 12px;
            padding-bottom: 12px;
            margin-top:20px;
            margin-bottom: 20px;
            display: inline-block;
            margin-right: 25px;
            margin-left:25px;
            font-family: 'BYekan';

        }
        .btnbhfhbk:hover{
            background-color: #4896cd;

        }


        .boxhomepageimagesfhbk{


            margin-right: 12%;

        }

        .textareaformcostfhbk{
            height: 425px;
        }
        .titleboxformfhbk{
            line-height: 1.3;

        }
        .imgboxfhbk img{

            width: 40%;
        }
        @media only screen and (max-width: 767px) {
            .textareaformcostfhbk{
                height:200px;

            }

            .imgboxfhbk{
                margin-right:2px;
            }


            .imgboxfhbk img{

                width: 43%;
            }


            .boxhomepageimagesfhbk{

                display:none;
            }

            .titleboxformfhbk{

                font-size: 16px;
            }


        }




        .alert{
            font-size: 15px !important;
            text-align: center !important;
            padding: 16px !important;
            font-family: 'BYekan';
            font-weight: normal !important;
        }

        .textboxformcostfhbk{
            padding-top: 10px;
            padding-bottom:0px !important;
            font-family: 'BYekan';
        }




        .wrappericonboxinput-iconev{

            position: relative
        }
        .wrappericonboxinput-iconev:after {
            font-family: 'FontAwesome' !important;
            content: '\f003';
            position: absolute;
            right: 0px;
            background-color: #e8e8e8;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: #8e8c8c;
            font-size: 18px
        }


        .wrappericonboxinput-iconuser{

            position: relative
        }
        .wrappericonboxinput-iconuser:after {
            font-family: 'FontAwesome' !important;
            content: '\f007';
            position: absolute;
            right: 0px;
            background-color: #4896cd;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: white;
            font-size: 18px
        }

        .wrappericonboxinput-iconusergro{

            position: relative
        }
        textarea#description {
            background-color: #f9f9f9;
            border: solid 1px #e3dddd;
        }
        .wrapper_icon_box input{
            padding-right: 51px;
            font-family: 'BYekan' !important;
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0em;
            border-width: 1px;
            border-radius: 0.2em;
            background: white;
            border: solid 1px #e0e0e0;
            background: #f9f9f9;
            color: inherit;
            height: 43px !important;
            width: 100%;
        }
        .wrappericonboxinput-iconusergro:after {
            font-family: 'FontAwesome' !important;
            content: '\f0c0';
            position: absolute;
            right: 0px;
            background-color: #e8e8e8;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: #8e8c8c;
            font-size: 18px
        }



        .wrappericonboxinput-iconmobile{

            position: relative
        }
        .wrappericonboxinput-iconmobile:after {
            font-family: 'FontAwesome' !important;
            content: '\f10b';
            position: absolute;
            right: 0px;
            background-color: #4896cd;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 5px;
            color: white;
            font-size: 23px;
        }


        .wrappericonboxinput-iconphone{

            position: relative
        }
        .wrappericonboxinput-iconphone:after {
            font-family: 'FontAwesome' !important;
            content: '\f095';
            position: absolute;
            right: 0px;
            background-color: #4896cd;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: white;
            font-size: 18px
        }


        .wrappericonboxinput-iconlist{

            position: relative
        }
        .wrappericonboxinput-iconlist:after {
            font-family: 'FontAwesome' !important;
            content: '\f03a';
            position: absolute;
            right: 0px;
            background-color: #e8e8e8;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: #8e8c8c;
            font-size: 18px
        }


        .wrappericonboxinput-iconsetting{

            position: relative
        }
        .wrappericonboxinput-iconsetting:after {
            font-family: 'FontAwesome' !important;
            content: '\f013';
            position: absolute;
            right: 0px;
            background-color: #4896cd;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: white;
            font-size: 18px
        }



        .wrappericonboxinput-iconcompony{

            position: relative
        }
        .wrappericonboxinput-iconcompony:after {
            font-family: 'FontAwesome' !important;
            content: '\f1ad';
            position: absolute;
            right: 0px;
            background-color: #4896cd;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: white;
            font-size: 18px
        }


        .wrappericonboxinput-iconwebsitesample{

            position: relative
        }
        .wrappericonboxinput-iconwebsitesample:after {
            font-family: 'FontAwesome' !important;
            content: '\f0ac';
            position: absolute;
            right: 0px;
            background-color: #e8e8e8;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: #8e8c8c;
            font-size: 18px
        }


        .wrappericonboxinput-icon-cart{

            position: relative
        }
        .wrappericonboxinput-icon-cart:after {
            font-family: 'FontAwesome' !important;
            content: '\f022';
            position: absolute;
            right: 0px;
            background-color: #e8e8e8;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: #8e8c8c;
            font-size: 18px
        }

        .wrappericonboxinput-icon-city{

            position: relative
        }
        .wrappericonboxinput-icon-city:after {
            font-family: 'FontAwesome' !important;
            content: '\f041';
            position: absolute;
            right: 0px;
            background-color: #e8e8e8;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: #8e8c8c;
            font-size: 18px
        }

        .wrappericonboxinput-icon-zona{

            position: relative
        }
        .wrappericonboxinput-icon-zona:after {
            font-family: 'FontAwesome' !important;
            content: '\f279';
            position: absolute;
            right: 0px;
            background-color: #e8e8e8;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: #8e8c8c;
            font-size: 18px
        }




        .wrappericonboxinput-iconwebsite{

            position: relative
        }
        .wrappericonboxinput-iconwebsite:after {
            font-family: 'FontAwesome' !important;
            content: '\f0c1';
            position: absolute;
            right: 0px;
            background-color: #e8e8e8;
            width: 49px;
            height: 43px;
            text-align: center;
            padding-top: 10px;
            color: #8e8c8c;
            font-size: 18px
        }

    </style>

@endpush
@section("title","dd")
@section('content')
    <div id="wrapper">
        @include("partials/menu",["current"=>"surveyform"])

        @include("partials/topbar")

        <div class="container content-custombh" style="padding-top: 180px">


            <div class="cardboxbh"  style="" id="cardboxbhfhbk" >

                <div class=""  style="font-family:BYekan;text-align: center !important;margin-bottom: 50px;margin-top: 50px;color: black;background-color:#0c5ca8;border-top-right-radius: 15px;border-top-left-radius: 15px;padding-top: 30px;padding-bottom: 30px;color: white;font-size: 23px;text-align: center;">@php echo "فرم نظرسنجی یاتاش شعبه" ." " . $agent_id_Get ?></div>

                <div class="" style="    padding: 3px 50px 10px !important;">

                    <form id="formlevelab" name="formlevelab" >


                        <input type="text" name="servicetypefhbk" id="servicetypefhbk" style="display:none;">





                        <div id="box_level_a">
                            <h4 class="titleboxformfhbk" style="text-align: center !important;margin-bottom: 32px;margin-top: 3px;color:#515151;">
                                اطلاعات زیر را وارد کنید
                            </h4>

                            <div class="row">

                                <div class="col-lg-4 col-md-4 col-sm-12 col-12" >
                                    <label for="first_name" class="textboxformcostfhbk reqfilde" ><span class="">نام</span></label>
                                    <div class="wrapper_icon_box wrappericonboxinput-iconuser"><input name="first_name" type="text"  id="first_name" style="text-align:right;"></div>
                                </div>


                                <div class="col-lg-4 col-md-4 col-sm-12 col-12" >
                                    <label for="last_name" class="textboxformcostfhbk reqfilde" ><span class="">نام خانوادگی</span></label>
                                    <div class="wrapper_icon_box wrappericonboxinput-iconuser"><input name="last_name" type="text"  id="last_name" style="text-align:right;"></div>
                                </div>


                                <div class="col-lg-4 col-md-4 col-sm-12 col-12" >
                                    <label for="phone_mobile" class="textboxformcostfhbk reqfilde" ><span class="">شماره موبایل</span></label>
                                    <div class="wrapper_icon_box wrappericonboxinput-iconmobile"><input name="phone_mobile" type="text"  id="phone_mobile" style="text-align:right;"></div>
                                </div>


                                <div class="col-lg-12 col-md-12 col-sm-12 col-12" >
                                    <label for="description" class="textboxformcostfhbk reqfilde"  style="display: block"><span class="">پیشنهاد یا انتقاد</span></label>
                                    <textarea id="description" name="description" style="text-align:right;width: 100%;height:200px"></textarea>
                                </div>





                            </div>

                            <div id="resultsend_level_a"> </div>
                            <center>
                                <span style="" class="btnbhfhbk btnbackfhbk" onClick="sendform_req_reg_level_a();" ><span class="fa fa-send"  style="padding-left: 10px;font-size: 20px;position: relative;top: 4px;"></span>ارسال</span>
                            </center>


                        </div>





                    </form>






                </div>
            </div>





        </div>


    </div>
@endsection


@push("js")

    <script>




        function showlevelfhbk(showlevel){

            var box_level_a=document.getElementById("box_level_a");
            var box_level_b=document.getElementById("box_level_b");




            if (box_level_a != null){
                box_level_a.style.display = "none";
                if (showlevel=="level_a"){
                    box_level_a.style.display = "block";
                }
            }

            if (box_level_b != null){
                box_level_b.style.display = "none";
                if (showlevel=="level_b"){
                    box_level_b.style.display = "block";
                }
            }


            scrolltoformray();

        }

        function fileboxuploadshowandhide(statusshowb){

            var fileboxuploadfhbkrf=document.getElementById("fileboxuploadfhbkrf");

            if (fileboxuploadfhbkrf != null){


                if (statusshowb=="hide"){

                    fileboxuploadfhbkrf.style.display = "none";
                }else{
                    fileboxuploadfhbkrf.style.display = "block";

                }

            }


        }
    </script>


    <script>
        function scrolltoformray() {

            var elmntsc = document.getElementById("cardboxbhfhbk");
            elmntsc.scrollIntoView();
///window.scrollTo(0,elmntsc.offsetTop + 180);
        }


        function sendform_req_reg_level_a() {
            $(document).ready(function(){

                let myformlevelabget = document.getElementById('formlevelab');
                let myformlevelab = new FormData(myformlevelabget);
               ////// myformlevelab.append("action","form_happy_call_pr");
                myformlevelab.append("agent_id","@php echo $agent_id_Get; @endphp");



                $("#resultsend_level_a").replaceWith('<div class="container-fluid" id="resultsend_level_a" style="margin-top: 30px;margin-bottom: 15px;"> <div class="row  alert alert-primary" style="Opacity:0.5;" ><span class="fa fa-spinner    fa-spin" style="font-size: 30px"></span> Loading ...</div>');

                $.ajax({
                    url: "@php echo route('survey_form.survey_form_pr') @endphp",
                    type: "POST",
                    data:myformlevelab,
                    headers: {'X-CSRF-TOKEN': '{{ csrf_token() }}'},
                    processData: false,
                    contentType: false,
                    success: function(data)
                    {
                        $("#resultsend_level_a").html(data);

                    },
                    error: function()
                    {
                        $("#resultsend_level_a").html("<span>Server connection error Try again</span>");
                    }
                });



                return false;
            });

        }


        function sendform_req_reg_level_b() {
            $(document).ready(function(){

                let myformlevel_bget = document.getElementById('formlevelab');
                let myformlevel_get = new FormData(myformlevel_bget);
                myformlevel_get.append("action","form_happy_call_pr");
                myformlevel_get.append("action_pr","level_b");
                $("#resultsend_level_b").replaceWith('<div class="container-fluid" id="resultsend_level_b" style="margin-top: 30px;margin-bottom: 15px;"> <div class="row  alert alert-primary" style="Opacity:0.5;" ><span class="fa fa-spinner    fa-spin" style="font-size: 30px"></span> Loading ...</div>');

                $.ajax({
                    url: "",
                    type: "POST",
                    data:myformlevel_get,
                    processData: false,
                    contentType: false,
                    success: function(data)
                    {
                        $("#resultsend_level_b").html(data);

                    },
                    error: function()
                    {
                        $("#resultsend_level_b").html("<span>Server connection error Try again</span>");
                    }
                });



                return false;
            });

        }
    </script>

    <script>


        function showorhideboxoter_sitetype(statusshowb){

            var othertextsitetypefhbkdiv=document.getElementById("othertextsitetypefhbkdiv");
            var otherwebsitesfhbk=document.getElementById("otherwebsitesfhbk");
            if (otherwebsitesfhbk != null){
                if (othertextsitetypefhbkdiv != null){
                    othertextsitetypefhbkdiv.style.display = "none";
                    if (otherwebsitesfhbk.checked==true) {

                        othertextsitetypefhbkdiv.style.display = "block";
                    }

                }

            }
        }
    </script>
@endpush
