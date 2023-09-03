@extends('layouts.empty')

@section('content')
    @if(!session('addressAdded'))
    <div class="col-md-12  no-padding no-margin">
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    {!! implode('', $errors->all('<li class="error">:message</li>')) !!}
                </ul>
            </div>
        @endif

            {!! Form::open(array('route' => 'user.add_address.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal')) !!}

            {{ Form::hidden('users_id',Auth::id()) }}
            <div class="form-group">
                {!! Form::label('name_transferee', trans("global.name_and_family_transferee"), array('class'=>'col-sm-3 control-label')) !!}
                <div class="col-sm-9">
                    {!! Form::text('name_transferee', old('name_transferee',Auth::user()->name." ".Auth::user()->family), array('class'=>'form-control')) !!}

                </div>
            </div><div class="form-group">
                {!! Form::label('mobile', trans("global.mobile_transferee"), array('class'=>'col-sm-3 control-label')) !!}
                <div class="col-sm-9">
                    {!! Form::text('mobile', old('mobile',Auth::user()->mobile), array('class'=>'form-control')) !!}

                </div>
            </div><div class="form-group">
                {!! Form::label('phone', trans("global.phone_transferee"), array('class'=>'col-sm-3 control-label')) !!}
                <div class="col-sm-9">
                    {!! Form::text('phone', old('phone'), array('class'=>'form-control')) !!}

                </div>
            </div><div class="form-group">
                {!! Form::label('ostans_id', trans("global.ostan_transferee"), array('class'=>'col-sm-3 control-label')) !!}
                <div class="col-sm-9">
                    {!! Form::select('ostans_id', $ostans, old('ostans_id'), array('class'=>'form-control select2','style'=>'width:100%')) !!}

                </div>
            </div><div class="form-group">
                {!! Form::label('cities_id', trans("global.city_transferee"), array('class'=>'col-sm-3 control-label')) !!}
                <div class="col-sm-9">
                    {!! Form::select('cities_id', $cities, old('cities_id'), array('class'=>'form-control select2','style'=>'width:100%')) !!}

                </div>
            </div><div class="form-group">
                {!! Form::label('address', trans("global.address_transferee"), array('class'=>'col-sm-3 control-label')) !!}
                <div class="col-sm-9">
                    {!! Form::text('address', old('address'), array('class'=>'form-control')) !!}

                </div>
            </div><div class="form-group">
                {!! Form::label('postal_code', trans("global.postal_code_transferee"), array('class'=>'col-sm-3 control-label')) !!}
                <div class="col-sm-9">
                    {!! Form::text('postal_code', old('postal_code'), array('class'=>'form-control')) !!}

                </div>
            </div>

            {!! Form::hidden('default_address',1) !!}

            <div class="form-group">
                <div class="col-sm-9 col-sm-offset-3">
                    {!! Form::button( "<i class='fa fa-save'></i> ".trans('global.save') , array('class' => 'btn btn-success',"type"=>"submit", "value" => "save","name"=>"save_type")) !!}

                </div>
            </div>

            {!! Form::close() !!}

    </div>
    @endif

@endsection

@push('js')

<script>

    @if(session('addressAdded'))
        parent.location.reload();
    @endif

    $(document).ready(function () {

    });

</script>

@endpush
@push('css')
<style>
    #hidden-preview-canvas{
        position: relative;
    }
    #hidden-preview-canvas img.prev-img-canvas_bg{
        display: block;
        width: 100%;
        position: absolute;
        z-index: 1;
        top: 50%;
        right: 50%;
    }
    #hidden-preview-canvas img.prev-img-canvas{
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 50%;
        z-index: 2;
    }

    #hidden-preview-canvas img.prev-img-preview_bg{
        margin: auto;
        position: relative;
        display: block;
        z-index: 3;
    }
</style>
@endpush