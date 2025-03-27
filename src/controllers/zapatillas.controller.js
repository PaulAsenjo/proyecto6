import { NotFoundError } from "../errors/TypeError.js";
import { Zapatillas } from "../model/Zapatillas.model.js";

export const getAllZapatillas = async(req, res, next) => {
    try {
        const zapatillas = await Zapatillas.find();

        if(zapatillas.length === 0 || zapatillas === null) {
            throw new NotFoundError(
                "No pudimos encontrar las zapatillas",
                "No pudimos encontrar las zapatillas en la base de datos en la colección de zapatillas"
            );
        }

        res.status(200).json({
            message: "Zapatillas encontradas con éxito",
            statusCode: 200,
            data: zapatillas 
        });
    } catch (error) {
        next(error);    
    }
};