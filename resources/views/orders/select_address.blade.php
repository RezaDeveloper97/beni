@extends('layouts.app')
@section("title",trans("global.select_address"))
@section('content')
    <div class="container address">
        <div class="row">

            @include("orders/steps",["step"=>"address"])

            <div class="col-md-12">
                <h4 class="alert alert-info"> {{ trans("global.order_select_address_hint") }}</h4>
            </div>

            {{ Form::open(array('route' => 'orders.set_address', 'id' => 'submit_order_set_address', 'class' => 'form-horizontal')) }}
            <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    {{ trans("global.select_address") }}
                    <button type="button" id="addNewAddress" class="btn btn-primary pull-left" data-toggle="modal" data-target="#add-new-address-modal">{{  trans("global.add_new_address") }}</button>
                    <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                    <div id="realAddresses" class="table-responsive">
                        <input type="hidden" name="address_type" value="real">
                        @foreach($realAddress as $item)
                            <table class="table table-bordered {{ $item["default_address"] ? "checked_address" : "" }}">
                                <tr>
                                    <td colspan="4" style="padding: 10px 15px;">{{ $item["name_transferee"] }}</td>
                                </tr>
                                <tr>
                                    <td width="5%" align="center">
                                        <label class="select_address_label"><input class="select_address" type="radio" name="address_real_id" {{ $item["default_address"] ? "checked" : "" }} value="{{ $item["id"] }}"></label>
                                    </td>
                                    <td width="15%">
                                        {{ trans("global.ostan") }}: {{ $item["ostans"]["title"] }}
                                        <hr>
                                        {{ trans("global.city") }}: {{ $item["cities"]["title"] }}
                                    </td>
                                    <td width="60%">
                                        {{ $item["address"] }}
                                        <br>
                                        {{ trans("global.postal_code") }}: {{ $item["postal_code"] }}
                                    </td>
                                    <td width="20%">
                                        {{ trans("global.mobile") }}: {{ $item["mobile"] }}
                                        <hr>
                                        {{ trans("global.phone") }}: {{ $item["phone"] }}
                                    </td>
                                </tr>
                            </table>
                        @endforeach
                        @if(count($realAddress) <= 0)
                        <p>{{ trans("global.no_have_address") }}</p>
                        @endif

                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-md-12" style="display: none;">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div id="select_legal_address">
                            <div class="input">
                                <input type="hidden" name="legal" value="0">
                                <input id="legal_address" type="radio" name="legal" value="1">
                            </div>
                            <label for="legal_address">{!! \App\Kamiyar\KamiyarFunctions::showSetting("order_select_address_real") !!}</label>
                        </div>
                        <div id="addresses" class="col-md-6 col-sm-6 col-xs-12">

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <button class="btn btn-success  pull-left"  type="submit" id="next_step"> {{ trans("global.select_address_continue") }}</button>
                <!--<button class="btn btn-primary"  type="button" id="prev_review"> {{ trans("global.back") }}</button>-->
            </div>
            {{ Form::close() }}


        </div>
    </div>

    <!-- Modal New address -->
    <div id="add-new-address-modal" class="modal modal-full fade " role="dialog">
        <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">{{ trans("global.preview") }}</h4>
                </div>
                <div class="modal-body">
                    <iframe src="{{ route("user.add_address") }}" frameborder="0" width="100%" height="500px"></iframe>
                </div>
            </div>

        </div>
    </div>

@endsection

@push('js')
<script>
    $(".select_address").on("change",function () {
        checkSelectedAddress();
    });
    
    function checkSelectedAddress() {
        var selected_address = $(".select_address:checked");
        $("#realAddresses").find("table").removeClass("checked_address");
        selected_address.closest("table").addClass("checked_address")
    }
</script>

@endpush