import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDatabase from "./config/db.js";
import routeAuth from "./routes/authRoutes.js";
import alunoRoutes from "./routes/AlunoRoutes.js";
import fichaRoutes from "./routes/fichaRoutes.js"
import grupoMuscularRoutes from "./routes/grupoMuscularRoutes.js"
import instrutorRoutes from "./routes/instrutorRoutes.js"
import tipoExercicioRoutes from "./routes/tipoExercicioRoutes.js"
// Erros
import { errorHandling } from "./utils/error.js";
// cors | verificar Token
import cors from "cors";
import { verificarToken } from "./utils/verificarToken.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandling);
app.use("/api/auth", routeAuth);
app.use("/api/alunos", verificarToken, alunoRoutes);
app.use("/api/fichas", fichaRoutes);
app.use("/api/gruposmusculares", grupoMuscularRoutes);
app.use("/api/instrutores", instrutorRoutes);
app.use("/api/tiposexercicios", tipoExercicioRoutes);


app.listen(8080, () => {
    connectDatabase();
    console.log('Servidor rodando na porta 8080.');
});