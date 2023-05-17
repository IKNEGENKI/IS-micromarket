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
        //return $cliente;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('clientes.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $cliente = new cliente([
            'codcliente' => $request->input('codcliente'),
            'nombre' => $request->input('nombre'),
            'apellido' => $request->input('apellido'),
            'correo' => $request->input('correo'),
            'password' => bcrypt($request->input('password')) 
        ]);

        $cliente->save();

        return response()->json(['mensaje' => 'cliente creado correctamente']); 
    }

    /**
     * Display the specified resource.
     */
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
        return view('clientes.edit', compact('cliente')); 
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
