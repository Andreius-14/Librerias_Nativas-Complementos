import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             PRINCIPAL                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

console.log(dayjs());

//  [Obtener la Fecha y Hora Actual]

console.log(dayjs().format()); // Ejemplo: 2025-03-19T12:34:56+00:00

//  [Formatear Fechas]
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss")); // 2025-03-19 12:34:56
console.log(dayjs().format("dddd, MMMM D YYYY")); // Wednesday, March 19 2025
console.log(dayjs().format("hh:mm A")); // 12:34 PM

//  [Sumar y Restar Tiempo]
console.log(dayjs().add(7, "day").format("YYYY-MM-DD")); // +7 días
console.log(dayjs().subtract(2, "month").format("YYYY-MM-DD")); // -2 meses

//  [Diferencia Entre Fechas]
const fecha1 = dayjs("2025-03-19");
const fecha2 = dayjs("2024-12-25");

console.log(fecha1.diff(fecha2, "days"), " Dias"); // Diferencia en días
console.log(fecha1.diff(fecha2, "months"), " Meses"); // Diferencia en meses

//  [Hace X Tiempo]
console.log(dayjs("2024-12-25").fromNow()); // Hace 3 meses
console.log(dayjs().subtract(10, "minutes").fromNow()); // Hace 10 minutos

//  [Validar Fechas]
console.log(dayjs("2025-02-30", "YYYY-MM-DD", true).isValid()); // false
console.log(dayjs("2025-02-28", "YYYY-MM-DD", true).isValid()); // true
