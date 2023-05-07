<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\producto;
use Illuminate\Support\Facades\DB;

class productoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('producto')->insert([
            
            'codcat' =>'1',
            'producto'=>'leche entera',
            'marca'=>'pil',
            'descripcion'=>'leche entera',
            'precio'=>'6',
            //'cantidadtotal'=>'15',
            'image'=>'<img src="https://i.ibb.co/594X3R0/lechepil.jpg" alt="lechepil" border="0" />',        
        ]);

        DB::table('producto')->insert([
       
            'codcat' =>'1',
            'producto'=>'biogurt',
            'marca'=>'pil',
            'descripcion'=>'yogur elaborado de leche pasteurisa,saborizada',
            'precio'=>'9',
            //'cantidadtotal'=>'10',
            'image'=>'<img src="https://i.ibb.co/WgRMbKW/biogurt.jpg" alt="biogurt" border="0" />',      
        ]);

        DB::table('producto')->insert([
            
            'codcat' =>'2',
            'producto'=>'coca cola 3l',
            'marca'=>'the cocacola company',
            'descripcion'=>'refresco gaseoso a base de cola',
            'precio'=>'13',
            //'cantidadtotal'=>'6',
            'image'=>'<img src="https://i.ibb.co/JyDcNHQ/cocacola3l.jpg" alt="cocacola3l" border="0" />',        
        ]);

       
            }
}
