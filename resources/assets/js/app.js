
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const app = new Vue({
//     el: '#app'
// });
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

jQuery(function($) {
    if (localStorage.getItem('previousPriceCurr') === null) {
        localStorage.setItem('previousPriceCurr', JSON.stringify(['usd', Infinity]))
    }

    var $hour_icon = $('#hour');
    var $day_icon  = $('#day');
    var $week_icon = $('#week');

    (hour < 0) ? $day_icon.addClass('negative') : $.noop();
    (day < 0) ? $hour_icon.addClass('negative') : $.noop();
    (week < 0) ? $week_icon.addClass('negative'): $.noop();

    var $currencySelect = $('#currency-select');

    $currencySelect.change(function() {

        var currency = $(this).val().split('|')[0];
        var price = $(this).val().split('|')[1];
        var selectedCurrency = $(this).children('option').filter(':selected').text();

        $('#current-currency').text(selectedCurrency);
        $('#current-price').html('')
        $('#current-price').html('<i class="fa fa-money" id="money-icon" aria-hidden="true"></i>' + price);

        localStorage.setItem('previousPriceCurr', JSON.stringify([currency, price]));

    });

    var storedData = JSON.parse(localStorage.getItem('previousPriceCurr'));


    $currencySelect.find('option').filter(function() {

        var newVal = $(this).val().slice(4);
        var oldVal = storedData[1];
        var percentChange = (newVal-oldVal)/oldVal;

        if (percentChange === Infinity) { percentChange = 0; }

        $(this).data('percent-change', precisionRound(percentChange, 2));

        console.log(oldVal, newVal);
        console.log(percentChange);

        return (storedData[0] === $(this).val().slice(0, 3));

    }).filter(function() {

        var $percentChange = $('#percent-change');
        $percentChange.html($percentChange.html() + $(this).data('percent-change') + '%');

        ($(this).data('percent-change') < 0) ? $percentChange.find('i').addClass('negative') : $.noop();

    }).prop('selected', true).trigger('change');

    $('#logout-form').find('input').click(function() {
        $currencySelect.trigger('change');
    });
});