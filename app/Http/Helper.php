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
		$request = new Request($request->data);
		return $request;
	}
}