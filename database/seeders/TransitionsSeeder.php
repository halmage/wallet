<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Transition;

class TransitionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Transition::create([
        	'type_transition' => 'pago',
	        'transition' => 7000,
	        'user_id' => 1,
        ]);

        Transition::create([
        	'type_transition' => 'recarga',
	        'transition' => 2000,
	        'user_id' => 1,
        ]);

        Transition::create([
        	'type_transition' => 'recarga',
	        'transition' => 5000,
	        'user_id' => 1,
        ]);
    }
}
