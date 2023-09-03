@extends('admin.layouts.master')

@section('content')

<p>{!! link_to_route('admin.ordersstatus.create', trans('quickadmin::templates.templates-view_index-add_new') , null, array('class' => 'btn btn-success')) !!}</p>

@if ($ordersstatus->count())
    <div class="col-md-12" id="select_settings">
        <br>
        <div class="panel panel-default">
            <div class="panel-body">
                {!! Form::open(array( 'method' => 'POST',  'route' => array('admin.ordersstatus.updateOrderStates'))) !!}


                <div class="col-md-6">
                    <h4>{{ trans("global.default_submit_order_status") }}:</h4>
                    <select name="submit_order_step" class="form-control">
                        @foreach ($ordersstatus as $row)
                            <option value="{{ $row->id }}" {{ $row->submit_order_step ? "selected" : ""}}>{{ $row->title }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="col-md-6">
                    <h4>{{ trans("global.default_paid_order_status") }}:</h4>
                    <select name="paid_order_step" class="form-control">
                        @foreach ($ordersstatus as $row)
                            <option value="{{ $row->id }}" {{ $row->paid_order_step ? "selected" : ""}}>{{ $row->title }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="clearfix"></div>
                <br>
                <div class="col-md-6">
                {!! Form::submit(trans('global.save'), array('class' => 'btn btn-primary')) !!}
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
    <div class="portlet box green">
        <div class="portlet-title">
            <div class="caption">{{ trans('quickadmin::templates.templates-view_index-list') }}</div>
        </div>
        <div class="portlet-body">
            <table class="table table-striped table-hover table-responsive datatable" id="datatable">
                <thead>
                    <tr>
                        <th>
                            {!! Form::checkbox('delete_all',1,false,['class' => 'mass']) !!}
                        </th>
                        <th>{{ trans('global.title') }}</th>
                        <th>{{ trans('global.color') }}</th>
<th>{{ trans('global.ordering') }}</th>
<th>{{ trans('global.state') }}</th>

                        <th>&nbsp;</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach ($ordersstatus as $row)
                        <tr>
                            <td>
                                {!! Form::checkbox('del-'.$row->id,1,false,['class' => 'single','data-id'=> $row->id]) !!}
                            </td>
                            <td>{{ $row->title }}</td>
                            <td><span class="color_prev" style="background-color: {{ $row->color }}">{{ $row->color }}</span></td>
<td>{{ $row->ordering }}</td>
<td>{{ trans("global.".$row->state) }}</td>

                            <td>
                                {!! link_to_route('admin.ordersstatus.edit', trans('quickadmin::templates.templates-view_index-edit'), array($row->id), array('class' => 'btn btn-xs btn-info')) !!}
                                {!! Form::open(array('style' => 'display: inline-block;', 'method' => 'DELETE', 'onsubmit' => "return confirm('".trans("quickadmin::templates.templates-view_index-are_you_sure")."');",  'route' => array('admin.ordersstatus.destroy', $row->id))) !!}
                                {!! Form::submit(trans('quickadmin::templates.templates-view_index-delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                {!! Form::close() !!}
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
            {!! Form::open(['route' => 'admin.ordersstatus.massDelete', 'method' => 'post', 'id' => 'massDelete']) !!}
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
                var toDelete = [];
                $('.single').each(function () {
                    if ($(this).is(":checked")) {
                        toDelete.push($(this).data('id'));
                    }
                });

                if(toDelete.length > 0) {
                    if (window.confirm('{{ trans('quickadmin::templates.templates-view_index-are_you_sure') }}')) {
                        var send = $('#send');

                        send.val(JSON.stringify(toDelete));

                        $('#massDelete').submit();
                    }
                }else{
                    alert('{{ trans("global.selet_an_item") }}');
                }
            });
        });
    </script>
@stop