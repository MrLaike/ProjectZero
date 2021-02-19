<?php

namespace App\Models;

use App\Http\Resources\OrderResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'total_price',
    ];

    public function store($request) {
        if(empty($request['totalPrice'])) $request['totalPrice'] = 1;

        $order = $this->create([
            'full_name' => $request['fullName'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'total_price' => $request['totalPrice'],
        ]);
        $order->products()->attach($request['products']);
        //validation
        return OrderResource::make($order);
    }

    public function products() {
        return $this->belongsToMany(Product::class, 'products_orders');
    }
}
