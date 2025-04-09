// ┌───────────────────────────────────┐
// │        Habilita Entorno           │
// └───────────────────────────────────┘
// Crear el canvas desde cero
const canvas = document.createElement("canvas");
canvas.id = "myCanvas";
canvas.width = 1000;
canvas.height = 500;
canvas.style.border = "1px solid black";

document.body.appendChild(canvas);

// Obtener el contexto 2D y dibujar
const ctx = canvas.getContext("2d");

// ┌───────────────────────────────────┐
// │         Nuestra Edicion           │
// └───────────────────────────────────┘

// ┌──────
// │  => CANVAS - IMG
// └──────
let img = new Image();
img.src =
  "https://th.bing.com/th/id/OIP.ty4h_2HJDoC9LKBtB8zlOQHaE8?rs=1&pid=ImgDetMain"; // URL de la imagen

// Esperar a que la imagen se cargue
img.onload = function () {
  // Dibujar la imagen en el canvas
  ctx.drawImage(img, 50, 50, 400, 400); // (imagen, x, y, ancho, alto)
};
// ┌────────────────────────
// │  => CANVAS - LINEA
// └────────────────────────
ctx.moveTo(5, 5); // Punto de inicio
ctx.lineTo(200, 100); // Punto final
ctx.stroke(); // Dibujar la línea

// ┌────────────────────────
// │  => CANVAS - TEXTO
// └────────────────────────
ctx.font = "30px Arial";
ctx.fillStyle = "blue"; // Color del texto
ctx.fillText("Hello World", 10, 50); // Texto y posición (x, y)

ctx.strokeText("Hello", 20, 34);
// ┌────────────────────────
// │  => CANVAS - gradiente
// └────────────────────────
// Crear gradiente
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Rellenar con gradiente !Imprime!
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80); // x, y //Tamaño del Red
