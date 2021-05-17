<?php

namespace Database\Seeders;

use App\Http\Helper;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Hash;

use App\Models\User;

use App\Models\Balance;

use App\Models\Transaction;

use App\Models\PaymentConfirmation;

class TransactionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Transaction::create([
        	'type_transaction' => 'recarga',
	        'transaction' => 7000,
	        'user_id' => 1,
        ]);

        Transaction::create([
        	'type_transaction' => 'recarga',
	        'transaction' => 2000,
	        'user_id' => 1,
        ]);

        Transaction::create([
        	'type_transaction' => 'recarga',
	        'transaction' => 5000,
	        'user_id' => 1,
        ]);

        Balance::create([
            'balance' => User::find(1)->transactions->where('type_transaction','recarga')->sum('transaction'),
            'user_id' => 1,
        ]);

        PaymentConfirmation:: create([
            'token' => Helper::token(),
            'session_id' => Hash::make(Helper::token()),
            'transaction_id' => '1'
        ]);

        PaymentConfirmation:: create([
            'token' => Helper::token(),
            'session_id' => Hash::make(Helper::token()),
            'transaction_id' => '2'
        ]);

        PaymentConfirmation:: create([
            'token' => Helper::token(),
            'session_id' => Hash::make(Helper::token()),
            'transaction_id' => '3'
        ]);
    }
}
