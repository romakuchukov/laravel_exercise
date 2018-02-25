
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
    (week < 0) ? $week_icon.addClass('negative') : $.noop();


    $('#currency-select').change(function() {
        $('#current-currency').text($(this).children('option').filter(":selected").text());
        $('#current-price').text($(this).val());
    });
});