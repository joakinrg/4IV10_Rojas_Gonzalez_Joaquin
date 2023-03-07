function promedio(){
    var calf1 = document.getElementById("cal1").value;
    var calf2 = document.getElementById("cal2").value;
    var calf3 = document.getElementById("cal3").value;
    var examf = document.getElementById("exaf").value;
    var trabf = document.getElementById("traf").value;
    var prom1 = parseInt(calf1);
    var prom2 = parseInt(calf2);
    var prom3 = parseInt(calf3);
    var exa = parseInt(examf);
    var tra = parseInt(trabf);
    var prom123 = ((prom1 + prom2 + prom3)/3)*0.55;
    var ex = exa * 0.3;
    var tr = tra * 0.15;
    var califi = prom123 + ex + tr;
    document.getElementById("calfin").value = Float(califi);


}
function borrardata(){
    document.getElementById("cal1").value="";
    document.getElementById("cal2").value="";
    document.getElementById("cal3").value="";
    document.getElementById("exaf").value="";
    document.getElementById("traf").value="";
}