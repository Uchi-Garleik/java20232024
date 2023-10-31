<?php session_start();
    $usuario='';
    $pass='';
    extract($_POST);
    //var_dump($_POST);
    if($usuario == '' || $pass == ''){
        $mensa='Debe completar los campos';
    }else{
        require_once 'controladores/C_Usuarios.php';
        $objUsuarios = new C_Usuarios();
        $datos['usuario']=$usuario;
        $datos['pass']=$pass;
        // $resultado=$objUsuarios->validarUsuario($datos);

        $resultado=$objUsuarios->validarUsuario(array('usuario'=>$usuario, 'pass'=>$pass));
        if($resultado=='S'){
            header('Location: index.php');
        }else{
            $mensa='Datos incorrectos';
        }
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login2</title>
</head>

<body>
    <form id="formularioLogin" method="post" action="login.php">
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario">  <br>
        <label for="pass">Contraseña:</label>
        <input type="password" id="pass" name="pass">
        <span id="msj"></span>
        <button type="submit" value="Enviar">Enviar</button>
    </form>
</body>