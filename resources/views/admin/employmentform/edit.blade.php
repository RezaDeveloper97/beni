@extends('admin.layouts.master')

@push('css')
    <style>
        .table{
            max-width: 700px;
        }
        .page-title{
            display: none !important;
        }
        @media print
        {
            .no-print, .no-print *
            {
                display: none !important;
            }
            .page-header, .page-sidebar-wrapper{
                display: none !important;
            }
        }
    </style>
@endpush


@section('content')



<div class="form-group no-print">
    <div class="col-sm-12">
	    <br>
        {!! link_to_route('admin.employmentform.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}
        <br><br>
        <button class="btn btn-primary btn-lg" onclick="window.print();">پرینت</button>
        <hr>
    </div>
</div>

<table class="table table-striped table-bordered">
    <tr>
        <th colspan="2">
            <span style="font-size: 18px; font-weight: bold">{{$employmentform->name}}</span>
            <br>
            <span>تاریخ تولد</span> :
            <span >{{$employmentform->birthday}}</span>
            <br>
            <span>جنسیت</span> :
            <span>{{\App\EmploymentForm::$gender[$employmentform->gender]}}</span>
        </th>
        <th width="100px"><img width="100px" src="{{ asset($employmentform->image) }}"></th>
    </tr>
    <tr>
        <td style="width: 200px;">شغل مورد درخواست</td>
        <td colspan="2" >{{$employmentform->job_title}}</td>
    </tr>
    <tr>
        <td style="width: 200px;">وضعیت تاهل</td>
        <td  colspan="2">{{\App\EmploymentForm::$married[$employmentform->married]}}</td>
    </tr>
    <tr>
        <td>وضعیت نظام وظیفه</td>
        <td  colspan="2">{{\App\EmploymentForm::$khedmat[$employmentform->khedmat]}}</td>
    </tr>
    <tr>
        <td>آخرین مدرک تحصیلی</td>
        <td colspan="2">{{$employmentform->last_licence}}</td>
    </tr>
    <tr>
        <td>رشته تحصیلی</td>
        <td colspan="2">{{$employmentform->major}}</td>
    </tr>
    <tr>
        <td>میزان سابقه کار مرتبط (ماه)</td>
        <td colspan="2">{{$employmentform->work_year}}</td>
    </tr>
    <tr>
        <td>تمایل به همکاری به صورت</td>
        <td colspan="2">{{\App\EmploymentForm::$work_time[$employmentform->work_time]}}</td>
    </tr>
    <tr>
        <td>زبان</td>
        <td colspan="2">
            {{ $employmentform->english == 1 ? 'انگلیسی' : '' }}
            {{ $employmentform->tork == 1 ? ' | ترکی استانبولی' : '' }}
        </td>
    </tr>
    <tr>
        <td>سایر زبان ه</td>
        <td colspan="2">{{$employmentform->other_lang}}</td>
    </tr>
    <tr>
        <td>طریقه آشنایی با شرکت</td>
        <td colspan="2">{{$employmentform->tarighe_ashnayi}}</td>
    </tr>
    <tr>
        <td>حقوق درخواستی (تومان)</td>
        <td colspan="2">

            @if(is_numeric($employmentform->hoghoogh))
                {{number_format($employmentform->hoghoogh,0)}}
            @else
                {{$employmentform->hoghoogh}}
            @endif
        </td>
    </tr>
    <tr>
        <td>ایمیل</td>
        <td colspan="2">{{$employmentform->email}}</td>
    </tr>
    <tr>
        <td>شهر محل سکونت</td>
        <td colspan="2">{{$employmentform->city}}</td>
    </tr>
    <tr>
        <td>آدرس</td>
        <td colspan="2">{{$employmentform->address}}</td>
    </tr>
    <tr>
        <td>تلفن ثابت</td>
        <td colspan="2">{{$employmentform->home_phone}}</td>
    </tr>
    <tr>
        <td>تلفن همراه</td>
        <td colspan="2">{{$employmentform->mobile}}</td>
    </tr>
    <tr>
        <td>رزومه</td>
        <td colspan="2">
            @if($employmentform->resume)
                <a href="{{ url($employmentform->resume) }}">دانلود روزمه</a>
            @endif
        </td>
    </tr>
    <tr>
        <td>توضیحات</td>
        <td colspan="2">{{$employmentform->description}}</td>
    </tr>
</table>

<div class="form-group no-print">
    <div class="col-sm-12">
	<hr>
        {!! link_to_route('admin.employmentform.index', trans('global.back') , null, array('class' => 'btn btn-default')) !!}

    </div>
</div>


@endsection
