$(function () {
  
  $("#txtRut").validCampoFranz("0123456789");
  $("#txtCodRut").validCampoFranz("0123456789Kk");
  $("#txtNombre").validCampoFranz(" abcdefghijklmnñopqrstuvwxyzáéíóúäëïöüABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜ");
  $("#txtApellido").validCampoFranz(" abcdefghijklmnñopqrstuvwxyzáéíóúäëïöüABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜ"
  );
  $("#txtDireccion").validCampoFranz(
    " abcdefghijklmnñopqrstuvwxyzáéíóúäëïöüABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜ0123456789"
  );
  $("#txtMarca").validCampoFranz(" abcdefghijklmnñopqrstuvwxyzáéíóúäëïöüABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜ"
  );
  $("#txtModelo").validCampoFranz(" abcdefghijklmnñopqrstuvwxyzáéíóúäëïöüABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜ"
  );
  $("#txtAno").validCampoFranz("0123456789");
});

$(function () {
  // bloque jquery
  const IVA = 1.19;
  let subTotal = 0;
  $("#btnSumar").click(function () {
    // validar campos vacio
   
    let nombre = $("#txtNombre").val();
   
    if (nombre == "") {
      alert("Debe especificar el nombre");
      $("#txtNombre").focus();
    }else {
      let lavexterior = $("#txtLavExterior").val();
      let lavmotor = $("#txtLavMotor").val();
      let resultado = lavexterior + lavmotor;
      subTotal = subTotal + resultado;
      $("#txtLavExterior").val("");
      $("#txtLavMotor").val("");
      $("#txtLavExterior").focus(); // asigna el foco al elemento mencionado
      // metodo append permite agregar contenido al final del contenido existente
      $("#divMensajes").append(
        "Lavado Exterior: " + lavexterior + " Lavado de Motor: " + lavmotor
      );
    }
  });
  $("#btnTotal").click(function () {
    let nombre = $("#txtNombre").val();
    let resultado = subTotal * IVA;
    // método html permite agregar contenidos al div. Elimina el contenido existente
    $("#divMensajes").html(
      "Cliente: " +
        nombre +
        ". Total a pagar: " +
        resultado

    );
  });
});

