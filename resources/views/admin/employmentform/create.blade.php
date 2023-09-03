@extends('layouts.app')
@push("css")
    <style>
        #contents{
            margin: 0;
        }
    </style>
@endpush
@section("title",'فرم درخواست همکاری با مبلمان یاتاش')

@section('content')
    <div id="wrapper">
        @include("partials/menu",["current"=>"employment-form"])

        @include("partials/topbar")




        <div class="row">
            <div class="col-sm-12">
                <img src="http://yatash.ir/handshake.jpg">
                <div class="container">
                    <div class="row">
                        <br>
                        @include('flash::message')
                    </div>
                </div>
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            {!! implode('', $errors->all('<li class="error">:message</li>')) !!}
                        </ul>
                    </div>
                @endif
            </div>
        </div>

{!! Form::open(array('route' => 'employment.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal'
,'enctype'=>"multipart/form-data")) !!}
<div class="col-md-6 col-md-offset-3 col-sm-12">
<div>
    <p style="font-size: 16px; text-align: center; margin: 15px;">شرکت ایریاتاش کیش همانند همیشه پیشرو و در حال نو آوری و پویایی است و لازمه این مهم در اختیار داشتن یک تیم کامل و خلاق از بهترین هاست.</p>
    <p style="font-weight: bold; font-size: 18px; color: #ff0f20; text-align: center; margin: 15px;">فرم درخواست همکاری با شرکت ایریاتاش کیش</p>
</div>
<div class="form-group">
    {!! Form::label('job_title', trans("شغل مورد درخواست").' *', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('job_title', old('job_title'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('name', trans("نام و نام خانوادگی").' *', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('name', old('name'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('birthday', trans("تاریخ تولد").' *', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('birthday', old('birthday'), array('class'=>'form-control datepicker')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('gender', trans("جنسیت").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::select('gender', $gender, old('gender'), array('class'=>'form-control select2')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('married', trans("وضعیت تاهل").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::select('married', $married, old('married'), array('class'=>'form-control select2')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('khedmat', trans("وضعیت نظام وظیفه").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::select('khedmat', $khedmat, old('khedmat'), array('class'=>'form-control select2')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('last_licence', trans("آخرین مدرک تحصیلی").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('last_licence', old('last_licence'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('major', trans("رشته تحصیلی").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('major', old('major'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('work_year', trans("میزان سابقه کار مرتبط (ماه)").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('work_year', old('work_year'), array('class'=>'form-control')) !!}

    </div>
</div>
    <div class="form-group">
        {!! Form::label('work_time', trans("تمایل به همکاری به صورت").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::select('work_time', $work_time, old('work_time'), array('class'=>'form-control select2')) !!}

        </div>
    </div>

    <div class="form-group">
        {!! Form::label('lang', "زبان: ", array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-4">
            {!! Form::label('english', trans("انگلیسی").'', array('class'=>'')) !!}
            {!! Form::hidden('english','') !!}
            {!! Form::checkbox('english', 1, false) !!}
        </div>
        <div class="col-sm-4">
            {!! Form::label('tork', trans("ترکی استانبولی").'', array('class'=>'')) !!}
            {!! Form::hidden('tork','') !!}
            {!! Form::checkbox('tork', 1, false) !!}
        </div>
    </div>
    <div class="form-group">
    {!! Form::label('other_lang', trans("سایر زبانها").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('other_lang', old('other_lang'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('tarighe_ashnayi', trans("طریقه آشنایی با شرکت").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('tarighe_ashnayi', old('tarighe_ashnayi'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('hoghoogh', trans("حقوق درخواستی (تومان)").' *', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('hoghoogh', old('hoghoogh'), array('class'=>'form-control','id'=>'hoghoogh')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('email', trans("ایمیل").' *', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::email('email', old('email'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('city', trans("شهر محل سکونت").' *', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('city', old('city'), array('class'=>'form-control')) !!}

    </div>
</div>
    <div class="form-group">
        {!! Form::label('address', trans("آدرس").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::textarea('address', old('address'), array('class'=>'form-control', 'rows'=>'4')) !!}

        </div>
    </div>
    <div class="form-group">
    {!! Form::label('home_phone', trans("تلفن ثابت").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('home_phone', old('home_phone'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('mobile', trans("تلفن همراه").' *', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        {!! Form::text('mobile', old('mobile'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('image', trans("آپلود عکس").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        <div class="select_media_body">
			<input name="image" type="file" accept="image/*">
        </div>

    </div>
</div>

<div class="form-group">
    {!! Form::label('resume', trans("آپلود رزومه").'', array('class'=>'col-sm-4 control-label')) !!}
    <div class="col-sm-8">
        <div class="select_media_body">
            <input name="resume" type="file" >
        </div>

    </div>
</div>
    <div class="form-group">
        {!! Form::label('description', trans("توضیحات").'', array('class'=>'col-sm-4 control-label')) !!}
        <div class="col-sm-8">
            {!! Form::textarea('description', old('description'), array('class'=>'form-control', 'rows'=>'4')) !!}

        </div>
    </div>




<div class="form-group">
    <div class="col-sm-8 col-sm-offset-4">
        {!! Form::button( 'ارسال' , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}
     </div>

</div>

</div>

{!! Form::close() !!}
        <div class="clearfix"></div>
    </div>

@endsection

@push('js')
    <script>
        $(document).ready(function () {

        $("#hoghoogh").on({
            keyup: function() {
                formatCurrency($(this));
            },
            blur: function() {
                formatCurrency($(this), "blur");
            }
        });


        function formatNumber(n) {
            // format number 1000000 to 1,234,567
            return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }


        function formatCurrency(input, blur) {
            // appends $ to value, validates decimal side
            // and puts cursor back in right position.

            // get input value
            var input_val = input.val();

            // don't validate empty input
            if (input_val === "") { return; }

            // original length
            var original_len = input_val.length;

            // initial caret position
            var caret_pos = input.prop("selectionStart");

            // check for decimal
            if (input_val.indexOf(".") >= 0) {

                // get position of first decimal
                // this prevents multiple decimals from
                // being entered
                var decimal_pos = input_val.indexOf(".");

                // split number by decimal point
                var left_side = input_val.substring(0, decimal_pos);
                var right_side = input_val.substring(decimal_pos);

                // add commas to left side of number
                left_side = formatNumber(left_side);

                // validate right side
                right_side = formatNumber(right_side);

                // On blur make sure 2 numbers after decimal
                if (blur === "blur") {
                    right_side += "";
                }

                // Limit decimal to only 2 digits
                right_side = right_side.substring(0, 2);

                // join number by .
                input_val =  + left_side ;

            } else {
                // no decimal entered
                // add commas to number
                // remove all non-digits
                input_val = formatNumber(input_val);
                input_val =  input_val;

                // final formatting

            }

            // send updated string to input
            input.val(input_val);

            // put caret back in the right position
            var updated_len = input_val.length;
            caret_pos = updated_len - original_len + caret_pos;
            input[0].setSelectionRange(caret_pos, caret_pos);
        }

        })

    </script>
@endpush
