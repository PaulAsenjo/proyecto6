import { DataBaseError } from "../../errors/TypeError.js"
import { Zapatillas } from "../../model/Zapatillas.model.js";


export const updateDocsDB = async() => {
    try {
        await Zapatillas.updateMany(
            { isActive: { $exists: false} }, 
            { $set: { isActive: true } }
        );   
    } catch (error) {
        throw new DataBaseError("No pudimos actualizar los documentos en la base de datos", 500, error);
    }
};