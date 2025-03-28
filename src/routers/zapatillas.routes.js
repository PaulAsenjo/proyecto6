import { Router } from "express";
import { createZapatillas, getAllZapatillas, getZapatillasByID, permaDeleteZapatillaById, updateZapatillasById } from "../controllers/zapatillas.controller.js";


const router = Router();

router.get("/zapatillas", getAllZapatillas);
router.get("/zapatillas/:id", getZapatillasByID);
router.post("/zapatillas", createZapatillas);
router.put("/zapatillas/:id", updateZapatillasById);
router.delete("/zapatillas/:id", permaDeleteZapatillaById);

export default router;