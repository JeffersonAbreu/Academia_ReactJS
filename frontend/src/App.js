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
import InstrutorAlteracao from "./pages/instrutores/Alteracao";
import InstrutorCadastro from "./pages/instrutores/Cadastro";
import Instrutores from "./pages/instrutores/Listagem";
import TipoExercicioAlteracao from "./pages/tiposexercicios/Alteracao";
import TipoExercicioCadastro from "./pages/tiposexercicios/Cadastro";
import TiposExercicios from "./pages/tiposexercicios/Listagem";

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
                        <Route path="exercicios">
                            {/* <Route index element={<Exercicios />} /> */}
                            {/* <Route path="cadastrar" element={<ExercicioCadastro />} />
                            <Route path="alterar/:id" element={<ExercicioAlteracao />} /> */}
                        </Route>
                        <Route path="fichas">
                            {/* <Route index element={<Fichas />} />
                            <Route path="cadastrar" element={<FichaCadastro />} />
                            <Route path="alterar/:id" element={<FichaAlteracao />} /> */}
                        </Route>
                        <Route path="gruposmusculares">
                            <Route index element={<GruposMusculares />} />
                            <Route path="cadastrar" element={<GrupoMuscularCadastro />} />
                            <Route path="alterar/:id" element={<GrupoMuscularAlteracao />} />
                        </Route>
                        <Route path="instrutores">
                            <Route index element={<Instrutores />} />
                            <Route path="cadastrar" element={<InstrutorCadastro />} />
                            <Route path="alterar/:id" element={<InstrutorAlteracao />} />
                        </Route>
                        <Route path="tiposexercicios">
                            <Route index element={<TiposExercicios />} />
                            <Route path="cadastrar" element={<TipoExercicioCadastro />} />
                            <Route path="alterar/:id" element={<TipoExercicioAlteracao />} />
                        </Route>
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