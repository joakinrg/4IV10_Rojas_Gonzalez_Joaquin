//problema 1
// Obtener elementos HTML
const input = document.getElementById("p1-input");
const output = document.getElementById("p1-output");
const button = document.querySelector(".problema-button");

// invertir las palabras
function invertirPalabras() {
  // obtener las palabras del input y separarlas por espacio
  const palabras = input.value.split(" ");
  // Invertir orden
  const palabrasInvertidas = palabras.reverse();
  // unir las palabras invertidas separado por espacios
  const resultado = palabrasInvertidas.join(" ");
  // Mostrar el resultado en el output
  output.innerText = resultado;
}

button.addEventListener("click", invertirPalabras);

//problema 2
// obtener los valores y crear los vectores
const v1 = [parseInt(document.getElementById("p2-x1").value), parseInt(document.getElementById("p2-x2").value), parseInt(document.getElementById("p2-x3").value), parseInt(document.getElementById("p2-x4").value), parseInt(document.getElementById("p2-x5").value)];
const v2 = [parseInt(document.getElementById("p2-y1").value), parseInt(document.getElementById("p2-y2").value), parseInt(document.getElementById("p2-y3").value), parseInt(document.getElementById("p2-y4").value), parseInt(document.getElementById("p2-y5").value)];

// calcular el producto escalar
function dotProduct(v1, v2) {
  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }
  return product;
}

//obtener todas las posibilidades de un vector
function getPermutations(vector) {
  if (vector.length === 0) return [[]];
  const permutations = [];
  for (let i = 0; i < vector.length; i++) {
    const current = vector[i];
    const remaining = vector.slice(0, i).concat(vector.slice(i + 1));
    const remainingPermutations = getPermutations(remaining);
    for (let j = 0; j < remainingPermutations.length; j++) {
      const permutation = [current].concat(remainingPermutations[j]);
      permutations.push(permutation);
    }
  }
  return permutations;
}

//mínimo producto escalar
function getMinimumDotProduct(v1, v2) {
  const permutations = getPermutations(v2);
  let minProduct = Infinity;
  for (let i = 0; i < permutations.length; i++) {
    const product = dotProduct(v1, permutations[i]);
    if (product < minProduct) {
      minProduct = product;
    }
  }
  return minProduct;
}

//mostrar el resultado en salida
function showResult() {
  const minProduct = getMinimumDotProduct(v1, v2);
  document.getElementById("p2-output").innerHTML = "El mínimo producto escalar es: " + minProduct;
}

document.querySelector(".problema-button").addEventListener("click", showResult);


//problema 3
function problema3(){

    //primero necesitamos definir un alfabeto

    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //VAMOS A OBTENER A ENTRADA DE LOS DATOS
    var p3_input = document.querySelector('#p3-input').value;
    
    //lo que necesitamos es separar todo por comas
    var p3_palabras = p3_input.split(',');

    //necesitamos una funcion que se encargue de recuperar cada palabra
    //tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function (palabras){
        return palabras.replace(/\s/g, '').toUppercase();
    });

    //hay que calcular los caracteres unicos 
    var p3_res = '';

    //una funcion que se encargue de calcular que contienen el arreglo y separar cara carecter y contarlo
    p3_palabras.forEach(function(palabra, i){

        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //debo iterar el alfabeto
        alfabeto.forEach(function(letra, j){
            //itero cada palabra
            palabra_array.forEach(function(letras_palabras, k){
                //comprobar que la letrea este dentro dle alfabeto
                if(letras_palabras == letra){
                    //si la letra no la hemos contado la agregamos a un array para contar las letras unicas
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        //vamos a contar la salida
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    //imprimir salida
    document.querySelector('#p3-output').textContent = p3_res;
}