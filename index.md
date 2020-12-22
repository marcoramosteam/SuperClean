<!DOCTYPE html>
<html lang="es">

<head>
    <!-- Meta Tags Requeridos -->
    <meta charset="UTF-8">
    <meta name="description"
        content="">
    <meta name="keywords" content="lavado de autos, super clean, lavado de motos, lavado de furgones, lavado de camiones">
    <meta name="author" content="Marco Ramos">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="img/logo_super_clean.png">
    <link rel="stylesheet" href="css/style.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="jquery3.5.1.min.js"></script>
    <script src="jQuery.js"></script>
    <script type="text/javascript"
        src="https://rawcdn.githack.com/franz1628/validacionKeyCampo/bce0e442ee71a4cf8e5954c27b44bc88ff0a8eeb/validCampoFranz.js"></script>
    <title>Super Clean</title>
</head>

<body class="body"> 

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <img alt="logo tienda" src="img/logo_super_clean.png" class="img_logo_tienda">
            </div>
            <div class="col-md-6">
                <div class="row justify-content-left m-5">
                    <h1 class="titulo_derecha">
                        "Super Clean"<small> Lavado de Vehículos</small>
                        
                    </h1>
                    <p>Pinche <a href="https://marcoramos43.github.io/SuperClean/"target="_blank">AQUÍ</a> para ir a <strong>GitHub Pages</strong></p>
                </div>
            </div>
        </div>

        <hr>
        <br>
    </div>
   
    <div class="container-fluid">
        <div class="row">

            <div class="col-md-6">

                
                <form role="form">
                    <h2>Datos de Cliente</h2>
                    <div class="form-group">
                        <label>
                            RUT
                        </label>
                        <div class="form-group">
                            <table>
                                <tr>
                                    <td><input class="form-control" type="text" name="txtRut" id="txtRut" required value="" maxlength="8"></td>
                                    <td>-</td>
                                    <td><input type="text" name="txtCodRut" required id="txtCodRut" maxlength="1" class="form-control w-25"></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>
                            NOMBRE
                        </label>
                        <input type="text" required name=txtNombre id="txtNombre" class="form-control" maxlength="50">
                    </div>
                
                    <div class="form-group">
                        <label>
                            APELLIDO
                        </label>
                        <input type="text" required name=txtApellido id="txtApellido" class="form-control" maxlength="50">
                    </div>
                
                    <div class="form-group">
                        <label>
                            DIRECCIÓN
                        </label>
                        <input type="text" required name=txtDireccion id="txtDireccion" class="form-control" maxlength="100">
                    </div>
                
                    <div class="form-group">
                        <label>
                            COMUNA
                        </label>
                        <select name=combo name=cmbComuna class="form-control">
                            <option value="">--</option>
                            <option value=1>Colina</option>
                            <option value=2>Lampa</option>
                            <option value=3>Til Til</option>
                            <option value=4>Pirque</option>
                            <option value=5>Puente Alto</option>
                            <option value=6>San José de Maipo</option>
                            <option value=7>Buin</option>
                            <option value=8>Calera de Tango</option>
                            <option value=9>Paine</option>
                            <option value=10>San Bernardo</option>
                            <option value=11>Alhué</option>
                            <option value=12>Curacaví</option>
                            <option value=13>María Pinto</option>
                            <option value=14>Melipilla</option>
                            <option value=15>San Pedro</option>
                            <option value=16>Cerrillos</option>
                            <option value=17>Cerro Navia</option>
                            <option value=18>Conchalí</option>
                            <option value=19>El Bosque</option>
                            <option value=20>Estación Central</option>
                            <option value=21>Huechuraba</option>
                            <option value=22>Independencia</option>
                            <option value=23>La Cisterna</option>
                            <option value=24>La Granja</option>
                            <option value=25>La Florida</option>
                            <option value=26>La Pintana</option>
                            <option value=27>La Reina</option>
                            <option value=28>Las Condes</option>
                            <option value=29>Lo Barnechea</option>
                            <option value=30>Lo Espejo</option>
                            <option value=31>Lo Prado</option>
                            <option value=32>Macul</option>
                            <option value=33>Maipú</option>
                            <option value=34>Ñuñoa</option>
                            <option value=35>Pedro Aguirre Cerda</option>
                            <option value=36>Peñalolén</option>
                            <option value=37>Providencia</option>
                            <option value=38>Pudahuel</option>
                            <option value=39>Quilicura</option>
                            <option value=40>Quinta Normal</option>
                            <option value=41>Recoleta</option>
                            <option value=42>Renca</option>
                            <option value=43>San Miguel</option>
                            <option value=44>San Joaquín</option>
                            <option value=45>San Ramón</option>
                            <option value=46>Santiago</option>
                            <option value=47>Vitacura</option>
                            <option value=48>El Monte</option>
                            <option value=49>Isla de Maipo</option>
                            <option value=50>Padre Hurtado</option>
                            <option value=51>Peñaflor</option>
                            <option value=52>Talagante</option>
                        </select>
                    </div>
                </form>
                
                <form name=form1 method=post action=check.php>
                
                    <table class='table table-striped'>
                
                        <tr>
                            <th>LAVADO:</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="ckb" id="chkLavExterior" value= "5950" onclick='chkcontrol(0)';> Lavado Exterior = 5000.- Sin IVA</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="ckb" id="chkLavMotor" value= "9520" onclick='chkcontrol(1)';> Lavado de Motor = 8000.- Sin IVA</td>
                        </tr>
                       
                    </table>
                
                    <div id="msg"></div>
                
                    <div class="checkbox"></div>
                </form>
                <button type="submit" name="btnEnviar" id="btnEnviar" onclick="btnEnviar()" class="btn btn-primary">
                    Validar
                </button>   
            </div>

            <div class="col-md-6">
                <form role="form"></form>

                    <h2>Datos del Vehículo</h2>
                    <div class="form-group">

                        <P>TIPO DE VEHÍCULO:</P>
                        <label class="form-control" name=rdoTipoVehiculo>
                        <input type="radio" name=rdoTipoVehiculo value=1> Furgón
                        <input type="radio" name=rdoTipoVehiculo value=2> Automovil
                        <input type="radio" name=rdoTipoVehiculo value=3> Camión   
                        <input type="radio" name=rdoTipoVehiculo value=4> Camioneta
                        <input type="radio" name=rdoTipoVehiculo value=5> Moto
                        </label>
                    </div>
                
                    <div class="form-group">
                        <label>
                            MARCA:
                        </label>
                        <input type="text" name="txtMarca" required id="txtMarca" class="form-control" maxlength="20">
                    </div>
                
                    <div class="form-group">
                        <label>
                            MODELO:
                        </label>
                        <input type="text" name="txtModelo" required id="txtModelo" class="form-control" maxlength="20">
                    </div>

                    <div class="form-group">
                        <label>
                            AÑO: 
                        </label>
                        <input type="text" name="txtAno" id="txtAno" maxlength="4" required class="form-control">
                    </div>

                    <div class="form-group">
                        <label>
                            REVISIÓN TÉCNICA AL DÍA:
                        </label>
                        <input type="checkbox" name="chkRevTec" class="">
                    </div>
                               
                    <div class="form-group">
                        <label>
                            OPERADOR:
                        </label>
                        <select class="form-control" required name=cmbOperador>
                            <option value="">--</option>
                            <option value=1>Juan Pérez</option>
                            <option value=2>Héctor Mena</option>
                            <option value=3>Francisco González</option>
                            <option value=4>Pedro Lara</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>
                            FECHA Y HORA DE INICIO:
                        </label>
                        <input type="datetime-local" name="txtFyHora" required class="form-control">
                    </div>

                    <div class="form-group">
                        <label>
                            FECHA Y HORA DE TÉRMINO:
                        </label>
                        <input type="datetime-local" name="txtFyHora" required class="form-control">
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>

</html>