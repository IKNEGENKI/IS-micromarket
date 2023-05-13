<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class clienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clientes = cliente::all();
        return response()->json($clientes);
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
        'codprod' => $request->input('codprod'),
        'nombre' => $request->input('nombre'),
        'apellido' => $request->input('apellido'),
        'correo' => $request->input('correo'),
        'password' => $request->bcrypt(input('password'))
    ]);

    $cliente->save();
    
    return response()->json(['success', 'cliente creado correctamente']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cliente = cliente::find($id);
        //return view('clientes.show', compact('cliente'));
        return cliente::find($id);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $cliente = cliente::find($id);
        //return view('clientes.edit', compact('cliente'));
        return cliente::find($id);
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
        $cliente->password = $request->input('password');

        $cliente->save();

        return response()->json(['mensaje' => 'datos  actualizados']);
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
