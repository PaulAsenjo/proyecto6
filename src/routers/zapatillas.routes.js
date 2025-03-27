import { Router } from "express";
import { getAllZapatillas } from "../controllers/zapatillas.controller.js";


const router = Router();

router.get("/zapatillas", getAllZapatillas);

export default router;