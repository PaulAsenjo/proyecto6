import { NotFoundError, ValidationError } from "../errors/TypeError.js"


export const notFoundData = (data, message, details) => {
    if(!data) throw new NotFoundError(
        message || "No se encontraron los datos",
        details || "No se encontraron los datos solicitados"
    );
    
    if(Array.isArray(data) && data.length === 0) throw new NotFoundError(
        message || "No se encontraron los datos",
        details || "No se encontraron los datos solicitados"
    );

    if(!data.isActive) throw new NotFoundError(
        message || "No se encontraron los datos",
        details || "No se encontraron los datos solicitados"
    );
};