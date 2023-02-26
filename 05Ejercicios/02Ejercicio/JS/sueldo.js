function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron =/[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function aumento(){
    var valor = document.getElementById("sueldo").value;
    var resultado = parseInt(valor);
    var aumento = (resultado * 0.1)*5;
    var sueldofin = resultado + aumento;
    document.getElementById("sueldofinal").value = "$" + sueldofin;
}

function borrardata(){
    document.getElementById("sueldo").value="";
    document.getElementById("sueldofinal").value="";
}