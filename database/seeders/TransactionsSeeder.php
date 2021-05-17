<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Transaction;

use App\Models\Balance;

use App\Models\User;

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
    }
}
