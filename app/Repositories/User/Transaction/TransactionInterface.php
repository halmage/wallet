<?php

namespace App\Repositories\User\Transaction;

interface TransactionInterface{
	public function findUserWallet($request);
	
	public function transactionWallet($request,$user);	

	public function loadWallet($request,$user);
}