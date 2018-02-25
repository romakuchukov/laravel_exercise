<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// [percent_change_1h] => -1.09
// [percent_change_24h] => -4.43
// [percent_change_7d] => -12.36


Route::get('/', function () {
    $bitcoin = json_decode(file_get_contents('https://api.coinmarketcap.com/v1/ticker/bitcoin'), true)[0];

    $data = [
        'hour' => $bitcoin['percent_change_1h'],
        'day'  => $bitcoin['percent_change_24h'],
        'week' => $bitcoin['percent_change_7d'],
    ];

    return view('welcome')->with($data);
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
