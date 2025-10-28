import dotenv from "dotenv";
import process from "node:process";

const log = console.log;
const env = process.env;

// [Importar]
//dotenv.config();  //Si .env esta en ruta Principal
dotenv.config({ path: "./config/.env" }); // Requiere Especificacion

log(env.DB_USER);
log(env.S3_BUCKET);
log(env.SECRET_KEY);
log(env.DB_HOST);
log(env.DB_USER);
log(env.DB_PASSWORD);

/*
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"
DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=password

*/
