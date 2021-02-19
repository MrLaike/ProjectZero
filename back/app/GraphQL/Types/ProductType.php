<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ProductType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Product',
        'description' => 'A type'
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
            ],
            'title' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'desc' => [
                'type' => Type::string(),
            ],
            'price' => [
                'type' => Type::nonNull(Type::int()),
            ],
            'image' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'link' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'currency' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'updated_at' => [
                'type' => Type::string(),
            ],
            'created_at' => [
                'type' => Type::string(),
            ]
        ];
    }

    protected function resolveCreatedAtField($root, $args)
    {
        return (string) $root->created_at;
    }

    protected function resolveUpdatedAtField($root, $args)
    {
        return (string) $root->updated_at;
    }
}
