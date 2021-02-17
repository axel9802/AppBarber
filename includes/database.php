<?php

$db =  mysqli_connect('localhost', 'root', 'ydaleu11', 'appsalon');
$db->set_charset('utf8'); //Para que lea la Ñ
//Si $db está vacío
if (!$db) {
    echo "Error en la conexión";
    exit;    
}