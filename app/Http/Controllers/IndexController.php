<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bitcoin = json_decode(file_get_contents('https://api.coinmarketcap.com/v1/ticker/bitcoin'), true)[0];

        $data = [
            'hour' => $bitcoin['percent_change_1h'],
            'day'  => $bitcoin['percent_change_24h'],
            'week' => $bitcoin['percent_change_7d'],
        ];

        return view('welcome')->with($data);
    }
}
