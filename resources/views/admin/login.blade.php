<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>
        {{ trans('global.admin') }}
    </title>

    <meta http-equiv="X-UA-Compatible"
          content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0"
          name="viewport"/>
    <meta http-equiv="Content-type"
          content="text/html; charset=utf-8">


    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/font-awesome.min.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/bootstrap.min.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/bootstrap-rtl.min.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/components.css"/>
<!--<link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/quickadmin-layout.css"/>-->
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/quickadmin-layout-rtl.css"/>
    <link rel="stylesheet"
          href="{{ url('quickadmin/css') }}/quickadmin-theme-default.css"/>

<style>
    .panel-default{
        margin-top: 20%;
        background: none;
        border: none;
        color: #fff;
    }
    .panel-default .panel-heading{
        color: #fff;
        background: none;
        border: none;
    }
</style>

</head>

<body >
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">{{ trans("global.email") }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">{{ trans("global.password") }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password">

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> {{ trans("global.remember_me") }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <input type="hidden" name="admin_login" value="1">
                                <button type="submit" class="btn btn-primary"> {{ trans("global.login") }} </button>

                                <a class="btn btn-link" href="{{ url('/password/reset') }}">{{ trans("global.forgot_password") }}</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
