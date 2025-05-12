import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

const zapatillasSchema = new Schema({
    model: { type: String, require: true },
    brand: { type: String, required: true },
    colorway: { type: [String], required: true },
    marketValue: { type: Number, required: true },
    releaseYear: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ["En colección", "Pendiente", "Vendida"], 
        default: "Pendiente" 
    },
    precio: {
        type: Number,
        required: true,
        min: [0, 'El precio debe ser mayor o igual a 0'],
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'El stock debe ser mayor o igual a 0'],
    },
    imagen: {
        type: String,
        trim: true,
        validate: {
            validator: (value) => URL_IMAGE.test(value) || value === '',
            message: 'URL de la imagen no válida',
        },
    },
    isActive: { type: Boolean, default: true }
}, { 
    toJSON:{
        transform: (doc, ret) => {
            delete ret.isActive;
            return ret;
        }
    },
    versionKey: false, 
    timestamps: false });

export const Zapatillas = mongoose.model("zapatillas", zapatillasSchema);







