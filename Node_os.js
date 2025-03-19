import os from "node:os";
import { log, color } from "./Funciones_Compartidas.js";

color("Informacion -- Sistema Operativo");

log(os.type()); //  sistema operativo
log(os.platform()); //  Plataforma del SO (ejemplo: "linux", "win32")
log(os.release()); //  Versión del SO

color("Informacion -- CPUs");
log(os.cpus());

// Convertir CPUs a formato legible
//log(JSON.stringify(os.cpus(), null, 2));

color("Informacion -- Hardware");
log(os.totalmem() / (1024 * 1024 * 1024) + " RAM");
log(os.freemem() / (1024 * 1024 * 1024) + " SPACE");

color("Informacion -- Red");
log(os.networkInterfaces());

color("Informacion -- EXTRA");
log(os.arch()); // Arquitectura
log(os.tmpdir()); // Directorio Temporal
log(os.userInfo());
log(os.homedir()); //Home Usuario
log(os.hostname()); //Mi Pc

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃               ANALOGIA                ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

color("Informacion -- CHATGPT");
console.log("Sistema Operativo:", os.type()); // Linux, Darwin (macOS), Windows_NT
console.log("Plataforma:", os.platform()); // linux, win32, darwin
console.log("Versión del SO:", os.release()); // Ej: 6.2.9200
console.log("Arquitectura CPU:", os.arch()); // x64, arm64, ia32
console.log("Tiempo de actividad (uptime):", os.uptime(), "segundos");

console.log("CPU(s):", os.cpus().length, "núcleos");
console.log("Memoria Total:", os.totalmem() / 1e9, "GB");
console.log("Memoria Libre:", os.freemem() / 1e9, "GB");

console.log("Interfaces de Red:", os.networkInterfaces());
console.log("Host:", os.hostname()); // Nombre del equipo

console.log("Directorio Home:", os.homedir());
console.log("Directorio Temporal:", os.tmpdir());

console.log("Información del Usuario:", os.userInfo());
