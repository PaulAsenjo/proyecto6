import jwt from "jsonwebtoken";

import { AuthError } from "../errors/TypeError.js";
import { Usuario } from "../model/Usuario.model.js";
import { formateUserData } from "../utils/formateUserCreate.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { notFoundActiveData } from "../utils/validate.js";

import { envs } from "../config/envs.config.js";

const { secretKey, jwtExpiration } = envs.auth;



export const registerService = async({
    nombre,
    apellido,
    correo,
    fecha_nacimiento,
    password,
    imagen,
    isAdmin = false
}) => {
    try {
        const hashedPassword = await hashPassword(password);

        const userData = formateUserData(hashedPassword,
            nombre,
            apellido,
            correo,
            fecha_nacimiento,
            imagen,
            isAdmin
        );
        console.log(userData);
        const user = await Usuario.create(userData);

        return user;
    } catch (error) {
        console.error(error)
        throw new Error("Error al intentar registrar el usuario", 500, error);       
    }
};


export const loginService = async({ correo, password }) => {
    try {
       const user = await Usuario.findOne({ correo }); 

       const passwordMatch = await comparePassword(password, user.password);

       if(!user || !passwordMatch) {
        throw new AuthError("Credenciales incorrectas", 401);
       }
       const token = jwt.sign({
           uid: user._id,
           nombre: user.nombre,
           correo: user.correo,
           isAdmin: user.isAdmin
       }, secretKey, {
           expiresIn: jwtExpiration 
       });
       return [user, token];
    } catch (error) {
        throw new AuthError("Error al intentar iniciar sesión", 500, error);
    }
};

//Actualizar datos usuario
export const updatePersonalInfoByIdService = async(id, dataUsuario) => {
    try {
        const datosUsuarioOld = await Usuario.findOneAndUpdate(
            { _id: id, isActive: true }, 
            dataUsuario);
        
        notFoundActiveData(
            datosUsuarioOld,
            `No pudimos encontrar el usuario con el id: ${id}`,
            `No pudimos encontrar el usuario con el id: ${id} en la base de datos en la colección de usuarios`
        );

        const datosUsuarioUpdated = await Usuario.findOneAndUpdate(
            { _id: id, isActive: true },
            dataUsuario,
            { new: true } 
        );

        return [datosUsuarioOld, datosUsuarioUpdated];
    } catch (error) {
        throw new AuthError("Error al intentar actualizar los datos del usuario con el ID", 500, error);
    }
};


export const getAllUsersService = async() => {
    try {
        const users = await Usuario.find({ isActive: true });
    
        return users;
    } catch (error) {
        throw new Error('Error al intentar obtener todos los usuarios', 500, error);
    }
};

        