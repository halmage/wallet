<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;

use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
	        'document' => '24130237',
	        'name' => 'hugo',
	        'last_name' => 'zorrilla',
	        'telephone' => '04148125531',
	        'email' => 'hugo_zorrilla@gmail.com',
	        'password' => Hash::make(12345678),
        ]);
    }
}
