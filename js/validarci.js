function validarCedula() {
  const cedulaInput = document.getElementById("cedula");
  const cedula = cedulaInput.value;

  // Longitud válida de la cédula
  if (cedula.length !== 10) {
    alert("La cédula debe tener 10 dígitos.");
    cedulaInput.value = "";
    document.getElementById("numero").readOnly = true;
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
    alert("La cédula ingresada es inválida.");
    cedulaInput.value = "";
    document.getElementById("numero").readOnly = true;
    return;
  }

  // La cédula es válida
  document.getElementById("numero").readOnly = false;
}
