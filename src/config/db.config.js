import mongoose from "mongoose";
import { envs } from "./envs.config.js";
import { DataBaseError } from "../errors/TypeError.js";
import { updateDocsDB } from "../services/db/updateDocsDB.js";

const { db } = envs

export const dbConnect = async({ updateDocs=false, showModels=false } = {}) => {
    try {
        await mongoose.connect(db.uri);
        console.log("Nos conectamos con MongoDB!!! 👟");

        if(updateDocs) {
            await updateDocsDB();
            console.log("Documentos actualizados con éxito");
        }
    } catch (error) {
        throw new DataBaseError("No nos pudimos conectar a la base de datos", 500, error);
    }
};