function habilitarBoton() {
  var campoDeEntrada = document.getElementById("cedula");
  var miBoton = document.getElementById("btnIrAValidaciones");

  // Si el campo de entrada está vacío o contiene solo espacios en blanco, se deshabilita el botón
  if (campoDeEntrada.value.trim() === "") {
    miBoton.disabled = true;
  } else {
    miBoton.disabled = false;
  }
}

function validarCedula() {
  const cedulaInput = document.getElementById("cedula");
  const cedula = cedulaInput.value.trim();

  // Longitud válida de la cédula
  if (cedula.length !== 10) {
    alert("La cédula debe tener 10 dígitos.");
    cedulaInput.value = "";
    document.getElementById("btnIrAValidaciones").disabled = true;
    return;
  }

  // Validar el dígito verificador
  const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  const verificador = Number(cedula[9]);
  let suma = 0;

  for (let i = 0; i < coeficientes.length; i++) {
    const digito = Number(cedula[i]) * coeficientes[i];

    suma += (digito >= 10) ? digito - 9 : digito;
  }

  const digitoVerificadorCalculado = (Math.ceil(suma / 10) * 10) - suma;

  if (digitoVerificadorCalculado !== verificador) {
    alert("La cédula ingresada es inválida. No puedes continuar con el proceso.");
    cedulaInput.value = "";
    document.getElementById("btnIrAValidaciones").disabled = true;
    return;
  }

  // La cédula es válida, redirigir a otra página
  window.location.href = "formulario12.html";
}

