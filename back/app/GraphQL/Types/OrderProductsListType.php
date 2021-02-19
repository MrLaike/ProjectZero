<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use Rebing\GraphQL\Support\Type as GraphQLType;

class OrderProductsListType extends GraphQLType
{
    protected $attributes = [
        'name' => 'OrderProductsList',
        'description' => 'A type'
    ];

    public function fields(): array
    {
        return [

        ];
    }
}
