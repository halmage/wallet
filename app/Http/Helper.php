<?php
namespace App\Http;

use Illuminate\Http\Request;

class Helper
{
	/* 
	 * apiRequest, convierte el array traido de la api en peticion 
	 */
	static public function apiRequest($request)
	{
		//dd($_COOKIE["laravel_session"]);
		$request = new Request($request->data);
		return $request;
	}
}