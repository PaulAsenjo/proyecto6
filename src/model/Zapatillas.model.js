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







