<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Models\Order;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class OrderType extends GraphQLType
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
                'type' => Type::int(),
            ],
            'full_name' => [
                'type' => Type::string(),
            ],
            'phone' => [
                'type' => Type::string(),
            ],
            'email' => [
                'type' => Type::string(),
            ],
            'address' => [
                'type' => Type::string(),
            ],
            'total_price' => [
                'type' => Type::float(),
            ],
            'products' => [
                'type' => Type::listOf(Type::int()),
            ]
        ];

    }
}
