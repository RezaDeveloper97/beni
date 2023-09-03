@extends('admin.layouts.master')

@section('content')

<p>
	{!! link_to_route('admin.bookintro.create', trans('quickadmin::templates.templates-view_index-add_new') , null, array('class' => 'btn btn-success')) !!}
	<button type="button" class='btn btn-default' id="copy" >{{ trans('global.copy') }}</button>
</p>

    <div class="portlet box green">
        <div class="portlet-title">
            <div class="caption">{{ trans('quickadmin::templates.templates-view_index-list') }}</div>
        </div>
        <div class="portlet-body">
            <table class="table table-striped table-hover table-responsive" id="datatableId">
                <thead>
                    <tr>
                        <th width="3%">
                            {!! Form::checkbox('select_all',1,false,['class' => 'mass']) !!}
                        </th>
                        <th>{{ trans('global.name') }}</th>
                        <th>{{ trans('global.title') }}</th>
                        <th>{{ trans('global.subtitle') }}</th>
                        <th>{{ trans('global.image') }}</th>
                        <th>{{ trans('global.ordering') }}</th>
                        <th>{{ trans('global.state') }}</th>

                        <th width="8%">&nbsp;</th>
                    </tr>
                </thead>

                <tbody>

                </tbody>
            </table>
            <div class="row">
                <div class="col-xs-12">
                    <button class="btn btn-danger" id="delete">
                        {{ trans('quickadmin::templates.templates-view_index-delete_checked') }}
                    </button>
					<button id="ordering-save" class="btn btn-warning" type="button" >{{ trans("global.save_orderiong") }} </button>
                </div>
            </div>
            {!! Form::open(['route' => 'admin.bookintro.massDelete', 'method' => 'post', 'id' => 'massDelete']) !!}
                <input type="hidden" id="send" name="toDelete">
            {!! Form::close() !!}

			{!! Form::open(['route' => 'admin.bookintro.copy', 'method' => 'post', 'id' => 'copy_section']) !!}
                <input type="hidden" id="sendCopy" name="toCopy">
            {!! Form::close() !!}

            {!! Form::open(['route' => 'admin.bookintro.updateOrdering', 'method' => 'post', 'id' => 'save_ordering_form']) !!}
            <input type="hidden" id="sendUpdateOrdering" name="toUpdateOrdering">
            {!! Form::close() !!}
        </div>
	</div>


@endsection

@section('javascript')
    <script>


	/*** for DataTables ***/
	$(document).ready(function () {

		// DataTable Section
            var columns = [
                { data: 'idSelect', name: 'idSelect', searchable: false , orderable: false},
                    @foreach($dataTableField as $data => $name)
                { data: '{{ $data }}', name: '{{ $name }}'},
                    @endforeach
                { data: 'action', name: 'action', searchable: false , orderable: false}

            ];

            $('#datatableId').DataTable({

				processing: true,
				serverSide: true,
				ajax: {
					'type': 'POST',
					'url': '{!! route("admin.bookintro.data") !!}',
					headers: {'X-CSRF-TOKEN': '{{ csrf_token() }}'},

				},
				columns: columns,
				"language": {
					"url": '{{ trans('quickadmin::strings.datatable_url_language') }}'
				},
				dom: 'Blfrtip',
				buttons: ['excel','colvis'],
				"fnDrawCallback": function( oSettings ) {
					$('[data-toggle="tooltip"]').tooltip({
						html:true,
					});
				},
                lengthMenu: [[10, 25, 50, 100, 200, -1], [10, 25, 50, 100, 200, "All"]],
                pageLength: 25

			});


	});
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

		/*** for Update ordering ***/
        $("#ordering-save").on("click",function (e) {

            var send = $('#sendUpdateOrdering');

            var toSend = {};
            $('.ordering-input').each(function () {
                toSend[$(this).attr('item-id')] = $(this).val();
            });

            if(!$.isEmptyObject(toSend)) {
                send.val(JSON.stringify(toSend));

                $('#save_ordering_form').submit();
            }

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
