<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentConfirmation extends Model
{
    use HasFactory;

    protected $table = 'payment_confirmations';

    protected $fillable = [
    	'token',
        'session_id',
        'transaction_id',
    ];

     public function transaction()
    {
        return $this->belongsTo('App\Models\Transaction');
    }
}
