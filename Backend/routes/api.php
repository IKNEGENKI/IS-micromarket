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
Route::get('/obtenerProductos/{codprod}',[productosController::class,'show']);
Route::post('/postProductos', [productosController::class,'store']);
Route::delete('/delProductos/{codprod}', [productosController::class,'destroy']);
Route::put('/putProductos/{codprod}', [productosController::class,'update']);



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
Route::get('/getCliente',[clienteController::class,'index']);
Route::post('/postCliente', [clienteController::class, 'store']);
Route::delete('/delCliente/{id}',[clienteController::class,'destroy']);
Route::put('/putCliente/{id}', [clienteController::class,'update']);

//RUTAS PARA AGREGAR VENTA
Route::get('/getVenta',[ventaController::class,'index']);
Route::post('/postDenta', [ventaController::class,'store']);
Route::delete('/delVenta/{id}',[ventaController::class,'destroy']);
Route::put('/putVenta/{id}', [ventaController::class,'update']);
Route::post('/crearVenta/{id}/{id2}', [ventaController::class,'crearVenta']);

//RUTAS PARA AGREGAR DETALLE_VENTA
Route::get('/getDetalle_venta',[detalle_ventaController::class,'index']);
Route::post('/postDetalle_venta', [detalle_ventaController::class,'store']);
Route::delete('/delDetalle_venta/{id}',[detalle_ventaController::class,'destroy']);
Route::put('/putDetalle_venta/{id}', [detalle_ventaController::class,'update']);
