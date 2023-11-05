<?php
echo '<h2>Busqueda de usuarios: </h2>';
?>

<form id="formularioBuscar" name="formularioBuscar" onkeydown="return event.key != 'Enter';">
    <div id="nombre-field" class="input-field">
        <label for="nombre">NOMBRE O APELLIDOS:</label>
        <input type="text" id="nombre" name="nombre">  <br>
    </div>

    <div id="mail-field" class="input-field">
        <label for="mail">MAIL:</label>
        <input type="text" id="mail" name="mail">  <br>
    </div>

    <div id="movil-field" class="input-field">
        <label for="movil">MOVIL:</label>
        <input type="text" id="movil" name="movil">  <br>
    </div>
    <div class="button-field">
        <button type="button" onclick="buscarUsuarios()" class="title" id="buscar-btn">BUSCAR</button>
    </div>
</form>
<div id="capaResultadosBusqueda">

</div>