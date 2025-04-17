import { log, color } from "./JS-Shared/Shared.js";

color("Accion -- Crear una Expresión Regular");
const regex1 = /hola/; // Sintaxis literal
const regex2 = new RegExp("hola"); // Usando el constructor

log(regex1.test("hola mundo")); // true
log(regex2.test("adiós mundo")); // false

color("Accion -- Métodos Principales");

color("TEST");
const regex_01 = /javascript/i; // 'i' hace que sea insensible a mayúsculas
log(regex_01.test("Aprendiendo JavaScript")); // true

color("EXEC");
const regex_02 = /(\d{4})-(\d{2})-(\d{2})/;
const resultado = regex_02.exec("Fecha: 2025-03-18");
log(resultado[0]); // "2025-03-18"
log(resultado[1]); // "2025"
log(resultado.index); // Posición de coincidencia

color("MATCH");
const texto_01 = "Mi número es 555-1234";
const regex_03 = /\d{3}-\d{4}/;
log(texto_01.match(regex_03)); // ["555-1234"]

color("REPLACE");
const texto_02 = "Hola mundo";
log(texto_02.replace(/mundo/, "JavaScript")); // "Hola JavaScript"
