import express from "express";
import { createInstrutor, deleteInstrutor, getInstrutor, getInstrutores, updateInstrutor } from "../controllers/InstrutorController.js"
import { verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarToken, createInstrutor);
router.put("/:id", verificarToken, updateInstrutor);
router.delete("/:id", verificarToken, deleteInstrutor);
router.get("/:id", verificarToken, getInstrutor);
router.get("/", verificarToken, getInstrutores);

export default router;