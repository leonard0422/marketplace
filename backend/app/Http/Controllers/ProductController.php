<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; 
use  App\Models\ProductDetail;
use PhpParser\Node\Stmt\Foreach_;

class ProductController extends Controller
{
    public function add (Request $request){

        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
        ];

        $product = Product::create($data);

        foreach ($request->detalles as $detalle) {
            foreach ($detalle['info'] as $info) {
                $product_datalle = [
                    'color' => $detalle['color'],
                    'size' => $info['talla'],
                    'quantity' => $info['cantidad'],
                    'product_id' => $product->id
                ];
                ProductDetail::create($product_datalle);
            }
        }

        return $product;
    }
}
