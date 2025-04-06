import { loginService, registerService, updatePersonalInfoByIdService, getAllUsersService } from "../services/auth.service.js";


export const register = async(req, res, next) => {
    try {     
        const userData = req.body;
        const user = await registerService(userData);

        res.status(201).json({
            message: "Usuario creado con éxito",
            statusCode: 201,
            data: user,
        });
    } catch (error) {
        next(error);
    }
};


export const login = async(req, res, next) => {
    try {
        const [ user, token ] = await loginService(req.body);
        const custom = {
            token
        };

        res.status(200).json({
            message: "Usuario logueado con éxito",
            statusCode: 200,
            data: user,
            custom: custom
        });
        
    } catch (error) {
        next(error);
    }
};


export const updatePersonalInfo = async(req, res, next) => {
    try {
        const { id } = req.params;
        const dataUsuario = req.body;

        const [ datosUsuarioOld, datosUsuarioUpdated ] = await updatePersonalInfoByIdService(id, dataUsuario);

        const custom = {
            oldData: datosUsuarioOld
        };

        res.status(201).json({
            message: `Usuario con el id: ${id} actualizado con éxito`, custom,
            statusCode: 201,
            data: datosUsuarioUpdated,
        });
    } catch (error) {
        next(error);
    }
};


export const getAllUsers = async(req, res, next) => {
    try {
        const users = await getAllUsersService();

        res.status(200).json({
            message: 'Usuarios encontrados con éxito',
            statusCode: 200,
            data: users,
        });
    } catch (error) {
        next(error);
    }
};


