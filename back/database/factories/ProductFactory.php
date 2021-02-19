<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->word;
        return [
            'category_id' => Category::factory(),
            'title' => $title,
            'hit' => $this->faker->randomElement([true, false]),
            'newest' => $this->faker->randomElement([true, false]),
            'link' => Str::slug($title),
            'image' => 'https://picsum.photos/' . $this->faker->numberBetween(100, 600) . '/' . $this->faker->numberBetween(100, 600),
            'desc' => $this->faker->paragraph,
            'price' => $this->faker->numberBetween(10, 10000),
        ];
    }
}
