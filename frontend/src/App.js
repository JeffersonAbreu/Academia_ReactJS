import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlunoAlteracao from "./pages/alunos/Alteracao";
import Ativos from "./pages/alunos/Ativos";
import AlunoCadastro from "./pages/alunos/Cadastro";
import Alunos from "./pages/alunos/Listagem";
import GrupoMuscularAlteracao from "./pages/gruposmusculares/Alteracao";
import GrupoMuscularCadastro from "./pages/gruposmusculares/Cadastro";
import GruposMusculares from "./pages/gruposmusculares/Listagem";
import Leiaute from "./pages/Leiaute";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import Principal from "./pages/Principal";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Leiaute />}>
                        <Route index element={<Principal />} />
                        <Route path="alunos">
                            <Route index element={<Alunos />} />
                            <Route path="cadastrar" element={<AlunoCadastro />} />
                            <Route path="alterar/:id" element={<AlunoAlteracao />} />
                        </Route>
                        {/* <Route path="exercicios">
                            <Route index element={<Exercicios />} />
                        </Route> */}
                        {/* <Route path="fichas"></Route> */}
                        <Route path="gruposmusculares">
                            <Route index element={<GruposMusculares />} />
                            <Route path="cadastrar" element={<GrupoMuscularCadastro />} />
                            <Route path="alterar/:id" element={<GrupoMuscularAlteracao />} />
                        </Route>
                        {/* <Route path="instrutores"></Route> */}
                        {/* <Route path="tiposexercicios"></Route> */}
                        <Route path="ativos" element={<Ativos />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;