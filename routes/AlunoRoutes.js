import express from "express";
import { createAluno, deleteAluno, getAluno, getAlunos, updateAluno } from "../controllers/AlunoController.js";
import { verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarToken, createAluno);
router.put("/:id", verificarToken, updateAluno);
router.delete("/:id", verificarToken, deleteAluno);
router.get("/:id", verificarToken, getAluno);
router.get("/", verificarToken, getAlunos);


export default router;