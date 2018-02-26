<!-- row -->
<div class="row">
    <div class="col-sm-6">
        <div class="white-box">
            <div class="box-title">
                <h5 class="text-muted vb">Percentage change since last login</h5>
                <div class="col-in row">
                    <h2 class="text-muted vb text-right">CHANGE</h2>
                    <h3 class="counter text-right m-t-15 text-megna" id="percent-change">
                        <i class="fa fa-angle-double-up" aria-hidden="true"></i>
                    </h3>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="white-box">
            <div class="box-title">
                <h5 class="text-muted vb">Bitcoin now</h5>
                <div class="col-in row">
                    <h2 id="current-currency" class="text-muted vb text-right">USD</h2>
                    <h3 id="current-price" class="counter text-right m-t-15 text-primary">
                        <i class="fa fa-money" id="money-icon" aria-hidden="true"></i>
                        {{$price_usd}}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /.row