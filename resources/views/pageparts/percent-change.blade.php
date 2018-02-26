<!-- row -->
<div class="row">
    <!--col -->
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="white-box">
            <div class="col-in row">
                <h5 class="text-muted vb">HOURLY<br>CHANGE</h5>
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <h3 class="counter text-right m-t-15 text-megna">
                        <i id="hour" class="fa fa-angle-double-up" aria-hidden="true"></i>
                        {{$hour}}%
                    </h3>
                </div>
            </div>
        </div>
    </div>
    <!-- /.col -->
    <!--col -->
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="white-box">
            <div class="col-in row">
                <h5 class="text-muted vb">DAILY<br>CHANGE</h5>
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <h3 class="counter text-right m-t-15 text-danger">
                        <i id="day" class="fa fa-angle-double-up" aria-hidden="true"></i>
                        {{$day}}%
                    </h3>
                </div>
            </div>
        </div>
    </div>
    <!-- /.col -->
    <!--col -->
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="white-box">
            <div class="col-in row">
                <h5 class="text-muted vb">WEEKLY<br>CHANGE</h5>
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <h3 class="counter text-right m-t-15 text-primary">
                        <i id="week" class="fa fa-angle-double-up" aria-hidden="true"></i>
                        {{$week}}%
                    </h3>
                </div>
            </div>
        </div>
    </div>
    <!-- /.col -->
</div>
<!-- /.row -->