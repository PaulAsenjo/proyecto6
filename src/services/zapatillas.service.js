import { ZapatillasError } from "../errors/TypeError.js";
import { Zapatillas } from "../model/Zapatillas.model.js";
import { notFoundData } from "../utils/validate.js";


export const getAllZapatillasService = async () => {
    try {
        const zapatillas = await Zapatillas.find();

        notFoundData(
            zapatillas,
            "No pudimos encontrar las zapatillas",
            "No pudimos encontrar las zapatillas en la base de datos en la colección de zapatillas"
        );

        return zapatillas;
    } catch (error) {
        throw new ZapatillasError("Error al intentar obtener todas las zapatillas", 500, error);
    }
};


export const getZapatillasByIDService = async (id) => {
    try {
        const zapatilla = await Zapatillas.findById(id);

        notFoundData(
            zapatilla,
            `No pudimos encontrar las Zapatillas con el id: ${id}`,
            `No pudimos encontrar las zapatillas con el id: ${id} en la base de datos en la colección de zapatillas`
        );

        return zapatilla;
    } catch (error) {
        throw new ZapatillasError("Error al intentar obtener una zapatilla por ID", 500, error);
    }
};


export const createZapatillasService = async(dataZapatilla) => {
    try {
        
        const zapatilla = await Zapatillas.create(dataZapatilla);

        return zapatilla;
    } catch (error) {
        throw new ZapatillasError("Error al intentar crear una zapatilla", 500, error); 
        
    }
};


export const updateZapatillasByIdService = async(id, dataZapatilla) => {
    try {
        //Hay que validar datos
        const zapatillaOld = await Zapatillas.findOneAndUpdate({ _id: id }, dataZapatilla);

        const zapatillaUpdated = await Zapatillas.findById(id);

        notFoundData(
            zapatillaOld,
            `No pudimos encontrar las Zapatillas con el id: ${id}`,
            `No pudimos encontrar las zapatillas con el id: ${id} en la base de datos en la colección de zapatillas`
        );

        return [zapatillaOld, zapatillaUpdated];
    } catch (error) {
        throw new ZapatillasError("Error al intentar actualizar la zapatilla con el ID", 500, error);
    }
};


export const permaDeleteZapatillaByIdService = async(id) => {
    try {
        const zapatilla = await Zapatillas.findByIdAndDelete(id);
        notFoundData(
            zapatilla,
            `No pudimos encontrar las Zapatillas con el id: ${id}`,
            `No pudimos encontrar las zapatillas con el id: ${id} en la base de datos en la colección de zapatillas`
        );

        return zapatilla;
    } catch (error) {
        throw new ZapatillasError(`Error al intentar eliminar permanentemente la zapatilla con el id: ${id}`, 500, error);
    }
};