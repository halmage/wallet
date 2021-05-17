<?php
namespace App\Http;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class Helper
{
	/* 
	 * apiRequest, convierte el array traido de la api en peticion 
	 */
	static public function apiRequest($request)
	{
		$request = new Request($request->data);
		return $request;
	}

	/* 
	 * apiRequest, convierte el array traido de la api en peticion 
	 */
	static public function cookie()
	{	
		return Hash::make($_COOKIE["laravel_session"]);
	}

	/* 
	 * token, genera el token para confirmar pago 
	 */
	static public function token()
	{	
		return rand(100000,999999);
	}
}