import { log, color } from "./Funciones_Compartidas.js";

color("Accion -- Redondeo");
log(Math.round(4.6)); // 5 (Redondeo normal)
log(Math.floor(4.9)); // 4 (Redondeo hacia abajo)
log(Math.ceil(4.1)); // 5 (Redondeo hacia arriba)
log(Math.trunc(4.9)); // 4 (Elimina decimales)

color("Accion -- Random");
log(Math.random()); // Número entre 0 y 1
log(Math.floor(Math.random() * 10)); // Número entre 0 y 9
log(Math.floor(Math.random() * 100) + 1); // Entre 1 y 100

color("Accion -- Máximos y Mínimos");
log(Math.max(10, 5, 8, 20)); // 20
log(Math.min(10, 5, 8, 20)); // 5

color("Accion -- Potencias y Raíces");
log(Math.pow(2, 3)); // 2^3 = 8
log(Math.sqrt(16)); // √16 = 4
log(Math.cbrt(27)); // ³√27 = 3

color("Accion -- Logaritmos y Exponenciales");
log(Math.log(10)); // Logaritmo natural (base e)
log(Math.log10(100)); // Logaritmo base 10 → 2
log(Math.exp(2)); // e^2

color("Accion -- Funciones Trigonométricas");
log(Math.sin(Math.PI / 2)); // 1
log(Math.cos(0)); // 1
log(Math.tan(Math.PI / 4)); // 1

color("Accion -- Menos Usadas");
log(Math.sinh(1)); // Seno hiperbólico
log(Math.cosh(1)); // Coseno hiperbólico
log(Math.tanh(1)); // Tangente hiperbólica

log(Math.log2(8)); // Logaritmo base 2
log(Math.log10(100)); // Logaritmo base 10

log(Math.fround(1.337)); // Aproxima a 32 bits
log(Math.imul(3, 4)); // Multiplica como enteros de 32 bits
