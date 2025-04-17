import { log, color } from "./JS-Shared/Shared.js";

color("Accion -- Crear Fechas en JavaScript");
log(new Date()); // Fecha y hora actual
log(new Date("2025-03-18")); // Fecha específica (YYYY-MM-DD)
log(new Date(2025, 2, 18)); // Año, mes (0-indexado), día
log(new Date(0)); // Epoch (01/01/1970)

color("Accion -- Obtener Componentes de una Fecha");
const fecha = new Date();
log(fecha.getFullYear()); // Año (Ej: 2025)
log(fecha.getMonth()); // Mes (0 = Enero, 11 = Diciembre)
log(fecha.getDate()); // Día del mes
log(fecha.getDay()); // Día de la semana (0 = Domingo)
log(fecha.getHours()); // Hora actual
log(fecha.getMinutes()); // Minutos
log(fecha.getSeconds()); // Segundos
log(fecha.getMilliseconds()); // Milisegundos

color("Accion -- Modificar Fechas");
const fecha01 = new Date();
fecha01.setFullYear(2030); // Cambiar el año
fecha01.setMonth(11); // Cambiar al mes de diciembre (0 = Enero)
fecha01.setDate(25); // Cambiar el día
log(fecha01);

color("Accion -- Comparar Fechas y Calcular Diferencias");
const fecha1 = new Date("2025-03-18");
const fecha2 = new Date("2025-04-01");

const diferenciaMs = fecha2 - fecha1; // Diferencia en milisegundos
const diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24); // Convertir a días

log(diferenciaDias); // 14 días

color("Accion -- Convertir Fechas a Texto");
const fecha02 = new Date();
log(fecha02.toDateString()); // "Tue Mar 18 2025"
log(fecha02.toISOString()); // "2025-03-18T12:00:00.000Z" (Formato estándar)
log(fecha02.toLocaleDateString()); // Fecha en formato local
log(fecha02.toLocaleTimeString()); // Hora en formato local
