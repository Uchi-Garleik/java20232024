<?php
    require_once 'Modelo.php';
    require_once 'DAO.php';
    class M_Usuarios extends Modelo{
        public $DAO;

        public function __construct(){
            parent::__construct();
            $this->DAO = new DAO();
        }

        public function buscarUsuarios($filtros=array()){
            $nombre='';
            $mail='';
            $movil='';
            $usuario = '';
            $pass = '';
            extract($filtros);
            
            $SQL="SELECT * FROM usuarios WHERE 1=1 ";
            
            if($usuario != '' && $pass != ''){
                $usuario = addslashes($usuario);
                $pass = addslashes($pass);
                $SQL.= " AND login = '$usuario' AND pass = MD5('$pass') ";
            }else{
                if($nombre!=''){
                    $aTexto=explode(' ', $nombre);
                    $SQL.=" AND (1=2 ";
                    foreach ($aTexto as $palabra){
                        $SQL.=" OR nombre LIKE '%$palabra%' OR apellido_1 LIKE '%$palabra%' OR apellido_2 LIKE '%$palabra%'";
                    }
                    $SQL.=" ) ";
                }
                if($mail!=''){
                    $aTexto=explode(' ', $mail);
                    $SQL.=" AND (1=2 ";
                    foreach ($aTexto as $palabra){
                        $SQL.=" OR mail LIKE '%$palabra%'";
                    }
                    $SQL.=" ) ";
                }
                if($movil!=''){
                    $aTexto=explode(' ', $movil);
                    $SQL.=" AND (1=2 ";
                    foreach ($aTexto as $palabra){
                        $SQL.=" OR movil LIKE '%$palabra%'";
                    }
                    $SQL.=" ) ";
                }
            }
            // echo $SQL;
            $usuarios=$this->DAO->consultar($SQL);
            return $usuarios;
        }

    }
?>