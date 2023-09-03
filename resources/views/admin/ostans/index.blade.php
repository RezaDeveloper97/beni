@extends('admin.layouts.master')

@section('content')

<p>{!! link_to_route('admin.ostans.create', trans('quickadmin::templates.templates-view_index-add_new') , null, array('class' => 'btn btn-success')) !!}</p>

@if ($ostans->count())
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
                        <th>{{ trans('global.country') }}</th>
<th>{{ trans('global.ordering') }}</th>
<th>{{ trans('global.state') }}</th>

                        <th>&nbsp;</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach ($ostans as $row)
                        <tr>
                            <td>
                                {!! Form::checkbox('del-'.$row->id,1,false,['class' => 'single','data-id'=> $row->id]) !!}
                            </td>
                            <td>{{ $row->title }}</td>
                            <td>{{ isset($row->country->title) ? $row->country->title  : '-'}}</td>
<td>{{ $row->ordering }}</td>
<td>{{ trans("global.".$row->state) }}</td>

                            <td>
                                {!! link_to_route('admin.ostans.edit', trans('quickadmin::templates.templates-view_index-edit'), array($row->id), array('class' => 'btn btn-xs btn-info')) !!}
                                {!! Form::open(array('style' => 'display: inline-block;', 'method' => 'DELETE', 'onsubmit' => "return confirm('".trans("quickadmin::templates.templates-view_index-are_you_sure")."');",  'route' => array('admin.ostans.destroy', $row->id))) !!}
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
            {!! Form::open(['route' => 'admin.ostans.massDelete', 'method' => 'post', 'id' => 'massDelete']) !!}
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