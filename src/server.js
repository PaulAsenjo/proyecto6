import express from "express";


import { envs } from "./config/envs.config.js";
import { dbConnect } from "./config/db.config.js";

import zapatillasRouter from "./routers/zapatillas.routes.js";
import authRouter from "./routers/auth.routes.js";
import { errorHandler } from "./middlewares/errorhandler.js";

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const app = express();

dbConnect();

//Middlewares de CORS

app.use(express.json());
app.use(express.urlencoded( { extended: true}));

//Middlewares de rutas

app.use("/api/v1", zapatillasRouter);
app.use("/api/v1/auth", authRouter);

// Configuración de Swagger

const __filename = new URL(import.meta.url).pathname; 
const __dirname = path.dirname(__filename); 
const swaggerDocument = YAML.load(path.join(__dirname, 'api.docs.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//Middlewares de errores

app.use(errorHandler);


app.listen(envs.port, () => {
    console.log(`Servidor corriendo en el puerto ${envs.port} 👽`) 
});