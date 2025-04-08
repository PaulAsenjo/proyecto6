import { Router } from "express";
import { 
    contarZapatillasPorStatus,
    createZapatillas, 
    deleteZapatillaById, 
    getAllZapatillas, 
    getDeleteAllZapatillas, 
    getDeleteZapatillasByID, 
    getZapatillasByID, 
    getZapatillasPorMarca, 
    getZapatillasPorStatus, 
    permaDeleteZapatillaById, 
    restoreZapatillasById, 
    updateZapatillasById } from "../controllers/zapatillas.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";


const router = Router();

router.get("/zapatillas", getAllZapatillas);
router.get("/zapatillas/:id", getZapatillasByID);
router.get("/zapatillas/brand/:brand", getZapatillasPorMarca);
router.get("/zapatillas/status/:status", getZapatillasPorStatus);
router.get("/zapatillas/cantidad/status/:status", contarZapatillasPorStatus);
router.post("/zapatillas", createZapatillas);




//ADMIN
router.get("/zapatillas/admin/erased", authMiddleware, getDeleteAllZapatillas);
router.get("/zapatillas/admin/erased/:id", authMiddleware, getDeleteZapatillasByID);
router.patch("/zapatillas/admin/restore/:id", authMiddleware, restoreZapatillasById);
router.put("/zapatillas/:id", authMiddleware, updateZapatillasById);
router.delete("/zapatillas/admin/perma/:id", authMiddleware, permaDeleteZapatillaById);
router.delete("/zapatillas/admin/:id", authMiddleware, deleteZapatillaById);

export default router;