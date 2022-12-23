import express from "express";
import { createAluno, deleteAluno, getAluno, getAlunos, getAlunosAtivos, updateAluno } from "../controllers/AlunoController.js";
import { verificarAtivo } from "../utils/verificarToken.js";

const router = express.Router();

router.get("/ativos", verificarAtivo, getAlunosAtivos)

router.post("/", createAluno);
router.put("/:id", updateAluno);
router.delete("/:id", deleteAluno);
router.get("/", getAlunos);
router.get("/:id", getAluno);

export default router;