import express from "express";
import cors from "cors";


import { envs } from "./config/envs.config.js";
import { dbConnect } from "./config/db.config.js";

import zapatillasRouter from "./routers/zapatillas.routes.js";
import authRouter from "./routers/auth.routes.js";
import mercadoPago from "./routers/payments.routes.js";
import { errorHandler } from "./middlewares/errorhandler.js";


const app = express();

dbConnect({ updateDocs: true });

//Middlewares de CORS
app.use(cors());

//Middlewares para parsear el body a JSON
app.use(express.json());
app.use(express.urlencoded( { extended: true}));

//Middlewares para servir archivos estáticos
app.use("/uploads", express.static("public/uploads"));//http:localhost:3000/uploads/

//Middlewares de rutas

app.use("/api/v1", zapatillasRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1", mercadoPago);

//Middlewares de errores

app.use(errorHandler);


app.listen(envs.port, () => {
    console.log(`Servidor corriendo en el puerto ${envs.port} 👽`) 
});