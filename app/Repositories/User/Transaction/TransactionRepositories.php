<?php

namespace App\Repositories\User\Transaction;

/* Importando modelos */
use App\Models\User;
use App\Models\Transaction;

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
		Transaction::create([
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
}