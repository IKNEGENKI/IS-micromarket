<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    use HasFactory;
    protected $table = 'detalle_venta';
    protected $primaryKey = 'codetalle';
    protected $fillable = ['codprod','cantidadprod','costodetalle'];
    //public $timestamps = false;

        public function producto(){
            return $this->hasMany(producto::class,'codprod');
        }
        
}