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

    // calculate percentage since last logout
    var $percentChange = $('#percent-change');
    var oldPrice = localStorage.getItem('logoutPercent') || price_usd;
    var newPrice = price_usd;
    var percentChangeNum = precisionRound((newPrice - oldPrice) / oldPrice * 100, 2);

    $percentChange.html($percentChange.html() + percentChangeNum + '%');

    // negative
    hour < 0 ? $('#hour').addClass('negative') : $.noop();
    day < 0 ? $('#day').addClass('negative') : $.noop();
    week < 0 ? $('#week').addClass('negative') : $.noop();
    percentChangeNum < 0 ? $percentChange.find('i').addClass('negative') : $.noop();

    // no change
    hour === 0 ? $('#hour').addClass('no-change') : $.noop();
    day === 0 ? $('#day').addClass('no-change') : $.noop();
    week === 0 ? $('#week').addClass('no-change') : $.noop();
    percentChangeNum === 0 ? $percentChange.find('i').addClass('no-change') : $.noop();

    if (localStorage.getItem('previousPriceCurr') === null) {
        localStorage.setItem('previousPriceCurr', JSON.stringify(['usd', price_usd]));
    }
    var $currencySelect = $('#currency-select');
    var storedData = JSON.parse(localStorage.getItem('previousPriceCurr'));
    //select currencies and store it
    $currencySelect.change(function () {

        var $currentCurrency = $('#current-currency');
        var $currentPrice = $('#current-price');
        var price = $(this).val().split('|')[1];
        var currency = $(this).val().split('|')[0];

        $currentCurrency.text($(this).children('option').filter(":selected").text());

        $currentPrice.html('');
        $currentPrice.html('<i class="fa fa-money" id="money-icon" aria-hidden="true"></i>' + price);

        localStorage.setItem('previousPriceCurr', JSON.stringify([currency, price]));
    });

    // select
    $currencySelect.find('option').filter(function () {
        return storedData[0] === $(this).val().slice(0, 3);
    }).prop('selected', true).trigger('change');

    $('#logout-form').find('input').click(function (e) {
        localStorage.setItem('logoutPercent', JSON.stringify(price_usd));
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