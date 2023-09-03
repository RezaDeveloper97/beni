<?php
use App\framehk\funcationhklar;

//$title_custom_bk="فرم نظرسنجی";
?>
<style>
    .form-select {
        width: 100%;
        height: 34px;
        border: solid 1px #cbc5c5;
        font-family: 'BYekan' !important;
        font-size: 13px;
    }
    td,th{
        vertical-align: middle !important;
    }
</style>

@extends('admin.layouts.master')

@section('content')



        <div class="portlet box green">

            <div class="portlet-body">


                <form id="formfilter" name="formfilter">
                    @csrf
                    <div class="" style="padding-top: 13px;padding-right: 10px;font-size: 18px;margin-bottom: 12px;color: #787676;">فیلتر <span class="fa fa-filter"></span></div>

                    <div class="row container-fluid" >


                        <div class="col-lg-2 col-md-2 col-sm-12 col-12 form-group">
                            <label for="type_serachtxt">جستجو براساس</label>
                            <select class="form-select" id="type_serachtxt" name="type_serachtxt" style="font-family: iransans !important;">
                                <option value="all" selected="selected">انتخاب</option>
                                <option value="1">کد پیگیری</option>
                                <option value="2">شماره موبایل</option>
                                <option value="3">نام و نام خانوادگی</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-12 form-group">
                            <label for="serachtxt">تایپ کنید</label>
                            <input name="serachtxt" id="serachtxt" type="text" class="form-control" autocomplete="FALSE">
                        </div>

                        <div class="col-lg-2 col-md-2 col-sm-12 col-12 form-group">
                            <label for="type_workshop_status">انتخاب نماینده</label>
                            <select class="form-select" id="filter_by_agent_id" name="filter_by_agent_id" style="font-family: iransans !important;">
                                <option value="all">انتخاب</option>
                                <option value="1" >فرم 1</option>
                                <option value="2" >فرم 2</option>
                                <option value="3" >فرم3</option>
                                <option value="4" >فرم 4</option>
                            </select>
                        </div>


                        <div class="col-lg-2 col-md-2 col-sm-12 col-12 form-group" style="display: none">
                            <label for="date_startfooorm_show_user">از تاریخ</label>
                            <input name="date_startfooorm_show_user" id="date_startfooorm_show_user" type="text" class="form-control datepicker-hk" autocomplete="FALSE" value="">
                        </div>

                        <div class="col-lg-2 col-md-2 col-sm-12 col-12 form-group" style="display: none">
                            <label for="date_endddfooorm_show_user">تا تاریخ</label>
                            <input name="date_endddfooorm_show_user" id="date_endddfooorm_show_user" type="text" class="form-control datepicker-hk" autocomplete="FALSE" value="">
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-12 form-group" style=";margin-top: 10px;margin-bottom: 10px;">
                            <button class="btn btn-success" type="button" onclick="login_ajax_loading();" style=" margin-top: 14px !important;width: 100%;"><span class="fa fa-search"></span> جستجو</button>
                        </div>

                    </div>


                </form>




                <div class="" id="result_ajax_filter"></div>


            </div>
        </div>


@endsection

@push("js")
    <script>
        function login_ajax_loading(typeform) {
/// typeform reloadfilter
            $(document).ready(function(){
                $("#result_ajax_filter").replaceWith('<div id="result_ajax_filter"><div class="p-4 my-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" style="Opacity:0.5;" ><span class="fa fa-spinner    fa-spin" style="font-size: 30px"></span> در حال بارگذاری ...</div>');

                var myForm = document.getElementById('formfilter');
                var formData = new FormData(myForm);
                $.ajax({
                    url: "@php echo route('admin.survey_form.filter_pr') @endphp",
                    type: "POST",
                    headers: {'X-CSRF-TOKEN': '{{ csrf_token() }}'},
                    data:formData,
                    processData: false,
                    contentType: false,
                    success: function(data)
                    {
                        $("#result_ajax_filter").replaceWith('<div class="" id="result_ajax_filter" style="display: inline-block;width: 100%;"></div>');
                        $("#result_ajax_filter").html(data);
                    },
                    error: function()
                    {
                        $("#result_ajax_filter").html("خطای اتصال به سرور مجدد تلاش کنید");
                    }
                });
                return false;
            });

        }
        login_ajax_loading();
    </script>
@endpush