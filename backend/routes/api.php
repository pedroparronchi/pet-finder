<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

/**
 * Open routes
 */
Route::apiResource('pets', 'PetController')->only('index', 'show');
Route::apiResource('owners', 'PetOwnerController')->only('store');

Route::group(['prefix' => 'communiques','as' => 'communiques.'], function (){
    Route::post('{pet}', 'CommuniqueController@store');
});
//Route::apiResource('communiques', 'CommuniqueController')->except('index');
/**
 * Auth Routes
 */
Route::group(['middleware' => 'auth:api'], function(){
    Route::apiResource('pets', 'PetController')->except('index', 'show');
    // Route::apiResource('owners', 'PetOwnerController')->except('index');
    Route::get('owners/pets', 'PetOwnerController@pets')->name('owners.pets');
});
