import { 
    contarZapatillasPorStatusService,
    createZapatillasService, 
    deleteZapatillasByIdService, 
    getAllZapatillasService, 
    getDeleteAllZapatillasService, 
    getDeleteZapatillasByIdService, 
    getZapatillasByIDService, 
    getZapatillasPorMarcaService, 
    getZapatillasPorStatusService, 
    permaDeleteZapatillaByIdService, 
    restoreZapatillasByIdService, 
    updateZapatillasByIdService } from "../services/zapatillas.service.js";

export const getAllZapatillas = async(req, res, next) => {
    try {
        const zapatillas = await getAllZapatillasService();

        res.status(200).json({
            message: "Zapatillas encontradas con éxito",
            statusCode: 200,
            data: zapatillas 
        });
    } catch (error) {
        next(error);    
    }
};

export const getZapatillasByID = async(req, res, next) => {
    try {
        const { id } = req.params;
        const zapatillas = await getZapatillasByIDService(id);

        res.status(200).json({
            message: `Zapatillas con el id: ${id} encontrada con éxito`,
            statusCode: 200,
            data: zapatillas 
        });
    } catch (error) {
        next(error);
    }
};

export const createZapatillas = async(req, res, next) => {
    try {
        const dataZapatilla = req.body;
        const zapatillas = await createZapatillasService(dataZapatilla);

        res.status(201).json({
            message: "Zapatilla creada con éxito",
            statusCode: 201,
            data: zapatillas 
        });
    } catch (error) {
        next(error);
    }
};


export const updateZapatillasById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const dataZapatilla = req.body;

        const [ zapatillaOld, zapatillaUpdated ] = await updateZapatillasByIdService(id, dataZapatilla);

        const custom = {
            oldData: zapatillaOld
        };

        res.status(201).json({
            message: `Zapatillas con el id: ${id} actualizada con éxito`, custom,
            statusCode: 201,
            data: zapatillaUpdated,
        });
    } catch (error) {
        next(error);
    }
};


export const permaDeleteZapatillaById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const zapatilla = await permaDeleteZapatillaByIdService(id);

        res.status(200).json({
            message: `Zapatillas con el id: ${id} eliminada con éxito`,
            statusCode: 200,
            data: zapatilla,
        });
    } catch (error) {
        next(error);
    }
};


export const deleteZapatillaById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const zapatilla = await deleteZapatillasByIdService(id);

        res.status(200).json({
            message: `Zapatillas con el id: ${id} eliminada con éxito`,
            statusCode: 200,
            data: zapatilla,
        });
    } catch (error) {
        next(error);
    }
};


export const restoreZapatillasById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const zapatilla = await restoreZapatillasByIdService(id);

        res.status(200).json({
            message: `Zapatillas con el id: ${id} restaurada con éxito`,
            statusCode: 200,
            data: zapatilla,
        });    
    } catch (error) {
        next(error);
    }
};


export const getZapatillasPorMarca = async(req, res, next) => {
    try {
        const { brand } = req.params;
        const zapatillas = await getZapatillasPorMarcaService(brand);

        res.status(200).json({
            message: "Zapatillas encontradas con éxito",
            statusCode: 200,
            data: zapatillas,
        });    
    } catch (error) {
        next(error);
    }
};


export const getZapatillasPorStatus = async(req, res, next) => {
    try {
        const { status } = req.params;
        const zapatillas = await getZapatillasPorStatusService(status);

        res.status(200).json({
            message: "Zapatillas encontradas con éxito",
            statusCode: 200,
            data: zapatillas,
        });    
    } catch (error) {
        next(error);
    }
};


export const contarZapatillasPorStatus = async(req, res, next) => {
    const { status } = req.params; 

    try {
        const cantidad = await contarZapatillasPorStatusService(status);
        
        res.status(200).json({
            message: `Cantidad de zapatillas en estado "${status}": ${cantidad}`,
            statusCode: 200,
            data: { cantidad },
        });
    } catch (error) {
        next(error);
    }
};





//ADMIN
export const getDeleteAllZapatillas = async(req, res, next) => {
    try {
        const zapatillas = await getDeleteAllZapatillasService();

        res.status(200).json({
            message: "Zapatillas encontradas con éxito",
            statusCode: 200,
            data: zapatillas 
        });
    } catch (error) {
        next(error);    
    }
};

export const getDeleteZapatillasByID = async(req, res, next) => {
    try {
        const { id } = req.params;
        const zapatillas = await getDeleteZapatillasByIdService(id);

        res.status(200).json({
            message: `Zapatillas con el id: ${id} encontrada con éxito`,
            statusCode: 200,
            data: zapatillas 
        });
    } catch (error) {
        next(error);
    }
};
    