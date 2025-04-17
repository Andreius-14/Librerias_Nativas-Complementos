import axios from "axios";

// ____            _
//| __ )  __ _ ___(_) ___ ___
//|  _ \ / _` / __| |/ __/ _ \
//| |_) | (_| \__ \ | (_| (_) |
//|____/ \__,_|___/_|\___\___/
//

// -- Este Es Redundante
// -- Aunque Facil de Leer
// -- Preferible TryCath

//async function jsonGet(ruta) {
//  await axios
//    .get(ruta)
//    .then((response) => console.log(response.data))
//    .catch((error) => console.error(error));
//}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃              FUNCTION                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

async function jsonGet(ruta) {
  try {
    const response = await axios.get(ruta);
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error en GET:", error);
  }
}

async function jsonDelete(ruta) {
  try {
    const response = await axios.delete(ruta);
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error en DELETE:", error);
  }
}

async function jsonPost(ruta, objetoJson) {
  try {
    const response = await axios.post(ruta, objetoJson);
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error en POST:", error);
  }
}

async function jsonEdit(rutaEdit, editJson) {
  try {
    const response = await axios.patch(rutaEdit, editJson);
    console.log(response.data.email);
  } catch (error) {
    console.error("❌ Error en PATCH:", error);
  }
}

//{
//      email: "donaymilin@ether.com",
//}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                MAIN                   ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

async function main() {
  const url = "http://localhost:3000";
  const valor = `${url}/posts`;

  const jsonNewValor = {
    title: "Hola Mundo",
    views: 500,
  };

  console.log("\n[Antes]");
  await jsonGet(valor);
  console.log("\n[NEW]");
  await jsonPost(valor, jsonNewValor);
  console.log("\n[Despues]");
  await jsonGet(valor);
}

main(); // Ejecutamos la función principal

/*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃        AXIOS - MULTIPLES GET          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

// GET - Multiple
//axios
//  .all([
//    axios.get("https://jsonplaceholder.typicode.com/comments?_limit=2"),
//    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=2"),
//  ])
//  .then(
//    axios.spread((comments, posts) => {
//      console.log(comments.data);
//      console.log(posts.data);
//    }),
//  )
//  .catch((err) => console.error(err));

/*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃     AXIOS - PARAMETROS ESPECIFICOS    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

//axios({
//  method: "get",
//  url: "https://jsonplaceholder.typicode.com/posts/1",
//  timeout: 5000, // 5 segundos
//  headers: { Authorization: "Bearer token123" },
//})
//  .then((response) => console.log(response.data))
//  .catch((error) => console.error("Error:", error));

/*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃              INSTANCIA                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

//const api = axios.create({
//  baseURL: "https://jsonplaceholder.typicode.com",
//  timeout: 5000,
//  headers: { "Content-Type": "application/json" },
//});
//
//api
//  .get("/posts/1")
//  .then((response) => console.log(response.data))
//  .catch((error) => console.error("Error:", error));
