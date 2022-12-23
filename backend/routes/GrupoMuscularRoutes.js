import express from "express";
import { createGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGrupoMusculares, updateGrupoMuscular } from "../controllers/GrupoMuscularController.js"
import { verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarToken, createGrupoMuscular);
router.put("/:id", verificarToken, updateGrupoMuscular);
router.delete("/:id", verificarToken, deleteGrupoMuscular);
router.get("/:id", verificarToken, getGrupoMuscular);
router.get("/", verificarToken, getGrupoMusculares);


export default router;