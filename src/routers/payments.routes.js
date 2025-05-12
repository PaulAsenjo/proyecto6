import { Router } from "express";
import { createPayment } from "../controllers/payment.controller.js";


const router = Router();

router.post("/payments/create-payment", createPayment);

export default router;