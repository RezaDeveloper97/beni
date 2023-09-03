@extends('layouts.app')
@section("title",$design["title"])
@section('content')
    <div class="container review">
        <div class="row">
            <div class="col-md-12">
                <h2> {{ $design["title"] }} {{ trans("global._customize_your_") }}</h2>
            </div>
            @foreach($userSections as $userSection)
                <div class="col-md-6 col-sm-12 col-xs-12 pre_review">
                    <h4>{{ $userSection["parent_section"]["title"] }} : <a href="{{ route("custom_design.show",[$design["id"],$userSection["parent_section"]["color_id"],$userSection["design_section_id"]]) }}?USCU_ID={{$USCU_ID}}">{{ trans("global.edit") }}</a></h4>
                    <div class="review_body">
                        <div class="review_inner">
                            <?php
                            $width = $userSection["parent_section"]["size_fix_x"] * 2.54 / 300;
                            $height = $userSection["parent_section"]["size_fix_y"] * 2.54 / 300;
                            ?>
                            <img class="source_bg_img img-responsive" style="width: {{$width}}cm; margin-right: -{{$width/2}}cm; margin-top: -{{$height/2}}cm " src="{{ $userSection["parent_section"]["source_bg"] }}">
                            <img class="user_canvas_img img-responsive" style="width: {{$width}}cm; margin-right: -{{$width/2}}cm; margin-top: -{{$height/2}}cm " src="{{ $userSection["preview"] }}">
                            <img class="preview_bg_img img-responsive" src="{{ $userSection["parent_section"]["preview_bg"] }}">
                        </div>
                    </div>
                </div>
            @endforeach
            <div class="clearfix"></div>
            <hr>
            <div class="col-md-6 col-sm-6 col-xs-12">
                {{ Form::open(array('route' => 'orders.select_options', 'id' => 'submit_order_set_options', 'class' => 'form-horizontal', "style" =>"display: inline-block;")) }}

                    {!! Form::hidden('USCU_ID',$USCU_ID) !!}
                    {!! Form::hidden('platform_id',$design["platforms_id"]) !!}
                    {!! Form::hidden('user_saved_canvas_id',$user_saved_canvas_id) !!}

                    {!! Form::hidden('confirm','') !!}
                    {!! Form::checkbox('confirm', 1, false,["id"=>"confirm"]) !!}
                    {!! Form::label('confirm', \App\Kamiyar\KamiyarFunctions::showSetting("confirm_order_review_checkbox",false)) !!}
                    <br>
                    <button class="btn btn-success" type="submit" id="submit_order"> {{ trans("global.next-step") }} <i class="fa fa-arrow-left"></i></button>

                {{ Form::close() }}
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                {!! \App\Kamiyar\KamiyarFunctions::showSetting("order_review_confirm") !!}
            </div>
        </div>
    </div>

@endsection

@push('js')
<script>
    $("#submit_order_set_options").on("submit",function () {
       if(!$("input#confirm").is(':checked')){
           alert("{{\App\Kamiyar\KamiyarFunctions::showSetting("confirm_order_review_checkbox_alert",false)}}");
            return false;
       }
    });
</script>

@endpush