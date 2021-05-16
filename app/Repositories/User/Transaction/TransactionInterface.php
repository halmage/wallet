<?php

namespace App\Repositories\User\Transaction;

interface TransactionInterface{
	public function findUserForLoadWallet($request);
	
	public function loadWallet($request,$user);	
}