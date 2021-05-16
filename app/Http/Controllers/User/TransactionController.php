<?php

namespace App\Http\Controllers\User;

use App\Http\Helper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/* Importando repositories */
use App\Repositories\User\Transaction\TransactionRepositories;

use App\Models\User;

class TransactionController extends Controller
{
	public function __construct(TransactionRepositories $transaction)
    {
        $this->transaction = $transaction;
    }

    public function loadWallet(Request $request)
    {
    	$request = Helper::apiRequest($request);
    	$user = $this->transaction->findUserForLoadWallet($request);
    	if(!$user){
    		return response()->json([
                'status' => 'Ocurrio un error!',
                'message' => 'El documento o telefono no coincide con del usuario'], 401);
    	}
    	
		$this->transaction->loadWallet($request,$user);
		return response()->json([
            'status' => 'Muy bien!',
            'message' => 'La recarga de la billetera fue exitosa'],200);  
    }

}
