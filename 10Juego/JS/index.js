// Obtener el lienzo y el contexto
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

// Definir la rana
let rana = {
  x: 100,
  y: 350,
  w: 50,
  h: 50,
  v: 0,
  a: 0.5,
  salto: 12
};

// Definir las hojas
let hojas = [
  {x: 100, y: 300, w: 50, h: 50},
  {x: 300, y: 250, w: 50, h: 50},
  {x: 500, y: 200, w: 50, h: 50},
  {x: 700, y: 150, w: 50, h: 50}
];

// Definir el estado del juego
let estado = "jugando";
let puntuacion = 0;

// Definir la función para dibujar la rana
function dibujarRana() {
  ctx.fillStyle = "green";
  ctx.fillRect(rana.x, rana.y, rana.w, rana.h);
}

// Definir la función para dibujar las hojas
function dibujarHojas() {
  ctx.fillStyle = "brown";
  hojas.forEach(hoja => {
    ctx.fillRect(hoja.x, hoja.y, hoja.w, hoja.h);
  });
}

// Definir la función para detectar la colisión entre la rana y las hojas
function detectarColision() {
  hojas.forEach(hoja => {
    if (
      rana.x + rana.w > hoja.x &&
      rana.x < hoja.x + hoja.w &&
      rana.y + rana.h > hoja.y &&
      rana.y < hoja.y + hoja.h &&
      rana.v > 0
    ) {
      rana.v = -rana.salto;
      rana.y = hoja.y - rana.h;
      puntuacion++;
    }
  });
}

// Definir la función para actualizar la posición de la rana
function actualizarRana() {
  rana.v += rana.a;
  rana.y += rana.v;
  if (rana.y > canvas.height) {
    estado = "fin";
  }
}

// Definir la función para dibujar el marcador
function dibujarMarcador() {
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText(`Puntuación: ${puntuacion}`, 20, 30);
}

// Definir la función para dibujar la pantalla de fin
function dibujarFin() {
  ctx.fillStyle = "red";
  ctx.font = "50px Arial";
  ctx.fillText("Game Over", 250, 200);
  ctx.fillText(`Puntuación: ${puntuacion}`, 250, 250);
}

// Definir la función para dibujar el juego
function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujarRana();
  dibujarHojas();
  dibujarMarcador();
  if (estado === "fin") {
    dibujarFin();
  }
}
// Definir la función principal del juego
function principal() {
  // Actualizar la posición de la rana
  actualizarRana();
  
  // Detectar la colisión entre la rana y las hojas
  detectarColision();
  
  // Dibujar el juego
  dibujar();
  
  // Comprobar el estado del juego
  if (estado === "jugando") {
  // Pedir al navegador que llame a la función principal de nuevo en el siguiente fotograma
  requestAnimationFrame(principal);
  }
}
  
  // Añadir un event listener para el clic del ratón
  canvas.addEventListener("click", function() {
  if (estado === "jugando") {
  rana.v = -rana.salto;
  } else if (estado === "fin") {
  estado = "jugando";
  rana.y = 200;
  rana.v = 0;
  puntuacion = 0;
  hojas = [
  {x: 100, y: 300, w: 50, h: 50},
  {x: 300, y: 250, w: 50, h: 50},
  {x: 500, y: 200, w: 50, h: 50},
  {x: 700, y: 150, w: 50, h: 50}
  ];
  principal();
  }
  });
  // Agregar evento de teclado al lienzo
document.addEventListener("keydown", function(event) {
  if (estado === "jugando") {
    if (event.code === "ArrowLeft") {
      rana.x -= 50; // Mover a la rana a la izquierda
    } else if (event.code === "ArrowRight") {
      rana.x += 50; // Mover a la rana a la derecha
    }
  }
});
  
  // Llamar a la función principal por primera vez
  principal();