<?php

namespace App\Http\Controllers;

use App\Models\Set;
use Illuminate\Http\Request;

class SetController extends Controller
{
    public function add(Request $request)
    {
        $set = Set::create($request->all());
        return response()->json(['message' => 'Set was created', 'data' => $set], 201);
    }

    public function getAll(){
        return response()->json(Set::all(), 200);
    }
    
    public function get($id) {
        return response()->json(Set::find($id), 200);
    }

    public function update($id, Request $request){
        $set = Set::where('id', $id)->update($request->all());
        if($set){
            return response()->json([ 'message' => 'Set was updated.'], 200);
        }
        else {
            return response()->json([ 'message' => 'Set not found.'], 200);
        }
    }

    public function destroy($id){
        $set = Set::destroy($id);
        if($set) {
            return response()->json(['message' => 'Set removed', 'data' => $set], 200);
        }
        else {
            return response()->json(['message' => 'Set not found', 'data' => $set], 200);
        }
    }
}
