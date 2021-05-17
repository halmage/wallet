<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $table = 'transactions';

    protected $fillable = [
    	'type_transaction',
        'transaction',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function paymentConfirmation()
    {
        return $this->hasOne('App\Models\PaymentConfirmation');
    }
}
