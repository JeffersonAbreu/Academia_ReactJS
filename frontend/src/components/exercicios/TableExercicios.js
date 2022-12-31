import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import ConfirmModal from "../ConfirmModal";
import InformModal from "../InformModal";
import { authHeader } from "../../services/authServices";

const TableExercicios = ({ exercicios, setExercicios }) => {
    const [exercicioExcluir, setExercicioExcluir] = useState(null);
    const [modal, setModal] = useState(undefined);

    function confirmarExclusao(exercicio) {
        setExercicioExcluir(exercicio);
        const confirmModal = new bootstrap.Modal("#confirmModal", {});
        setModal(confirmModal);
        confirmModal.show();
    }

    function excluirExercicio() {
        axios
            .delete(`http://localhost:8080/api/exercicios/${exercicioExcluir._id}`, { headers: authHeader() })
            .then((data) => {
                const exerciciosAtualizados = exercicios.filter((exercicio) => exercicio._id !== exercicioExcluir._id);
                setExercicios(exerciciosAtualizados);
                modal.hide();
                const informModal = new bootstrap.Modal("#informModal", {});
                informModal.show();
            })
            .catch((error) => {
                console.log(error);
                modal.hide();
            });
    }

    return exercicios.length === 0 ? (
        <div className="alert alert-info">Nenhum exercicio cadastrado</div>
    ) : (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Tipo Exercício</th>
                        <th>Ordem</th>
                        <th>Peso</th>
                        <th>Repetições</th>
                        <th>Séries</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {exercicios.map((exercicio) => (
                        <tr key={exercicio._id}>
                            <td>{exercicio.tipo.nome}</td>
                            <td>{exercicio.peso}</td>
                            <td>{exercicio.repeticoes}</td>
                            <td>{exercicio.series}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-1" to={`/exercicios/alterar/${exercicio._id}`}>
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <button className="btn btn-sm btn-danger" onClick={() => confirmarExclusao(exercicio)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmModal question={`Deseja realmente excluir o exercicio <b>${exercicioExcluir?.nome}</b>?`} action={excluirExercicio} />
            <InformModal info={`Exercício <b>${exercicioExcluir?.nome}</b> excluído com sucesso.`} />
        </>
    );
};

export default TableExercicios;
