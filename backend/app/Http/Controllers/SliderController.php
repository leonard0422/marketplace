<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SliderController extends Controller
{
    public function add(Request $request)
    {
        if(isset($request->sub_slider)) $sub_slider = $request->sub_slider;
        else $sub_slider = null;
        if(null !== $request->file('0') ){
            $image = $request->file('0')->store('public/slider');
            $slider = [
                'name' => $request->name,
                'url_image' => Storage::url($image),
                'href' => $request->href,
                'sub_slider' => $sub_slider,
            ];
        }else{
            $slider = [
                'name' => $request->name,
                'href' => $request->href,
                'sub_slider' => $sub_slider,
            ];
        }
     

        return response()->json(['message' => 'Slider was created', 'data' => Slider::create($slider)], 201);
    }

    public function getAll()
    {
        $result = [];
        $sliders = Slider::all()->where('sub_slider', null);
        foreach ($sliders as $slider)
        {
            $slider['sub_sliders'] = Slider::all()->where('sub_slider', $slider->id);
            $result[] = $slider;
        }
        return response()->json($result, 200);
    }

    public function getAllManSlider()
    {
        return response()->json(Slider::all()->where('sub_slider', null), 200);
    }
    
    public function get($id) 
    {
        $slider = Slider::find($id);
        if($slider) 
        {
            $slider['sub_sliders'] = Slider::all()->where('sub_slider', $slider->slider);
            return response()->json($slider, 200);
        }
        return response()->json($slider, 404);
    }

    public function update($id, Request $request)
    {
        if(isset($request->sub_slider)) $sub_slider = $request->sub_slider;
        else $sub_slider = null;
        
       if(null !== $request->file('0')) {
            $image_name = explode('/', Slider::find($id)->url_image)[3];
            Storage::delete('public/slider/' . $image_name);

            $image = $request->file('0')->store('public/slider');

            $slider = [
                'name' => $request->name,
                'url_image' => Storage::url($image),
                'href' => $request->href,
                'sub_slider' => $sub_slider,
            ];
        } else {
            $slider = [
                'name' => $request->name,
                'href' => $request->href,
                'sub_slider' => $sub_slider,
            ];
        }

        $Slider = Slider::where('id', $id)->update($slider);
        if($Slider) return response()->json([ 'message' => 'Slider was updated.'], 200);
        else return response()->json([ 'message' => 'Slider not found.'], 404);
    }

    public function destroy($id)
    {
        $Slider = Slider::destroy($id);
        Slider::where('sub_slider', $id)->delete();
        if($Slider) 
        {
            return response()->json(['message' => 'Slider removed', 'data' => $Slider], 200);
        }
        else 
        {
            return response()->json(['message' => 'Slider not found', 'data' => $Slider], 404);
        }
    }
}
