import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: { type: String, require: true, trim: true },
    apellido: { type: String, required: true },
    correo: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        lowercase: true,
        match: [/.+@.+\..+/, 'El correo no es valido'], 
    },
    fecha_nacimiento: { type: Date, required: true },
    password: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
    isAdmin: {type: Boolean, default: false }
}, { 
    toJSON: {
        transform: (doc, ret) => {
            delete ret.password;
            delete ret.isActive;
            delete ret.isAdmin;
            return ret;
        }
    },
    versionKey: false, 
    timestamps: false });



export const Usuario = mongoose.model('usuario', usuarioSchema);