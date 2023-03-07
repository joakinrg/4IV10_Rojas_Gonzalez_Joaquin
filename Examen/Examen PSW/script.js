function calcularInteres() {
  var capital = parseFloat(document.getElementById("capital").value);
  var tasa = parseFloat(document.getElementById("tasa").value);
  var periodos = parseFloat(document.getElementById("periodos").value);
  
  var tasaMensual = tasa / 100 / 12;
  var montoTotal = capital * Math.pow(Math.E, tasaMensual * periodos);
  
  if (isNaN(montoTotal)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    return;
  }
  
  document.getElementById("resultado").innerHTML = "El monto total después de " + periodos + " meses es de: " + montoTotal.toFixed(2);
  
  var tablaAmortizacion = document.getElementById("tablaAmortizacion");
  tablaAmortizacion.getElementsByTagName("tbody")[0].innerHTML = "";
  var saldoInicial = capital;
  for (var i = 1; i <= periodos; i++) {
    var interesGenerado = saldoInicial * tasaMensual;
    var pagoPeriodo = montoTotal / periodos;
    var pagoCapital = pagoPeriodo - interesGenerado;
    saldoInicial -= pagoCapital;
    var fila = "<tr><td>" + i + "</td><td>" + saldoInicial.toFixed(2) + "</td><td>" + interesGenerado.toFixed(2) + "</td><td>" + pagoPeriodo.toFixed(2) + "</td><td>" + montoTotal.toFixed(2) + "</td></tr>";
    tablaAmortizacion.getElementsByTagName("tbody")[0].innerHTML += fila;
  }
}

function borrarDatos() {
  document.getElementById("capital").value = "";
  document.getElementById("tasa").value = "";
  document.getElementById("periodos").value = "";
  document.getElementById("resultado").innerHTML = "";
  var tablaAmortizacion = document.getElementById("tablaAmortizacion");
  tablaAmortizacion.getElementsByTagName("tbody")[0].innerHTML = "";
}

function checkInput(input) {
  if (input.validity.patternMismatch) {
    alert("El valor ingresado debe estar entre 0 y 10,000,000,000.");
  }
}
