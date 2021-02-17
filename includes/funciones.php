<?php

function obtenerServicios(){
    try {
        //Importar una conexion
        require 'database.php';

        //Escribir el codigo SQL
        $sql = "SELECT * FROM servicios";
        $consulta = mysqli_query($db, $sql);

        //Obtener los resultados
            //Crear arreglo vacio donde se almacenaran los resultados
            $servicios = [];
            //Crear contador para que aumente el Loop While
            $i = 0;
            //Recorrer resultados
            while ($row =  mysqli_fetch_assoc($consulta)) {
                $servicios[$i]['id'] = $row['id'];
                $servicios[$i]['nombre'] = $row['nombre'];
                $servicios[$i]['precio'] = $row['precio'];
    
                $i++;
            }
           
            /*echo "<pre>";
            var_dump($servicios);
            echo "</pre>";*/
    
            return $servicios;

    } catch (\Throwable $th) {
        //throw $th;
        var_dump($th);
    }                       
}

obtenerServicios();