<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\categoriaController;
use App\Http\Controllers\productosController;
use App\Http\Controllers\stockController;
use App\Http\Controllers\tiendasController;
use App\Http\Controllers\inventarioController;
use App\Http\Controllers\ofertaController;
use App\Http\Controllers\clienteController;
use App\Http\Controllers\ventaController;
use App\Http\Controllers\detalle_ventaController;


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

/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
/*
Route::resource('api_categorias',categoriaController::class);

Route::resource('api_productos',productosController::class);

Route::resource('api_lotes',lotesController::class);

Route::resource('api_tiendas',tiendasController::class);

Route::resource('api_inventarios',inventarioController::class);

//Route::resource('api_oferta',ofertaController::class);
*/



//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR TIENDA DESDE FORMULARIO
Route::get('/getTiendas', [tiendasController::class,'index']);
Route::post('/postTiendas', [tiendasController::class,'store']);
Route::delete('/delTiendas/{codtienda}', [tiendasController::class,'destroy']);
Route::put('/putTiendas/{codtienda}', [tiendasController::class,'update']);

//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR PRODUCTOS DESDE FORMULARIO
Route::get('/getProductos',[productosController::class,'index']);
Route::post('postProductos', [productosController::class,'store']);
Route::delete('delProductos/{codprod}', [productosController::class,'destroy']);
Route::put('putProductos/{codprod}', [productosController::class,'update']);



//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR CATEGORIA DESDE FORMULAR

Route::get('/getCategorias', [categoriaController::class,'index']);
Route::post('/postCategorias',  [categoriaController::class,'create']);
Route::delete('/delCategorias/{id}',  [categoriaController::class,'destroy']);
Route::put('/putCategorias/{id}',  [categoriaController::class,'update']);


//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR OFERTA DESDE FORMULAR
Route::get('/getOferta',[ofertaController::class,'index']);
Route::post('/postOferta', [ofertaController::class,'store']);
Route::delete('/delOferta/{id}', [ofertaController::class,'destroy']);
Route::put('/putOferta/{id}', [ofertaController::class,'update']);

//RUTAS PARA AGREGAR STOCK(LOTE)

Route::get('/getStock',[stockController::class,'index']);
Route::post('/postStock', [stockController::class,'store']);
Route::delete('/delStock/{id}',[stockController::class,'destroy']);
Route::put('/putStock/{id}', [stockController::class,'update']);


//RUTAS PARA AGREGAR CLIENTE

Route::get('/cliente.index',[clienteController::class,'index']);
Route::post('/cliente.store', [clienteController::class,'store']);
Route::delete('/cliente.destroy/{id}',[clienteController::class,'destroy']);
Route::put('/cliente.update/{id}', [clienteController::class,'update']);

Route::get('/venta.index',[ventaController::class,'index']);
Route::post('/venta.store', [ventaController::class,'store']);
Route::delete('/venta.destroy/{id}',[ventaController::class,'destroy']);
Route::put('/venta.update/{id}', [ventaController::class,'update']);

Route::get('/detalle_venta.index',[detalle_ventaController::class,'index']);
Route::post('/detalle_venta.store', [detalle_ventaController::class,'store']);
Route::delete('/detalle_venta.destroy/{id}',[detalle_ventaController::class,'destroy']);
Route::put('/detalle_venta.update/{id}', [detalle_ventaController::class,'update']);
