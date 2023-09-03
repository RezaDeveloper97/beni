@include('admin.partials.header')
@include('admin.partials.topbar')
<div class="clearfix"></div>
<div class="page-container">


    @include('admin.partials.sidebar')
    <div class="page-content-wrapper">
        <div class="page-content">



            <h3 class="page-title">
                <?php
                    $menu = \Laraveldaily\Quickadmin\Models\Menu::where("name",str_replace('Controller','',explode("@",class_basename(app('request')->route()->getAction()['controller']))[0]))->first();
                    if($menu){
                        echo $menu->title;
                    }else{
                        echo trans("global.".strtolower(str_replace('Controller','',explode("@",class_basename(app('request')->route()->getAction()['controller']))[0])));

//                        if(isset($title_custom_bk){
//echo $title_custom_bk;
//                        }else{
//
//                            echo trans("global.".strtolower(str_replace('Controller','',explode("@",class_basename(app('request')->route()->getAction()['controller']))[0])));
//                        }


                    }
                ?>
            </h3>

            <div class="row">
                <div class="col-md-12">
                    @include('flash::message')
                    @if (Session::has('message'))
                        <div class="note note-info">
                            <p>{{ Session::get('message') }}</p>
                        </div>
                    @endif

                    @yield('content')

                </div>
            </div>

        </div>
    </div>
</div>

<div class="scroll-to-top"
     style="display: none;">
    <i class="fa fa-arrow-up"></i>
</div>
@include('admin.partials.javascripts')

@yield('javascript')
@stack('js')
@include('admin.partials.footer')


