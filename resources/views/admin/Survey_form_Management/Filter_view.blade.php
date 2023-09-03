@php
    use App\framehk\funcationhklar;
    ///use Morilog\Jalali\Jalalian;
use Morilog\Jalali\Facades\jDate;
  ///  die("dd2222");
    if($result_filter_db_data->rowCount() <= 0): die(funcationhklar::message_shw_fhk('باتوجه فیلتر ها داده ای یافت نشد',"error","باشه","no","no","yes")); endif;

@endphp
<div class="" style="padding-top: 10px;border: solid 1px #e7dddd;overflow-x: auto;background-color: white;margin-right: 5px;margin-left: 5px;">
    <table id="tbldatat" class="table table-striped table-bordered table-bk-boot" style="width:100%">
        <thead>
        <tr>
            <th  style="text-align: center !important;font-size: 13px;">ردیف</th>
            <th  style="text-align: center !important;font-size: 13px;">کد پیگیری</th>
            <th  style="text-align: center !important;font-size: 13px;">نام و نام خانوادگی</th>
            <th  style="text-align: center !important;font-size: 13px;">شماره همراه</th>
            <th  style="text-align: center !important;font-size: 13px;">شعبه</th>
            <th  style="white-space: nowrap !important;text-align: center !important;font-size: 13px;">تاریخ</th>

        </tr>
        </thead>
        <tbody>


        @php
            $couter_rows=0;
            while($row_filter_db_data=$result_filter_db_data->fetch(PDO::FETCH_ASSOC)):
            $couter_rows++;
        @endphp

        <tr>



                <td  style="text-align: center !important;font-size: 13px;">@php echo  $couter_rows; @endphp</td>
            <td  style="text-align: center !important;font-size: 13px;">@php echo $row_filter_db_data['peygiri']; @endphp</td>
                <td  style="text-align: center !important;font-size: 13px;">@php echo $row_filter_db_data['first_name'] . ' '. $row_filter_db_data['last_name'] ; @endphp</td>
                <td  style="text-align: center !important;font-size: 13px;">@php echo $row_filter_db_data['phone_mobile']; @endphp</td>
                <td  style="text-align: center !important;font-size: 13px;">@php echo $row_filter_db_data['agent_id']; @endphp</td>

<td  style="text-align: center !important;font-size: 13px;">
@php




   /// $date_time_get=App\framehk\funcationhklar::jdatehk("Y/m/d H:i",$row_filter_db_data['date_reg']);

    ///$date_time_get=funcationhklar::fa_toenbyhossein(jDate("Y/m/d H:i",$row_filter_db_data['date_reg']));
    ///$date_time_get=jDate::forge()->format("H:i ساعت Y/m/d ");
    ///
    $date_time_get=date("H:i",$row_filter_db_data['date_reg']) ." ساعت ".$row_filter_db_data['year_reg']."/".$row_filter_db_data['month_reg']."/".$row_filter_db_data['day_reg'];

    echo $date_time_get;

@endphp
</td>

<td  style="text-align: center !important;font-size: 13px;width: 40%">
<textarea style="height:80px;width: 100%">@php echo $row_filter_db_data['description']; @endphp</textarea>
</td>


        </tr>


        @php

            endwhile;

        @endphp
    </table>
</div>
