/* se solicita un sistema para una tienda en el cual debe ingresar nombre marca y tipo y precio del producto si el prod es papas es 10% des si es pastelito es 10% si es un lacteo 7.5% desc por lo cual se debe saber cuanto pagara el cliente */
function validarpre(formulario) {   
    var checarABC ="qazwsxedcrfvtgbyhnujmikolpñ" + "QAZWSXEDCRFVTGBYHNUJMIKOLPÑ";

    var cadenaNombre = formulario.marca.value;

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
        alert("Ingresa solo letras en el campo Marca");
        formulario.marca.focus();
        return false;
    }
    var checarAB ="qazwsxedcrfvtgbyhnujmikolpñ" + "QAZWSXEDCRFVTGBYHNUJMIKOLPÑ";

    var cadenaNom = formulario.tipo.value;

    //alert(cadenaNombre);

    var todoesval = true;

    for(var i=0; i <cadenaNom.length; i++){
        var carac = cadenaNom.charAt(i);
        for(var j = 0; j < checarAB.length; j++){
            if(carac == checarAB.charAt(j)){
                break;
            }
        }
        if (j == checarAB.length){
            todoesval = false;
            break;
        }
    }
    if(!todoesval){
        alert("Ingresa solo letras en el campo Tipo");
        formulario.tipo.focus();
        return false;
    }
}
function valnum(e){
    var teclas = (document.all)? e.keyCode : e.which;
    if(teclas == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclas);
    return patron.test(codigo);
}
function valprod(){
    var marc = document.getElementById("marca").value;
    if(marc.lenght == Sabritas)

}