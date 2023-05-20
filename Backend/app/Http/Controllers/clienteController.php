<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\cliente; // Añade la clase del modelo "cliente"
use Illuminate\Http\Request;
class clienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clientes = cliente::all();
        //return response()->json($clientes);
        //return cliente::find($id);
        return $clientes;
    }
  
   /* public function store(Request $request)
    {
    $cliente = new cliente([
        'codprod' => $request->input('codprod'),
        'nombre' => $request->input('nombre'),
        'apellido' => $request->input('apellido'),
        'correo' => $request->input('correo'),
        'password'=>$request->input('password')
        
    ]); 
    
    $cliente->save();   
    return response()->json(['mensaje' => 'Cliente registrado con éxito'],201);
    }*/



    public function store(Request $request)
    {
        $cliente = cliente::firstOrCreate(
            ['correo' => $request->input('correo')],
            [
                'codprod' => $request->input('codprod'),
                'nombre' => $request->input('nombre'),
                'apellido' => $request->input('apellido'),
                'password' => $request->input('password')
            ]
        );
    
        if ($cliente->wasRecentlyCreated) {
            return response()->json(['mensaje' => 'Cliente registrado con éxito'], 201);
        } else {
            return response()->json(['mensaje' => 'Cliente ya existe'], 409);
        }
    }


   /* public function store(Request $request)
{
    // Validar los datos del formulario
    $validatedData = $request->validate([
        'codcliente' => 'required',
        'nombre' => 'required',
        'apellido' => 'required',
        'correo' => 'required|email|unique:clientes',
        'password' => 'required|min:6',
    ]);

    // Crear un nuevo cliente
    $cliente = new cliente([
        'codcliente' => $validatedData['codcliente'],
        'nombre' => $validatedData['nombre'],
        'apellido' => $validatedData['apellido'],
        'correo' => $validatedData['correo'],
        'password' => bcrypt($validatedData['password']),
    ]);

    // Guardar el cliente en la base de datos
    $cliente->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'Cliente registrado con éxito'], 201);
}*/
 
    public function show(string $id)
    {
        $cliente = cliente::find($id);
        //return response()->json($cliente); 
        return cliente::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $cliente = cliente::find($id);
        return view('editCliente', compact('cliente')); 
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $cliente = cliente::find($id);

        $cliente->nombre = $request->input('nombre');
        $cliente->apellido = $request->input('apellido');
        $cliente->correo = $request->input('correo');
        $cliente->password = bcrypt($request->input('password')); 
        $cliente->save();

        return response()->json(['mensaje' => 'datos actualizados']); 
    }
    

    public function login(Request $request)
    {
        $credentials = $request->only('correo', 'password');

        if (Auth::attempt($credentials)) {
            // La autenticación fue exitosa
            return response()->json(['mensaje' => 'Inicio de sesión exitoso']);
        } else {
            // La autenticación falló
            return response()->json(['mensaje' => 'Credenciales incorrectas'], 401);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cliente = cliente::find($id);
        $cliente->delete();

        return response()->json(['mensaje' => 'cliente eliminado'], 200); 
    }

}
