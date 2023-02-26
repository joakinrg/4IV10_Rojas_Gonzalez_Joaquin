/*
JavaScript es un lenguaje que posee un paradigma orientado a objetos y a funciones Y EVENTOS por tal motivo presenta una peculiaridad que es:

No tipado
no existe int, float, string, ni char, ni nada :(

todo es var -> variable
de acuerdo al estandar ES6 se manejan 3 tupos de variable

VAR
LET es una variable de tipo "Protected"
CONST -> valor constante
*/
function validar(formulario){
    //Nombre
    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    var checarABC ="qazwsxedcrfvtgbyhnujmikolpñ" + "QAZWSXEDCRFVTGBYHNUJMIKOLPÑ";

    var cadenaNombre = formulario.nombre.value;

    //alert(cadenaNombre);

    var todoesvalido = true;

    for(var i=0; i <cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if (j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    //edad
    var edad=parseInt(formulario.edad.value);
    //alert(edad);
    if((edad <0) || (edad >=99)){
        alert("Ingresa una edad valida entre 01 y 99 años");
        formulario.edad.focus();
        return false;
    }
    var checarABC ="0123456789";

    var cadenaNombre = formulario.edad.value;

    //alert(cadenaNombre);

    var todoesvalido = true;

    for(var i=0; i <cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if (j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }
    //fecha nacimiento
    let ingreso = document.getElementById("fecha").value;
    let fechaIngresada = new Date(ingreso);

    if (!!fechaIngresada.valueOf()) {
        año = parseInt(fechaIngresada.getFullYear());
        mes = parseInt(fechaIngresada.getMonth());
        dia = parseInt(fechaIngresada.getDate());
    }

    let fechAct = new Date();
    let annoAct = fechAct.getFullYear();

    if (año > annoAct || año < "1923") {
        alert("No se puede ingresar un año menor a 1923 ");
        return false;
    }
    //Validacion de correo
    //Obtener el campo de correo
    // let email = formulario.correo.value;

    //Crear una expresion regular
    let prueba =
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    /([A-Za-z]+[0-9]+\.){10}\@([A-Za-z]+[0-9]){8}\.([A-Za-z]+[0-9]){3}/g;

    alert("Email " +(prueba.test(email) ? " " : "no") + "valido");

    return prueba.test();
}
