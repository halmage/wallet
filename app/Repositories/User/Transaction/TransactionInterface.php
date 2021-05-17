<?php

namespace App\Repositories\User\Transaction;

interface TransactionInterface{
	/* Metodos para recargar billetera */
	public function findUserWallet($request);


	public function transactionWallet($request,$user);	

	public function loadWallet($request,$user);

	/* Metodos para pagar */
	public function checkBalanceBeforePay($user);

	public function storePaymerConfirmation($transaction);

	public function findToken($token);

	public function checkSession($token);

	public function pay($token);

	/* Metodos para consultar saldo */
	public function checkBalance($id);

}