<!--row -->
<div class="row">
    <div class="col-sm-12">
        <div class="white-box">
            <div class="box-title">
                Select Currency Type
                <div class="col-md-2 col-sm-4 col-xs-4 pull-right">
                    <select id="currency-select" class="form-control pull-right row b-none currency-selector">
                        <option value="usd|{{$price_usd}}">USD</option>
                        <option value="eur|{{$price_eur}}">EUR</option>
                        <option value="aud|{{$price_aud}}">AUD</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /.row -->