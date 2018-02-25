@extends('layouts.app')

@section('content')
<div id="page-wrapper">
    <div class="container-fluid">
        <div class="row bg-title">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 class="page-title">Dashboard</h4>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        @include('pageparts.currency-select')
        @include('pageparts.percent-change')
    </div>
    <!-- /.container-fluid -->
    <footer class="footer text-center"> 2017 &copy; Pixel Admin brought to you by wrappixel.com </footer>
</div>
@endsection