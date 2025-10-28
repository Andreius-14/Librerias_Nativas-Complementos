import path from "node:path";
import { log, color } from "./JS-Shared/Shared.js";
const ruta1 = "/home/carlosa/";
const ruta2 = "termporales/";

const rutaLong =
  "/mnt/d/101__Github/📁 Librerias/Nativo - Externo/Libreria_JSNativa/Node_url.js";

const obj = {
  dir: "/home/usuario/proyecto",
  base: "archivo.txt",
};

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             Crear Rutas               ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
color("Crear Rutas");
log(path.format(obj));
log(path.join(ruta1, ruta2));
log(path.join("carpeta", "subcarpeta", "archivo.txt"));

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             Fragmentar                ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
color("Fragmentar");
// [Nombre]
log(path.basename(rutaLong, path.extname(rutaLong)));

// [Extension]
log(path.extname(rutaLong));

// [Formato Objeto]
log(path.parse(rutaLong));

// [Ruta menos archivo]
log(path.dirname("/home/usuario/proyecto/archivo.txt"));

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             Ruta Actual               ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
color("Ruta Actual");
log(path.resolve("archivo.txt"));

// Ruta Actual
log(path.resolve(""));
// Bool - Es ruta Absoluta?
log(path.isAbsolute(path.resolve("")));
