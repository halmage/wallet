<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'transaction'], function() 
{	
	Route::post('/load-wallet', [App\Http\Controllers\User\TransactionController::class, 'loadWallet']);

	Route::post('/check-balance', [App\Http\Controllers\User\TransactionController::class, 'checkBalance']);

	Route::get('/your-balance/{id}', [App\Http\Controllers\User\TransactionController::class, 'yourBalance']);

	Route::post('pay', [App\Http\Controllers\User\TransactionController::class, 'pay']);

	Route::post('paymer-confirmation', [App\Http\Controllers\User\TransactionController::class, 'paymerConfirmation']);
});