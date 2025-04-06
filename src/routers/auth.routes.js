import { Router } from "express";
import { getAllUsers, login, register, updatePersonalInfo } from "../controllers/auth.controller.js";



const router = Router();

router.post("/register", register);
router.post("/login", login);
router.put("/update/:id", updatePersonalInfo)
router.get("/usuarios", getAllUsers);





export default router;