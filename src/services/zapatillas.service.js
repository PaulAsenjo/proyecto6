import { ZapatillasError } from "../errors/TypeError.js";
import { Zapatillas } from "../model/Zapatillas.model.js";
import { notFoundActiveData, notFoundData } from "../utils/validate.js";


export const getAllZapatillasService = async () => {
    try {
        const zapatillas = await Zapatillas.find({ isActive: true });

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
        const zapatilla = await Zapatillas.findOne({ _id: id, isActive: true });

        notFoundActiveData(
            zapatilla,
            `No pudimos encontrar la Zapatilla con el id: ${id}`,
            `No pudimos encontrar la zapatilla con el id: ${id} en la base de datos en la colección de zapatillas`
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
        const zapatillaOld = await Zapatillas.findOneAndUpdate({ _id: id, isActive: true }, dataZapatilla);

        const zapatillaUpdated = await Zapatillas.findOne({ _id:id , isActive: true });

        notFoundActiveData(
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
        notFoundActiveData(
            zapatilla,
            `No pudimos encontrar la Zapatilla con el id: ${id}`,
            `No pudimos encontrar la zapatilla con el id: ${id} en la base de datos en la colección de zapatillas`
        );

        return zapatilla;
    } catch (error) {
        throw new ZapatillasError(`Error al intentar eliminar permanentemente la zapatilla con el id: ${id}`, 500, error);
    }
};


export const deleteZapatillasByIdService = async(id) => {
    try {
        const zapatilla = await Zapatillas.findByIdAndUpdate(id, { isActive: false });

        notFoundActiveData(
            zapatilla,
            `No pudimos encontrar la Zapatilla con el id: ${id}`,
            `No pudimos encontrar la zapatilla con el id: ${id} en la base de datos en la colección de zapatillas`
        );

    return zapatilla;
    } catch (error) {
        throw new ZapatillasError(`Error al intentar eliminar la zapatilla con el id: ${id}`, 500, error);
    }
};


export const restoreZapatillasByIdService = async(id) => {
    try {
        const zapatilla = await Zapatillas.findByIdAndUpdate(id, { isActive: true });

        notFoundData(
            zapatilla,
            `No pudimos encontrar la Zapatilla con el id: ${id}`,
            `No pudimos encontrar la zapatilla con el id: ${id} en la base de datos en la colección de zapatillas`
        );

        return zapatilla;
    } catch (error) {
        throw new ZapatillasError(`Error al intentar restaurar la zapatilla con el id: ${id}`, 500, error)
    }
};


export const getZapatillasPorMarcaService = async(brand) => {
    try {
        const zapatillas = await Zapatillas.find({ brand: brand, isActive: true });

        notFoundData(
            zapatillas,
            "No pudimos encontrar zapatillas para la marca especificada",
            "No pudimos encontrar zapatillas en la base de datos en la colección de zapatillas para la marca: " + brand
        );

        return zapatillas;
    } catch (error) {
        throw new ZapatillasError("Error al intentar obtener las zapatillas por marca", 500, error);
    }
};


export const getZapatillasPorStatusService = async(status) => {
    try {
        const zapatillas = await Zapatillas.find({ status: status, isActive: true });

        notFoundData(
            zapatillas,
            "No pudimos encontrar zapatillas para el status especificado",
            "No pudimos encontrar zapatillas en la base de datos en la colección de zapatillas para el estatus: " + status
        );

        return zapatillas;
    } catch (error) {
        throw new ZapatillasError("Error al intentar obtener las zapatillas por status", 500, error);
    }
};


export const contarZapatillasPorStatusService = async(status) => {
    try {
        // Contar zapatillas que coincidan con el estado y que estén activas
        const cantidad = await Zapatillas.countDocuments({ status: status, isActive: true });

        return cantidad; // Retorna la cantidad encontrada
    } catch (error) {
        throw new ZapatillasError("Error al intentar contar las zapatillas por status", 500, error);
    }
};





//ADMIN
export const getDeleteAllZapatillasService = async () => {
    try {
        const zapatillas = await Zapatillas.find({ isActive: false });

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


export const getDeleteZapatillasByIdService = async(id) => {
    try {
        const zapatilla = await Zapatillas.findByIdAndUpdate(id, { isActive: false });

        notFoundData(
            zapatilla,
            `No pudimos encontrar la Zapatilla con el id: ${id}`,
            `No pudimos encontrar la zapatilla con el id: ${id} en la base de datos en la colección de zapatillas`
        );

    return zapatilla;
    } catch (error) {
        throw new ZapatillasError(`Error al intentar eliminar la zapatilla con el id: ${id}`, 500, error);
    }
};