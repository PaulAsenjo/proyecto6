import { CustomError } from "../errors/CustomError.js"
import { InternalServerError } from "../errors/TypeError.js"


export const errorHandler = (err, req, res, next) => {

    if(!(err instanceof CustomError)) {
        err = new InternalServerError(
            err.mesagge || "Error Inesperado",
            err.statusCode || 500,
            err.details || "Tenemos un Error Imprevisto, contacta a nuestro equipo de soporte"
        );
    }

    const errorResponse = {
        status: "ERROR",
        mesagge: err.mesagge,
        statusCode: err.statusCode,
        details: err.details
    }

    console.error(
       `ERROR: ${errorResponse.mesagge} ---- Details: ${errorResponse.details} ---- Status: ${errorResponse.statusCode}` 
    )

    res.status(err.statusCode).json(errorResponse);
    
};
