<!--<script src="{{ url('quickadmin/js') }}/jquery-1.11.3.min.js"></script>-->
<script src="{{ url('quickadmin/js') }}/jquery-3.1.1.min.js"></script>
<script src="{{ url('quickadmin/js') }}/jquery.dataTables.min.js"></script>
<script src="{{ url('quickadmin/js') }}/dataTables.bootstrap.min.js"></script>
<script src="{{ url('quickadmin/js') }}/jquery-ui.min.js"></script>
<script src="{{ url('quickadmin/js') }}/timepicker.js"></script>
<script src="{{ url('quickadmin/js') }}/jquery-ui-timepicker-addon.min.js"></script>
<!--<script src="{{ url('quickadmin/js') }}/ckeditor.js"></script>-->
<script src="{{ url('quickadmin/js') }}/bootstrap.min.js"></script>
<script src="{{ url('quickadmin/js') }}/main.js"></script>

<script src="{{ asset("plugins/select2/select2.min.js") }}"></script>

<script src="{{ asset("plugins/colorpicker/js/bootstrap-colorpicker.min.js") }}"></script>

<script src="{{ asset("plugins/js-cookie/js-cookie.js") }}"></script>

<script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
<script src="/vendor/unisharp/laravel-ckeditor/adapters/jquery.js"></script>

<script src="{{ asset("plugins/kamiyar/kamiyar.js") }}"></script>
<script>

    $('.textarea').ckeditor();

    $('.select2').select2({
        dir: "rtl",
        placeholder: '{{ Lang::get("global.Select_an_option") }}'
    });

    $('.colorpicker').colorpicker({ /*options...*/ });


    $('.datepicker').datepicker({
        autoclose: true,
        dateFormat: "{{ config('quickadmin.date_format_jquery') }}"
    });

    $('.datetimepicker').datetimepicker({
        autoclose: true,
        dateFormat: "{{ config('quickadmin.date_format_jquery') }}",
        timeFormat: "{{ config('quickadmin.time_format_jquery') }}"
    });

    $('#datatable').dataTable( {
        "language": {
            "url": "{{ trans('quickadmin::strings.datatable_url_language') }}"
        }
    });

    $('[data-toggle="tooltip"]').tooltip({
        html:true,
    });


</script>

<script type="text/javascript" src="{{ asset('plugins/colorbox/jquery.colorbox-min.js') }}"></script>
<script type="text/javascript" src="{{ asset('packages/barryvdh/elfinder/js/standalonepopup.min.js') }}"></script>
<script>
    $('.img-prev').hover(function () {
        var img = "/"+$("#"+$(this).attr('data-picker')).val();
        $(this).attr('data-original-title',"<img width='120px' src='"+img+"'>");

    });

</script>

