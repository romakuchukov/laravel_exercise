
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

jQuery(function($) {

    var $hour_icon = $('#hour');
    var $day_icon  = $('#day');
    var $week_icon = $('#week');

    (hour < 0) ? $day_icon.addClass('negative') : $.noop();
    (day < 0) ? $hour_icon.addClass('negative') : $.noop();
    (week < 0) ? $week_icon.addClass('negative'): $.noop();


    $('#currency-select').change(function() {

        var currency = $(this).val().split('|')[0];
        var price = $(this).val().split('|')[1];
        var selectedCurrency = $(this).children('option').filter(':selected').text();

        $('#current-currency').text(selectedCurrency);
        $('#current-price').text(price);

        localStorage.setItem('previousPriceCurr', JSON.stringify([currency, price]));

    });

    var storedData = JSON.parse(localStorage.getItem('previousPriceCurr'));

    $('#currency-select').find('option').filter(function() {
            return (storedData[0] === $(this).val().slice(0, 3));
        }).prop('selected', true).trigger('change');
});