import mongoose from "mongoose";
import { envs } from "./envs.config.js";

const { db } = envs

export const dbConnect = async() => {
    try {
        await mongoose.connect(db.uri);
        console.log("Nos conectamos con MongoDB!!! 👟")
    } catch (error) {
        console.error("No pudimos conectar con MongoDB 😭", error)
    }
}