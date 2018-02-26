/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {


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

jQuery(function ($) {
    if (localStorage.getItem('previousPriceCurr') === null) {
        localStorage.setItem('previousPriceCurr', JSON.stringify(['usd', Infinity]));
    }

    var $hour_icon = $('#hour');
    var $day_icon = $('#day');
    var $week_icon = $('#week');

    hour < 0 ? $day_icon.addClass('negative') : $.noop();
    day < 0 ? $hour_icon.addClass('negative') : $.noop();
    week < 0 ? $week_icon.addClass('negative') : $.noop();

    var $currencySelect = $('#currency-select');

    $currencySelect.change(function () {

        var currency = $(this).val().split('|')[0];
        var price = $(this).val().split('|')[1];
        var selectedCurrency = $(this).children('option').filter(':selected').text();

        $('#current-currency').text(selectedCurrency);
        $('#current-price').html('');
        $('#current-price').html('<i class="fa fa-money" id="money-icon" aria-hidden="true"></i>' + price);

        localStorage.setItem('previousPriceCurr', JSON.stringify([currency, price]));
    });

    var storedData = JSON.parse(localStorage.getItem('previousPriceCurr'));

    $currencySelect.find('option').filter(function () {

        var newVal = $(this).val().slice(4);
        var oldVal = storedData[1];
        var percentChange = (newVal - oldVal) / oldVal;

        if (percentChange === Infinity) {
            percentChange = 0;
        }

        $(this).data('percent-change', precisionRound(percentChange, 2));

        console.log(oldVal, newVal);
        console.log(percentChange);

        return storedData[0] === $(this).val().slice(0, 3);
    }).filter(function () {

        var $percentChange = $('#percent-change');
        $percentChange.html($percentChange.html() + $(this).data('percent-change') + '%');

        $(this).data('percent-change') < 0 ? $percentChange.find('i').addClass('negative') : $.noop();
    }).prop('selected', true).trigger('change');

    $('#logout-form').find('input').click(function () {
        $currencySelect.trigger('change');
    });
});

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
module.exports = __webpack_require__(42);


/***/ })

/******/ });