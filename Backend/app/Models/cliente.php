<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cliente extends Model
{
    use HasFactory;

    protected $table = 'cliente';
    protected $primaryKey = 'codcliente';
    protected $fillable = ['nombre', 'apellido', 'correo', 'password'];
    public $timestamps = false;
    /*public function ventas(){
        return $this->hasMany(venta::class,'codcliente');
    }*/
}
