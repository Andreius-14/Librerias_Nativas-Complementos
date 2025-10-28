// Importar el módulo URL (en Node.js moderno)

// Ejemplo 1: Crear y parsear una URL
const miUrl = new URL(
  "https://ejemplo.com:8080/ruta/prueba?param1=valor1&param2=valor2#seccion",
);
const nuevaUrl = new URL("https://google.com");

console.log(miUrl);
console.log(nuevaUrl);

// [searchParams] Cuenta con Mas Metodos Personales

// Ejemplo 2: Trabajar con parámetros de búsqueda
const params = miUrl.searchParams;
console.log(params.get("param1")); // "valor1"
params.set("param3", "nuevo"); // Agregar nuevo parámetro
console.log(miUrl.toString()); // Muestra la URL actualizada

// Ejemplo 3: Construir una URL desde cero

nuevaUrl.pathname = "/search";
nuevaUrl.searchParams.append("q", "nodejs");
console.log(nuevaUrl.href); // "https://google.com/search?q=nodejs"
