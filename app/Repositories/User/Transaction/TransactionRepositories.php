<?php

namespace App\Repositories\User\Transaction;

/* Importando modelos */
use App\Models\User;
use App\Models\Transaction;

Class TransactionRepositories implements TransactionInterface
{
	/* Metodos para recargar billetera */
	public function findUserForLoadWallet($request)
	{
		return User::where('document',$request->document)
    	      ->where('telephone',$request->telephone)
    	      ->first();
	}

	public function loadWallet($request,$user)
	{
		Transaction::create([
			"type_transaction" => $request->type_transaction,
			"transaction" => $request->transaction,
			"user_id" => $user->id
		]);
	}
}