//import { parse, stringify } from "yaml";

// [BASICO]
//const data = parse("nombre: Juan\nedad: 30");
//console.log(data); // { nombre: 'Juan', edad: 30 }

// [NOTA]
// Yaml - Es un tipo de archivo cual Json
// Yaml - Requiere metodos para ser leido por Js

import fs from "node:fs/promises";
import YAML from "yaml";

async function leerConfig() {
  try {
    // [Acceder a Archivo]
    const archivo = await fs.readFile("./config/conf.yaml", "utf8");
    // [Convercion a Objeto]
    const config = YAML.parse(archivo);
    // [Imprime en Consola]
    console.log(config);
  } catch (err) {
    console.error("Error al leer el archivo YAML:", err);
  }
}

leerConfig();
