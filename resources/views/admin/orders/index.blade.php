@extends('admin.layouts.master')

@section('content')


@if ($orders->count())
    <div class="portlet box green">
        <div class="portlet-title">
            <div class="caption">{{ trans('quickadmin::templates.templates-view_index-list') }}</div>
        </div>
        <div class="portlet-body">
            <table class="table table-striped table-hover table-responsive datatable" id="datatable">
                <thead>
                    <tr>
                        <th>
                            {!! Form::checkbox('select_all',1,false,['class' => 'mass']) !!}
                        </th>
                        <th>{{ trans("global.code") }}</th>
                        <th>{{ trans("global.user") }}</th>
                        <th>{{ trans("global.email") }}</th>
                        <th>{{ trans("global.mobile") }}</th>
                        <th>{{ trans("global.persian_submit_date") }}</th>
                        <th>{{ trans("global.delivery_method") }}</th>
                        <th>{{ trans("global.payment_method") }}</th>
                        <th>{{ trans("global.final_price") }}</th>
                        <th>{{ trans("global.pay_state") }}</th>
                        <th>{{ trans("global.actions") }}</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach ($orders as $row)
                        <tr>
                            <td>
                                {!! Form::checkbox('del-'.$row->id,1,false,['class' => 'single','data-id'=> $row->id]) !!}
                            </td>
                            <td style="font-family: arial; font-weight: bold">{{ $row->code }}</td>
                            <td>{{ isset($row->user) ? $row->user->name." ".$row->user->name : '' }}</td>
                            <td>{{ $row->user_email }}</td>
                            <td>{{ $row->user_mobile }}</td>
                            <td>{{ $row->persian_submit_date }}</td>
                            <td>{{ $row->delivery_method_title }}</td>
                            <td>{{ $row->payment_method_title }}</td>
                            <td>{{ number_format($row->final_price) }} {{ trans("global.toman") }}</td>
                            <td>{{ trans("global.pay_".$row->paid)}}</td>

                            <td>
                                <!--{!! link_to_route('admin.orders.edit', trans('quickadmin::templates.templates-view_index-edit'), array($row->id), array('class' => 'btn btn-xs btn-info')) !!}
                                {!! Form::open(array('style' => 'display: inline-block;', 'method' => 'DELETE', 'onsubmit' => "return confirm('".trans("quickadmin::templates.templates-view_index-are_you_sure")."');",  'route' => array('admin.orders.destroy', $row->id))) !!}
                                {!! Form::submit(trans('quickadmin::templates.templates-view_index-delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                {!! Form::close() !!}-->
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="row">
                <div class="col-xs-12">
                    <button class="btn btn-danger" id="delete">
                        {{ trans('quickadmin::templates.templates-view_index-delete_checked') }}
                    </button>
                </div>
            </div>
            {!! Form::open(['route' => 'admin.orders.massDelete', 'method' => 'post', 'id' => 'massDelete']) !!}
                <input type="hidden" id="send" name="toDelete">
            {!! Form::close() !!}
        </div>
	</div>
@else
    {{ trans('quickadmin::templates.templates-view_index-no_entries_found') }}
@endif

@endsection

@section('javascript')
    <script>
        $(document).ready(function () {
            $('#delete').click(function () {
                if (window.confirm('{{ trans('quickadmin::templates.templates-view_index-are_you_sure') }}')) {
                    var send = $('#send');
                    var mass = $('.mass').is(":checked");
                    if (mass == true) {
                        send.val('mass');
                    } else {
                        var toDelete = [];
                        $('.single').each(function () {
                            if ($(this).is(":checked")) {
                                toDelete.push($(this).data('id'));
                            }
                        });
                        send.val(JSON.stringify(toDelete));
                    }
                    $('#massDelete').submit();
                }
            });
        });
    </script>
@stop