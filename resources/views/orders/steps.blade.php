<div id="order_steps" class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">

    <ul>
        <?php $passed = true; ?>
    @foreach(config("enums.order_steps") as $item => $route)
        <?php
            if($passed)
                $this_step = "passed";
            else
                $this_step = "normal";

            if($item == $step){
                $this_step = "current";
                $passed = false;
            }
            if($step == "submit"){
                $this_step = "passed";
                $passed = true;
            }
        ?>
        <li id="{{ $item }}" class="{{ $this_step }}">
            @if($this_step == "passed" && $item != "auth")
                <a href="{{ route("orders.".$route) }}">
                    <img src="{{ asset("templates/default/images/order_steps/$item.png") }}">
                    <p>{{ trans("global.step_".$item) }}</p>
                </a>
            @else
                <span>
                    <img src="{{ asset("templates/default/images/order_steps/$item.png") }}">
                    <p>{{ trans("global.step_".$item) }}</p>
                </span>
            @endif
        </li>
    @endforeach
    </ul>
</div>