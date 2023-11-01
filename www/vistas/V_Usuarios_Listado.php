<?php
    $usuarios= $datos['usuarios'];

    echo '<table>';
    echo '<tr>';
    echo '<th>Apellido 1</th>';
    echo '<th>Apellido 2</th>';
    echo '<th>Nombre</th>';
    echo '<th>Email</th>';
    echo '<th>Movil</th>';
    echo '</tr>';

    foreach($usuarios as $fila){
        echo '<tr>';
        echo '<td>'.$fila['apellido_1'].'</td>';
        echo '<td>'.$fila['apellido_2'].'</td>';
        echo '<td>'.$fila['nombre'].'</td>';
        echo '<td>'.$fila['mail'].'</td>';
        echo '<td>'.$fila['movil'].'</td>';
        echo '</tr>';
    }

    echo '</table>';

?>