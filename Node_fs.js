import { color } from "./Funciones_Compartidas.js";
import fs from "node:fs/promises"; // Cambia esta línea

async function archivos() {
  const archivoPrueba = "./archivoPrueba.txt";
  const archivoReal = "./txt.txt";

  await fs
    .writeFile(archivoPrueba, "Hola Mundo !")
    .then(() => console.log("Reescribiendo"))
    .catch((err) => console.error("Error al reescribir:", err));

  await fs
    .unlink(archivoPrueba)
    .then(() => console.log("Archivo Borrado"))
    .catch((err) => console.error("Error al borrar el archivo:", err));

  await fs
    .readFile(archivoReal, "utf8")
    .then((contenido) => console.log(contenido))
    .catch((err) => console.error("Error al leer el archivo:", err));

  await fs
    .appendFile(archivoReal, "\ncontenido adicional222")
    .then(() => console.log("Contenido añadido"))
    .catch((err) => console.error("Error al añadir contenido:", err));

  await fs
    .access(archivoReal)
    .then(() => console.log("El Archivo Existe"))
    .catch((err) => console.error("Error al verificar el archivo:", err));
}

async function directorios() {
  console.log("DIRECTORIOS");

  await fs
    .mkdir("fs-prueba/")
    .then(() => console.log("Directorio Creado"))
    .catch((err) => console.error("Error al crear el directorio:", err));

  await fs
    .rmdir("fs-prueba/")
    .then(() => console.log("Directorio Eliminado"))
    .catch((err) => console.error("Error al eliminar el directorio:", err));

  await fs
    .readdir("./")
    .then((files) => console.log("Archivos en el directorio actual:", files))
    .catch((err) => console.error("Error al listar archivos:", err));
}

async function main() {
  color("ARCHIVOS");
  await archivos();
  color("DIRECTORIOS");
  await directorios();
}

main();
