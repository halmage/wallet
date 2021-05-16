<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Transaction;

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
        	'type_transaction' => 'pago',
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
    }
}
