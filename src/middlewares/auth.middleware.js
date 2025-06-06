import jwt from "jsonwebtoken";

import { envs } from "../config/envs.config.js";


const { secretKey } = envs.auth;

export const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Token no proporcionado",
            statusCode: 401
        });
    }

    const token = authorization.slice(7);

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Token inválido o inesperado",
            statusCode: 401,
            error: error.message
        });
    }
};
