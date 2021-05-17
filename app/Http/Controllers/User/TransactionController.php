<?php

namespace App\Http\Controllers\User;

use App\Http\Helper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/* Importando repositories */
use App\Repositories\User\Transaction\TransactionRepositories;

class TransactionController extends Controller
{
	public function __construct(TransactionRepositories $transaction)
    {
        $this->transaction = $transaction;
    }

    /*
    | Funciones para recargar billetera
     */
    public function loadWallet(Request $request)
    {        
    	$request = Helper::apiRequest($request);
    	$user = $this->transaction->findUserWallet($request);
    	if(!$user){
    		return response()->json([
                'status' => 'Ocurrio un error!',
                'message' => 'El documento o telefono no coincide con del usuario'], 401);
    	}
    	
        $this->transaction->transactionWallet($request,$user);
		$this->transaction->loadWallet($request,$user);
		return response()->json([
            'status' => 'Muy bien!',
            'message' => 'La recarga de la billetera fue exitosa'],200);  
    }

    /*
    | Funciones para pagar billetera
     */
    
    public function pay(Request $request){

       $request = Helper::apiRequest($request);
       $user = $this->transaction->findUserWallet($request);
       if(!$user){
            return response()->json([
                'status' => 'Ocurrio un error!',
                'message' => 'El documento o telefono no coincide con del usuario'], 401);
        }

        /* 
         * Consultando el saldo del usuario entes de continuar la operacion 
         * */
        $balance = $this->transaction->checkBalanceBeforePay($user);

        /* 
         * Verificando si el usuario tiene saldo suficiente para el pago 
         * */
        if($balance < $request->transaction){
            return response()->json([
                'status' => 'Ocurrio un error!',
                'message' => 'Su saldo es insuficiente para realizar este pago'], 401);
        }

        /* 
         * Guardano transaccion hecha por el usuario 
         * */
        $transaction = $this->transaction->transactionWallet($request,$user);
        
        /* 
         * Guardano cookie y token de la transaccion 
         * */
        $this->transaction->storePaymerConfirmation($transaction);        

        return response()->json([
            'status' => 'Muy bien!',
            'message' => 'Porfavor revise su correo, que le hemos enviado un token para verificar pago'],200);
    }

    public function paymerConfirmation(Request $request)
    {
        $request = Helper::apiRequest($request);
        $token = $this->transaction->findToken($request);                 

        // Verificando si es el token
        if(!$token)
        { 
            return response()->json([
                'status' => 'Ocurrio un error!',
                'message' => 'El token ingresado no coincide con la transaccion porfavor revise su correo'], 401);
        }

        // tomado el valor de la session donde inicio el usuario        
        $session_id = $this->transaction->checkSession($token); 

        // Verificando si es la sesión donde se realizo el pago
        if(!password_verify($_COOKIE["laravel_session"],$session_id))
        { 
            return response()->json([
                'status' => 'Ocurrio un error!',
                'message' => 'El token ingresado no coincide con la transaccion porfavor revise su correo'], 401);
        }        
        
        /* Realizando pago */
        $this->transaction->pay($token);
        return response()->json([
        'status' => 'Muy bien!',
        'message' => 'El pago se hizo exitosamente'],200);
    }

    /*
    | Funciones para consultar billetera
     */
    public function checkBalance(Request $request)
    {
        $request = Helper::apiRequest($request);
        $user = $this->transaction->findUserWallet($request);
        
        if(!$user){
            return response()->json([
                'status' => 'Ocurrio un error!',
                'message' => 'El documento o telefono no coincide con del usuario'], 401);
        }
        
        return response()->json([
            'user' => $user,
            'status' => 'Muy bien!',
            'message' => 'Consulta de usuario exitosa'],200);  
    }

    public function yourBalance($id)
    {
        $balance = $this->transaction->checkBalance($id);
        return response()->json([
            'balance' => $balance,
            'status' => 'Muy bien!',
            'message' => 'Consulta de saldo exitosa'],200);  
    }

}
