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


function chkcontrol(j) {
  var sum = 0;
  for (var i = 0; i < document.form1.ckb.length; i++) {
    if (document.form1.ckb[i].checked) {
      sum = sum + parseInt(document.form1.ckb[i].value);
    }
    document.getElementById("msg").innerHTML = "Suma :" + sum;

    if (sum < 0) {
      sum = sum - parseInt(document.form1.ckb[j].value);
      document.form1.ckb[j].checked = false;
      alert("Debe seleccionar por lo menos un servicio ...");
    }
    document.getElementById("msg").innerHTML =
      "TOTAL Con IVA es: $" + sum + ".-";
  }
}

$(function () {
  $("#btnEnviar").click(function () {
    let txtRut = $("#txtRut").val();
    if (txtRut == "") {
      alert("Debe especificar su Rut");
    }
  });

  $("#btnEnviar").click(function () {
    let CodRut = $("#txtCodRut").val();
    if (CodRut == "") {
      alert("Debe especificar el Código Verificador");
    }
  });

  $("#btnEnviar").click(function () {
    let Nombre = $("#txtNombre").val();
    if (Nombre == "") {
      alert("Debe especificar el Nombre");
    }
  });

  $("#btnEnviar").click(function () {
    let Apellido = $("#txtApellido").val();
    if (Apellido == "") {
      alert("Debe especificar el Apellido");
    }
  });

  $("#btnEnviar").click(function () {
    let Direccion = $("#txtDireccion").val();
    if (Direccion == "") {
      alert("Debe especificar la Dirección");
    }
  });

  $("#btnEnviar").click(function () {
    let Marca = $("#txtMarca").val();
    if (Marca == "") {
      alert("Debe especificar la Marca");
    }
  });

  $("#btnEnviar").click(function () {
    let Modelo = $("#txtModelo").val();
    if (Modelo == "") {
      alert("Debe especificar el Modelo");
    }
  });

  $("#btnEnviar").click(function () {
    let Ano = $("#txtAno").val();
    if (Ano == "") {
      alert("Debe especificar el Año");
    }
  });
  
});

function btnEnviar() {
  let chkLavExterior = $("#chkLavExterior").val();
  let chkLavMotor = $("#chkLavMotor").val();
  if (!$("#chkLavExterior").is(":checked") && !$("#chkLavMotor").is(":checked")) {
    alert("Debe seleccionar por lo menos un servicio de lavado"); 
  }
};
