<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Exception;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login()
    {

        $credentials = request(['email', 'password']);

        try {
            // if (!$token = auth()->attempt($credentials)) {
            //     return response()->json(['error' => 'Unauthorized'], 401);
            // }
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'could_not_create_token',
                'especific_error' => $e->getMessage(),
            ], 500);
        }

        $user = auth()->user();

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response()->json($response);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
            'last_name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create(array_merge(
            $request->all(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'message' => 'User register succesfully',
            'user' => $user
        ], 201);
    }

    public function validateRole()
    {
        return response()->json(auth()->user()->role);
    }
}
