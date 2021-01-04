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
                'description' => 'id'
            ],
            'title' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'title'
            ],
            'desc' => [
                'type' => Type::string(),
                'description' => 'desc'
            ],
            'price' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'price'

            ],
            'image' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'image'
            ],
            'link' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'link'
            ],
            'currency' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'currency'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'updated'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'created'
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
