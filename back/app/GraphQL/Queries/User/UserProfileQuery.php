<?php

declare(strict_types=1);

namespace App\GraphQL\Queries\User;

use App\Models\User;
use Closure;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;

class UserProfileQuery extends Query
{
    protected $attributes = [
        'name' => 'user/UserProfile',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('user'));
    }

    public function args(): array
    {
        return [

        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $user = new User();
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();

        return $user->get();
    }
}
