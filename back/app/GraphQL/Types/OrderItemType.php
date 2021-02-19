<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Models\Order;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class OrderItemType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Order',
        'description' => 'A type',
        'model' => Order::class,
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::int(),
            ],
            'fullName' => [
                'name' => 'fullName',
                'type' => Type::string(),
                'description' => 'title'
            ],
            'phone' => [
                'name' => 'phone',
                'type' => Type::string(),
                'description' => 'phone'
            ],
            'email' => [
                'name' => 'email',
                'type' => Type::string(),
                'description' => 'email'
            ],
            'address' => [
                'name' => 'address',
                'type' => Type::string(),
                'description' => 'address'
            ],
            'totalPrice' => [
                'name' => 'totalPrice',
                'type' => Type::float(),
                'description' => 'total price'
            ],
        ];

    }
}
