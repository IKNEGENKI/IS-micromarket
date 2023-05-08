<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\producto;
use Illuminate\Support\Facades\DB;

class productosController extends Controller
{

    public function index()
    {
        // Obtener todos los producto de la base de datos
        $producto = producto::all();
        //$categoria = categoria::all();

         // Retornar los productos como respuesta
         return $producto;
        // Retornar los producto como respuesta
        //return response()->json(['producto' => $producto], 200);
    }

    public function create(Request $request)
    {
      //
    }


    public function store(Request $request)
{
   
    $producto = new producto([
        'producto' => $request->input('producto'),
        'marca' => $request->input('marca'),
        'desc' => $request->input('desc'),
        'precio' => $request->input('precio'),
        'image' => $request->input('image'),
        'codcat' => $request->input('codcat'),
        'stock' => $request ->input('stock')
    ]);

    // Guardar el nuevo producto en la base de datos
    $producto->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'Producto creado con éxito'], 201);
}

public function update(Request $request, $id)
{
    
    // Buscar el producto existente en la base de datos por su ID
    $producto = producto::findorfail($id);
    // Actualizar los datos del producto con los datos del formulario
    $producto->producto = $request->input('producto');
    $producto->marca = $request->input('marca');
    $producto->desc = $request->input('desc');
    $producto->precio = $request->input('precio');
    $producto->image = $request->input('image');
    $producto->codcat = $request->input('codcat');
    $producto->stock = $request->input('stock');
    // Guardar los cambios en la base de datos
    $producto->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'Producto actualizado con éxito'], 200);
  }

    
        public function destroy(string $id)
    {
          // Encuentra la categoría por su ID
        $producto = producto::find($id);
         // Verifica si la categoría existe
         if (!$producto) {
            return response()->json(['mensaje' => 'Producto no encontrado'], 404);
        }

        // Realiza la eliminación
        $producto->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'producto eliminado'], 200);
    }


}