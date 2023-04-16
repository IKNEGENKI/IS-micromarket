<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\producto;
use Illuminate\Support\Facades\DB;

class productosController extends Controller
{

    public function index()
    {
        // Obtener todos los productos de la base de datos
        $productos = Productos::all();

        // Retornar los productos como respuesta
        return response()->json(['productos' => $productos], 200);
    }

    public function create(Request $request)
    {
        // Validar los datos del formulario de creación
        $rules=[
            'producto' => 'required|min:2|max:30',
            'marca'=>'required|min:2|max:15',
            'descripcion'=>'required|min:25|max:100',
            'precio'=>'required|max:7',
            'image'=>'required|max:255',
            'codcat'=>'required | exists:categorias,codcat'
        ];
        $request->validate($rules);
        // Crear una nueva instancia del modelo Productos con los datos del formulario
        $producto = new Productos([
            'producto' => $request->input('producto'),
            'marca' => $request->input('marca'),
            'descripcion' => $request->input('descripcion'),
            'precio' => $request->input('precio'),
            'image' => $request->input('image'),
            'codcat' => $request->input('codcat')
        ]);

        // Guardar el nuevo producto en la base de datos
        $producto->save();

        // Retornar una respuesta de éxito
        return response()->json(['mensaje' => 'Producto creado con éxito'], 201);
    }


    public function store(Request $request)
{
    // Validar los datos del formulario de creación
    $rules=[
        'producto' => 'required|min:2|max:30',
        'marca'=>'required|min:2|max:15',
        'descripcion'=>'required|min:25|max:100',
        'precio'=>'required|max:7',
        'image'=>'required|max:255',
        'codcat'=>'required | exists:categorias,codcat'
    ];
    $request->validate($rules);
    // Crear una nueva instancia del modelo Productos con los datos del formulario
    $producto = new Productos([
        'producto' => $request->input('producto'),
        'marca' => $request->input('marca'),
        'descripcion' => $request->input('descripcion'),
        'precio' => $request->input('precio'),
        'image' => $request->input('image'),
        'codcat' => $request->input('codcat')
    ]);

    // Guardar el nuevo producto en la base de datos
    $producto->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'Producto creado con éxito'], 201);
}

public function update(Request $request, $id)
{
    // Validar los datos del formulario de actualización
    $rules=[
        'producto' => 'required|min:2|max:30',
        'marca'=>'required|min:2|max:15',
        'descripcion'=>'required|min:25|max:100',
        'precio'=>'required|max:7',
        'image'=>'required|max:255',
        'codcat'=>'required | exists:categorias,codcat'
    ];
    $request->validate($rules);

    // Buscar el producto existente en la base de datos por su ID
    $producto = Productos::find($id);

    if (!is_null($producto)) {

     //$producto->update($request->all());

    // Actualizar los datos del producto con los datos del formulario
    $producto->producto = $request->input('producto');
    $producto->marca = $request->input('marca');
    $producto->descripcion = $request->input('descripcion');
    $producto->precio = $request->input('precio');
    $producto->image = $request->input('image');
    $producto->codcat = $request->input('codcat');

    // Guardar los cambios en la base de datos
    $producto->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'Producto actualizado con éxito'], 200);
       
    }
    else{
        return response()->json(['mensaje' => 'Producto no encontrado'], 404);
    }

    //$producto->update($request->all());

    // Actualizar los datos del producto con los datos del formulario
    $producto->producto = $request->input('producto');
    $producto->marca = $request->input('marca');
    $producto->descripcion = $request->input('descripcion');
    $producto->precio = $request->input('precio');
    $producto->image = $request->input('image');
    $producto->codcat = $request->input('codcat');

    // Guardar los cambios en la base de datos
    $producto->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'Producto actualizado con éxito'], 200);
    }

    
        public function destroy(string $id)
    {
          // Encuentra la categoría por su ID
        $productos = productos::find($id);
         // Verifica si la categoría existe
         if (!$productos) {
            return response()->json(['mensaje' => 'Producto no encontrado'], 404);
        }

        // Realiza la eliminación
        $productos->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'producto eliminado'], 200);
        $productos->delete();
    }


}