import express from "express";
import { createInstrutor, deleteInstrutor, getInstrutor, getInstrutores, updateInstrutor } from "../controllers/InstrutorController.js"
const router = express.Router();

router.post("/", createInstrutor);

router.put("/:id", updateInstrutor);

router.delete("/:id", deleteInstrutor);

router.get("/:id", getInstrutor);

router.get("/", getInstrutores);


export default router;