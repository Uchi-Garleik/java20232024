<?php
    $usuarios= $datos['usuarios'];
    echo '<div id="tableDiv">';
    echo '<table>';
    echo '<tr>';
    echo '<th>Nombre</th>';
    echo '<th>Apellido 1</th>';
    echo '<th>Apellido 2</th>';
    echo '<th>Email</th>';
    echo '<th>Movil</th>';
    echo '<th>Sexo</th>';
    echo '<th>Activo</th>';
    echo '</tr>';

    function returnEstado($fila){
        if ($fila['activo'] == 'S') {
            return "activo";
        }else{
            return "inactivo";
        }
    }

    function returnGenero($fila){
        if ($fila['sexo'] == 'H') {
            return "Hombre";
        }
        if ($fila['sexo'] == "M") {
            return "Mujer";
        }else{
            return "No especificado";
        }
    }

    foreach($usuarios as $fila){
        echo '<tr>';
        echo '<td>'.$fila['nombre'].'</td>';
        echo '<td>'.$fila['apellido_1'].'</td>';
        echo '<td>'.$fila['apellido_2'].'</td>';
        echo '<td>'.$fila['mail'].'</td>';
        echo '<td>'.$fila['movil'].'</td>';
        echo '<td>'.returnGenero($fila).'</td>';
        echo '<td>'.returnEstado($fila).'</td>';
        echo '</tr>';
    }

    echo '</table>';
    echo '</div>';
?>