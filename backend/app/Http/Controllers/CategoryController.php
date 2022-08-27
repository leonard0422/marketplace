<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function add(Request $request)
    {
        $category = Category::create($request->all());
        return response()->json(['message' => 'Category was created', 'data' => $category], 201);
    }

    public function getAll(){
        return response()->json(Category::all(), 200);
    }
    
    public function get($id) {
        return response()->json(Category::find($id), 200);
    }

    public function list(){
        $result = [];
        $categories = Category::all();
        foreach ($categories as $category ) {
            $subCategories = Subcategory::all()->where('category_id', $category['id']);
            $category['subCategories'] = $subCategories;
            $result[] = $category;
        }

        return response()->json($result, 200);
    }

    public function update($id, Request $request){
        $category = Category::where('id', $id)->update($request->all());
        if($category){
            return response()->json([ 'message' => 'Category was updated.'], 200);
        }
        else {
            return response()->json([ 'message' => 'Category not found.'], 200);
        }
    }

    public function destroy($id){
        $category = Category::destroy($id);
        if($category) {
            return response()->json(['message' => 'Category removed', 'data' => $category], 200);
        }
        else {
            return response()->json(['message' => 'Category not found', 'data' => $category], 200);
        }
    }
}
