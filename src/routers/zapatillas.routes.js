import { Router } from "express";
import { createZapatillas, deleteZapatillaById, getAllZapatillas, getDeleteAllZapatillas, getDeleteZapatillasByID, getZapatillasByID, permaDeleteZapatillaById, restoreZapatillasById, updateZapatillasById } from "../controllers/zapatillas.controller.js";


const router = Router();

router.get("/zapatillas", getAllZapatillas);
router.get("/zapatillas/:id", getZapatillasByID);
router.post("/zapatillas", createZapatillas);
router.put("/zapatillas/:id", updateZapatillasById);
router.delete("/zapatillas/admin/perma:id", permaDeleteZapatillaById);
router.delete("/zapatillas/:id", deleteZapatillaById);


//ADMIN
router.get("/zapatillas/admin/erased", getDeleteAllZapatillas);
router.get("/zapatillas/admin/erased/:id", getDeleteZapatillasByID);
router.patch("/zapatillas/admin/restore/:id", restoreZapatillasById);

export default router;