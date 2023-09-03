<div class="page-header navbar navbar-fixed-top">
    <div class="page-header-inner">
        <div class="page-header-inner">
            <div class="navbar-header">
                <a href="{{ url(config('quickadmin.homeRoute')) }}" class="navbar-brand">

                    <i class="fa fa-cog"></i>
                    <span>{{ Lang::get('global.admin') }}</span>
                </a>
            </div>
            <a href="javascript:;"
               class="menu-toggler responsive-toggler"
               data-toggle="collapse"
               data-target=".navbar-collapse">
            </a>

            <div class="top-menu">
                @if(Auth::user()->role_id == config('quickadmin.defaultRole'))
                    <ul class="nav navbar-nav pull-right">
                        <li @if(Request::path() == config('quickadmin.route').'/menu') class="active" @endif>
                            <a href="{{ url(config('quickadmin.route').'/menu') }}">
                                <i class="fa fa-list"></i>
                                <span class="title">{{ trans('quickadmin::admin.partials-sidebar-menu') }}</span>
                            </a>
                        </li>
                        <li @if(Request::path() == 'users') class="active" @endif>
                            <a href="{{ url('users') }}">
                                <i class="fa fa-users"></i>
                                <span class="title">{{ trans('quickadmin::admin.partials-sidebar-users') }}</span>
                            </a>
                        </li>
                        <li @if(Request::path() == 'roles') class="active" @endif>
                            <a href="{{ url('roles') }}">
                                <i class="fa fa-gavel"></i>
                                <span class="title">{{ trans('quickadmin::admin.partials-sidebar-roles') }}</span>
                            </a>
                        </li>
                        <li @if(Request::path() == config('quickadmin.route').'/actions') class="active" @endif>
                            <a href="{{ url(config('quickadmin.route').'/actions') }}">
                                <i class="fa fa-users"></i>
                                <span class="title">{{ trans('quickadmin::admin.partials-sidebar-user-actions') }}</span>
                            </a>
                        </li>
                    </ul>
                @endif
                <ul class="nav navbar-nav pull-left">

                    <li>
                        <a href="{{ url('logout') }}">
                            <i class="fa fa-sign-out fa-fw"></i>
                            <span class="title">{{ trans('quickadmin::admin.partials-sidebar-logout') }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url("/") }}" target="_blank">
                            {{ trans('global.show_site') }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>