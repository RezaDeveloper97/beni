@extends('admin.layouts.master')

@section('content')

<p>
    {!! link_to_route('admin.shoppingcenter.create', trans('quickadmin::templates.templates-view_index-add_new') , null, array('class' => 'btn btn-success')) !!}
    <button type="button" class='btn btn-default' id="copy" >{{ trans('global.copy') }}</button>
</p>

@if ($shoppingcenter->count())
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
                        <th>{{ trans('global.title') }}</th>
                        <th>{{ trans('global.cities') }}</th>
<th>{{ trans('global.address') }}</th>
<th>{{ trans('global.phone') }}</th>
<th>{{ trans('global.google_map_url') }}</th>
<th>{{ trans('global.ordering') }}</th>
<th>{{ trans('global.state') }}</th>

                        <th>&nbsp;</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach ($shoppingcenter as $row)
                        <tr>
                            <td>
                                {!! Form::checkbox('del-'.$row->id,1,false,['class' => 'single','data-id'=> $row->id]) !!}
                            </td>
                            <td>{{ $row->title }}</td>
                            <td>{{ isset($row->cities->title) ? $row->cities->title : '' }}</td>
<td>{{ $row->address }}</td>
<td>{{ $row->phone }}</td>
<td><a href="{{ $row->google_map_url }}" target="_blank" ><i class="fa fa-map-marker"></i> {{ trans("global.show_on_google_map") }}</a> </td>
<td>{{ $row->ordering }}</td>
<td>{{ trans("global.".$row->state) }}</td>

                            <td>
                                {!! link_to_route('admin.shoppingcenter.edit', trans('quickadmin::templates.templates-view_index-edit'), array($row->id), array('class' => 'btn btn-xs btn-info')) !!}
                                {!! Form::open(array('style' => 'display: inline-block;', 'method' => 'DELETE', 'onsubmit' => "return confirm('".trans("quickadmin::templates.templates-view_index-are_you_sure")."');",  'route' => array('admin.shoppingcenter.destroy', $row->id))) !!}
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
            {!! Form::open(['route' => 'admin.shoppingcenter.massDelete', 'method' => 'post', 'id' => 'massDelete']) !!}
                <input type="hidden" id="send" name="toDelete">
            {!! Form::close() !!}
			
			{!! Form::open(['route' => 'admin.shoppingcenter.copy', 'method' => 'post', 'id' => 'copy_section']) !!}
                <input type="hidden" id="sendCopy" name="toCopy">
            {!! Form::close() !!}
        </div>
	</div>
@else
    {{ trans('quickadmin::templates.templates-view_index-no_entries_found') }}
@endif

@endsection

@section('javascript')
    <script>
	
		/*** for Copy ***/
		$("#copy").on("click",function () {
			var send = $('#sendCopy');

			var toCopy = [];
			$('.single').each(function () {
				if ($(this).is(":checked")) {
					toCopy.push($(this).data('id'));
				}
			});
			send.val(JSON.stringify(toCopy));

			$('#copy_section').submit();

		});
	
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