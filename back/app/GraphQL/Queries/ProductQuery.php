<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Models\Product;
use Closure;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;

class ProductQuery extends Query
{
    protected $attributes = [
        'name' => 'product',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return GraphQL::type('product');
    }

    public function args(): array
    {
        return [
            'link' => [
                'name' => 'link',
                'type' => Type::string(),
                'rules' => ['required']
            ],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();

        return Product::where('link', $args['link'])->first();
    }
}
