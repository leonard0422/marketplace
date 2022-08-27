<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SetController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\SubCategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);

    Route::group(['middleware' => ['jwt.verify']], function () {

        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('refresh', [AuthController::class, 'refresh']);
        Route::get('me', [AuthController::class, 'me']);
        Route::get('validate', [AuthController::class, 'validateRole']);
    });
});

Route::group(['prefix' => 'client'], function () {

    // Rutas de categorias
    Route::prefix('category')->group(function () {

        Route::get('get', [CategoryController::class, 'getAll']);
        Route::get('get/{id}', [CategoryController::class, 'get']);
        Route::get('list', [CategoryController::class, 'list']);
    });

    // Rutas de sub-categorias
    Route::prefix('subcategory')->group(function () {

        Route::get('get', [SubCategoryController::class, 'getAll']);
        Route::get('get/{id}', [SubCategoryController::class, 'get']);
    });

    // Rutas de conjuntas
    Route::prefix('set')->group(function () {

        Route::get('get', [SetController::class, 'getAll']);
        Route::get('get/{id}', [SetController::class, 'get']);
    });

    // Rutas de slider
    Route::prefix('slider')->group(function () {

        Route::get('get', [SliderController::class, 'getAll']);
    });


});

Route::group(['prefix' => 'admin'], function () {
    Route::middleware(['jwt.verify', 'isAdmin'])->group(function () {

        // Rutas de categorias
        Route::prefix('category')->group(function () {

            Route::get('get', [CategoryController::class, 'getAll']);
            Route::get('get/{id}', [CategoryController::class, 'get']);
            Route::post('add', [CategoryController::class, 'add']);
            Route::put('update/{id}', [CategoryController::class, 'update']);
            Route::delete('delete/{id}', [CategoryController::class, 'destroy']);
        });

        // Rutas de sub-categorias
        Route::prefix('subcategory')->group(function () {

            Route::get('get', [SubCategoryController::class, 'getAll']);
            Route::get('get/{id}', [SubCategoryController::class, 'get']);
            Route::post('add', [SubCategoryController::class, 'add']);
            Route::put('update/{id}', [SubCategoryController::class, 'update']);
            Route::delete('delete/{id}', [SubCategoryController::class, 'destroy']);
        });

        // Rutas de conjuntas
        Route::prefix('set')->group(function () {

            Route::get('get', [SetController::class, 'getAll']);
            Route::get('get/{id}', [SetController::class, 'get']);
            Route::post('add', [SetController::class, 'add']);
                Route::put('update/{id}', [SetController::class, 'update']);
            Route::delete('delete/{id}', [SetController::class, 'destroy']);
        });

        // Rutas de slider
        Route::prefix('slider')->group(function () {

            Route::get('get', [SliderController::class, 'getAll']);
            Route::get('list-main', [SliderController::class, 'getAllManSlider']);
            Route::get('get/{id}', [SliderController::class, 'get']);
            Route::post('add', [SliderController::class, 'add']);
            Route::post('update/{id}', [SliderController::class, 'update']);
            Route::delete('delete/{id}', [SliderController::class, 'destroy']);
        });

        Route::prefix('product')->group(function () {
            Route::post('add', [ProductController::class, 'add']);
        });
    });
});
