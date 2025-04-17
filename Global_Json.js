import { log, color } from "./JS-Shared/Shared.js";

color("Proceso -- Objeto a JSON");

const usuario = { nombre: "Alice", edad: 25, activo: true };
const jsonString = JSON.stringify(usuario);
console.log(jsonString); // '{"nombre":"Alice","edad":25,"activo":true}'

color("Proceso -- JSON a Objeto");

const jsonData = '{"nombre":"Alice","edad":25,"activo":true}';
const objeto = JSON.parse(jsonData);
console.log(objeto.nombre); // Alice
console.log(objeto.edad); // 25

color("Proceso -- Extra stringify");

color("Formateo y Espaciado");
const valor = { nombre: "Alice", edad: 25, activo: true };
console.log(JSON.stringify(valor, null, 2));
// Formato bonito con 2 espacios:

color("Filtrar Propiedades");
const user = { nombre: "Alice", edad: 25, activo: true };
const jsonFiltrado = JSON.stringify(user, ["nombre", "activo"]);
console.log(jsonFiltrado);
// '{"nombre":"Alice","activo":true}'
