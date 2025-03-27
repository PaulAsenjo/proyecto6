import mongoose from "mongoose";
import { envs } from "./envs.config.js";
import { DataBaseError } from "../errors/TypeError.js";

const { db } = envs

export const dbConnect = async() => {
    try {
        await mongoose.connect(db.uri);
        console.log("Nos conectamos con MongoDB!!! 👟")
    } catch (error) {
        throw new DataBaseError("No nos pudimos conectar a la base de datos", 500, error);
    }
};