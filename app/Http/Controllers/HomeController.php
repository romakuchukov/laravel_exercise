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
     * Gets bit coin in US and other currencies.
     *
     * @return specific currency bitcoin array
     */

    private function get_currency_json($currency)
    {
        return json_decode(file_get_contents("https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=$currency"), true);
    }

    /**
     * Merges several currency arrays into one.
     *
     * @return one currency array
     */

    private function get_merged_currencies($currency_types)
    {
        $currency_stack = [];

        foreach ($currency_types as $type):
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

        $nan_message = 'NaN';

        $data = [
            'price_usd' => isset($bitcoin['price_usd']) ? round($bitcoin['price_usd'], 2) : $nan_message,
            'price_eur' => isset($bitcoin['price_eur']) ? round($bitcoin['price_eur'], 2) : $nan_message,
            'price_aud' => isset($bitcoin['price_aud']) ? round($bitcoin['price_aud'], 2) : $nan_message,

            'hour' => isset($bitcoin['percent_change_1h']) ? round($bitcoin['percent_change_1h'], 2) : $nan_message,
            'day' => isset($bitcoin['percent_change_24h']) ? round($bitcoin['percent_change_24h'], 2) : $nan_message,
            'week' => isset($bitcoin['percent_change_7d']) ? round($bitcoin['percent_change_7d'], 2) : $nan_message,
        ];

        return view('home')->with($data);
    }
}
