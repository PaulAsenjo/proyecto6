import { ValidationError } from '../errors/TypeError.js';

export const formateUserData = ( hashedPassword, ...rest) => {
    
    const [ nombre, apellido, correo, fecha_nacimiento, imagen, isAdmin = false ] = rest;
    
    if (!nombre) {
        throw new ValidationError('Faltan nombre obligatorios para crear el usuario');
    }
    if (!apellido) {
        throw new ValidationError('Faltan apellido obligatorios para crear el usuario');
    }
    if (!correo) {
        throw new ValidationError('Faltan correo obligatorios para crear el usuario');
    }
    if (!fecha_nacimiento) {
        throw new ValidationError('Faltan fecha_nacimiento obligatorios para crear el usuario');
    }
    if(!imagen) {
        throw new ValidationError('Faltan imagen obligatorios para crear el usuario');
    }
    if (!hashedPassword) {
        throw new ValidationError('Faltan password obligatorios para crear el usuario');
    }

    return {
    nombre,
    apellido,
    correo,
    fecha_nacimiento,
    password: hashedPassword,
    imagen: imagen || null,
    isAdmin
    };
};