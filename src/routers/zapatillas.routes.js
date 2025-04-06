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
router.put("/zapatillas/:id", updateZapatillasById);
router.delete("/zapatillas/:id", authMiddleware, deleteZapatillaById);




//ADMIN
router.get("/zapatillas/admin/erased", getDeleteAllZapatillas);
router.get("/zapatillas/admin/erased/:id", getDeleteZapatillasByID);
router.patch("/zapatillas/admin/restore/:id", restoreZapatillasById);
router.delete("/zapatillas/admin/perma/:id", permaDeleteZapatillaById);

export default router;