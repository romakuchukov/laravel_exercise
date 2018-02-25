<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Gets bit coin in US and other currencies
     *
     * @return specific currency bitcoin array
     */
    private function get_currency_json ($currency) {
        return json_decode(file_get_contents("https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=$currency"), true);
    }

    /**
     * merges several currency arrays into one
     *
     * @return one currency array
     */

    private function get_merged_currencies($currency_types) {
        $currency_stack = [];

        foreach($currency_types as $type):
            $currency_stack = array_unique(array_merge($currency_stack, $this->get_currency_json($type)[0]), SORT_REGULAR);
        endforeach;

        return $currency_stack;
    }

    /**
     * Show the application dashboard and populate it with data.
     *
     * @return view
     */
    public function index()
    {
        $bitcoin = $this->get_merged_currencies(['EUR', 'AUD']);

        $data = [
            'price_usd' => $bitcoin['price_usd'],
            'price_eur' => $bitcoin['price_eur'],
            'price_aud' => $bitcoin['price_aud'],

            'hour' => $bitcoin['percent_change_1h'],
            'day'  => $bitcoin['percent_change_24h'],
            'week' => $bitcoin['percent_change_7d'],
        ];

        return view('home')->with($data);
    }
}
