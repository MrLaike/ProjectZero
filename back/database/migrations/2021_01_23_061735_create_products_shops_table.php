<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_shops', function (Blueprint $table) {
            $table->bigInteger('product_id')->unsigned();
            $table->bigInteger('shop_id')->unsigned();
            $table->bigInteger('quantity')->unsigned();

            $table->foreign('product_id')
                ->references('id')
                ->on('products')
                ->cascadeOnDelete();
            $table->foreign('shop_id')
                ->references('id')
                ->on('shops')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products_shops');
    }
}
