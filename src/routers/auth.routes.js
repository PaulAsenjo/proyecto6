import { Router } from "express";
import { getAllUsers, login, register, updatePersonalInfo } from "../controllers/auth.controller.js";
import { uploadPhoto } from "../middlewares/uploadFile.middleware.js"


const router = Router();

router.post("/register", uploadPhoto("usuarios", "file"), register);
router.post("/login", login);
router.put("/update/:id", updatePersonalInfo)
router.get("/usuarios", getAllUsers);





export default router;