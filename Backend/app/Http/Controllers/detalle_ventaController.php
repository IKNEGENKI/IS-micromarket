<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\detalle_venta;
use App\Models\producto;
use Illuminate\Support\Facades\DB;
class detalle_ventaController extends Controller
{
    public function index()
    {
        $detalle = detalle_venta::all();
        return response()->json($detalle);
    }

    public function store(Request $request)
    {
        $detalle = new detalle_venta([
            'codprod' => $request->input('codprod'),
            'cantidadprod' => $request->input('cantidadprod'),
            'costodetalle' => $request->input('costodetalle'),
        ]);
    
        // Guardar el nuevo producto en la base de datos
        $detalle->save();
    
        // Retornar una respuesta de éxito
        return response()->json(['mensaje' => 'detalle guardado'], 201);
    }

    public function update(Request $request, $id)
{
    
    // Buscar el producto existente en la base de datos por su ID
    $detalle = detalle_venta::findorfail($id);
    // Actualizar los datos del producto con los datos del formulario
    $detalle->producto = $request->input('codprod');
    $detalle->marca = $request->input('cantidadprod');
    $detalle->desc = $request->input('costodetalle');
    // Guardar los cambios en la base de datos
    $detalle->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'detalle actualizado con éxito'], 200);
  }

  
}
