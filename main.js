function validarNumero(event) {
    // Obtenemos el valor ingresado en el input
    var inputElement = event.target;
    var valor = inputElement.value;
    inputElement.value = valor.replace(/[^\d.]/g, '');
  }