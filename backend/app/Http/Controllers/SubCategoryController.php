<?php

namespace App\Http\Controllers;

use App\Models\Subcategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    public function add(Request $request)
    {
        $subCategory = Subcategory::create($request->all());
        return response()->json(['message' => 'SubCategory was created', 'data' => $subCategory], 201);
    }

    public function getAll()
    {
        $subCategoryJoin = Subcategory::join("categories", "subcategories.category_id", "=", "categories.id")
            ->select("subcategories.*", "categories.description as category", "categories.id as category_id")
            ->get();
        return response()->json($subCategoryJoin, 200);
    }

    public function get($id)
    {
        return response()->json(Subcategory::find($id), 200);
    }

    public function update($id, Request $request)
    {
        $subCategory = Subcategory::where('id', $id)->update($request->all());
        if ($subCategory) {
            return response()->json(['message' => 'SubCategory was updated.'], 200);
        } else {
            return response()->json(['message' => 'SubCategory not found.'], 200);
        }
    }

    public function destroy($id)
    {
        $subCategory = Subcategory::destroy($id);
        if ($subCategory) {
            return response()->json(['message' => 'Category removed', 'data' => $subCategory], 200);
        } else {
            return response()->json(['message' => 'Category not found', 'data' => $subCategory], 200);
        }
    }
}
