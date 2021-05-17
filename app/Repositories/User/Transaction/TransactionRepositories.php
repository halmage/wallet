<?php

namespace App\Repositories\User\Transaction;

use App\Http\Helper;

/* Importando modelos */
use App\Models\User;
use App\Models\Transaction;
use App\Models\PaymentConfirmation;

Class TransactionRepositories implements TransactionInterface
{
	/* Metodos para recargar billetera */
	public function findUserWallet($request)
	{
		return User::where('document',$request->document)
    	      ->where('telephone',$request->telephone)
    	      ->first();
	}

	public function transactionWallet($request,$user)
	{
		return Transaction::create([
			"type_transaction" => $request->type_transaction,
			"transaction" => $request->transaction,
			"user_id" => $user->id
		]);
	}

	public function loadWallet($request,$user)
	{
		$load_balance = $user->balance->balance + $request->transaction;

		$user->balance->update([
			"balance" => $load_balance
		]);
	}

	/* Metodos para pagar */
	public function checkBalanceBeforePay($user)
	{
		$balance = $user->balance->balance;
		return $balance;
	}

	public function storePaymerConfirmation($transaction)
	{	
		$cookie = Helper::cookie();
		$token = Helper::token();
		PaymentConfirmation::create([
            'token' => $token,
            'session_id' => $cookie,
            'transaction_id' => $transaction->id
        ]);
	}

	public function findToken($request)
	{
		return PaymentConfirmation::where("token",$request->token)->first();
	}	

	public function checkSession($token)
	{
		return $token->session_id;
	}

	public function pay($token)
	{		
		$balance = $token->transaction->user->balance;
		$transaction = $token->transaction;
		$pay =  $balance->balance - $transaction->transaction;

		$balance->update([
			"balance" => $pay
		]);
	}

	/* Metodos para consultar saldo */
	public function checkBalance($id)
	{
		return User::find($id)->balance->balance;
	}
	
}