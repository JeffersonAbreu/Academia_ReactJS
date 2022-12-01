import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import cookieParser from "cookie-parser";
// importação das rotas
import routeAuth from "./routes/authRoutes.js";

import alunoRoutes from "./routes/AlunoRoutes.js";
import fichaRoutes from "./routes/fichaRoutes.js"
import grupoMuscularRoutes from "./routes/grupoMuscularRoutes.js"
import instrutorRoutes from "./routes/instrutorRoutes.js"
import tipoExercicioRoutes from "./routes/tipoExercicioRoutes.js"
// Erros
import { errorHandling } from "./utils/error.js";

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandling);
app.use("/api/auth", routeAuth);
app.use("/api/alunos", alunoRoutes);
app.use("/api/fichas", fichaRoutes);
app.use("/api/gruposmusculares", grupoMuscularRoutes);
app.use("/api/instrutores", instrutorRoutes);
app.use("/api/tiposexercicios", tipoExercicioRoutes);


app.listen(8080, () => {
    connectDatabase();
    console.log('Servidor rodando na porta 8080.');
});