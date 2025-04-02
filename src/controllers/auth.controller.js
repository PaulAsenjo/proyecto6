import { loginService, registerService } from "../services/auth.service.js";


export const register = async(req, res, next) => {
    try {     
        const userData = req.body;
        console.log("📌 Datos recibidos en la API:", userData);
        const user = await registerService(userData);

        res.status(201).json({
            message: "Usuario creado con éxito",
            statusCode: 201,
            data: user,
        });
    } catch (error) {
        next(error);
        console.error(error);
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