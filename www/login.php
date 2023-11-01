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
    <link rel="stylesheet" href="./webfontkit-league-of-legends-fonts/stylesheet.css">
    <link rel="stylesheet" href="./css/reset.css">
    
    <link rel="stylesheet" href="./css/navbar.css">
    <link rel="stylesheet" href="./css/login.css">
</head>

<body>
    <form id="formularioLogin" method="post" action="login.php">
        <div>
            <h1>LOGIN</h1>
            <div>
                <div id="username-field" class="input-field">
                    <label for="usuario">USERNAME</label>
                    <input type="text" id="usuario" name="usuario">  <br>
                </div>
                <div id="password-field" class="input-field">
                    <label for="pass">PASSWORD</label>
                    <input type="password" id="pass" name="pass">
                </div>
                <div>
                    <?php echo $mensa ?>
                </div>
            </div>
            <div>
                <button class="title" type="submit" value="Enviar">SIGN IN</button>
            </div>
            <br>
            <span>Ir Al <a href="/">Home</a></span>
        </div>
    </form>
</body>