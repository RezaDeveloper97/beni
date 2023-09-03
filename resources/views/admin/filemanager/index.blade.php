@extends('admin.layouts.master')

@section('content')

    <iframe src="{{ url("filemanager") }}" width="100%" frameborder="0" onload="resizeIframe(this)"></iframe>

@endsection

<script>
    function resizeIframe(obj) {
        obj.style.height = (document.body.scrollHeight -131) + 'px';
    }
</script>