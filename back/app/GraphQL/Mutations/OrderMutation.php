<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations;

use App\Models\Order;
use Closure;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\SelectFields;

class OrderMutation extends Mutation
{
    protected $attributes = [
        'name' => 'order',
        'description' => 'A mutation'
    ];

    public function type(): Type
    {
        return GraphQL::type('order');
    }

    public function args(): array
    {
        return [
            'fullName' => [
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
            'totalPrice' => [
                'type' => Type::float(),
            ],
            'products' => [
                'type' => Type::listOf(Type::int()),
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields, Order $order)
    {
        $ordered = $order->store($args);
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();

        return $ordered;
    }
}
