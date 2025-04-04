import { Router } from "express";
import { login, register, updatePersonalInfo } from "../controllers/auth.controller.js";



const router = Router();

router.post("/register", register);
router.post("/login", login);
router.put("/update/:id", updatePersonalInfo)





export default router;