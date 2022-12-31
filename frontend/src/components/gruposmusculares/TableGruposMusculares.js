import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import ConfirmModal from "../ConfirmModal";
import InformModal from "../InformModal";
import { authHeader } from "../../services/authServices";

const TableGruposMusculares = ({ gruposmusculares, setAlunos: setGruposMusculares }) => {
    const [grupoMuscularExcluir, setGrupoMuscularExcluir] = useState(null);
    const [modal, setModal] = useState(undefined);

    function confirmarExclusao(grupoMuscular) {
        setGrupoMuscularExcluir(grupoMuscular);
        const confirmModal = new bootstrap.Modal("#confirmModal", {});
        setModal(confirmModal);
        confirmModal.show();
    }

    function excluirGrupoMuscular() {
        axios
            .delete(`http://localhost:8080/api/gruposmusculares/${grupoMuscularExcluir._id}`, { headers: authHeader() })
            .then((data) => {
                const gruposMuscularesAtualizados = gruposmusculares.filter((grupoMuscular) => grupoMuscular._id !== grupoMuscularExcluir._id);
                setGruposMusculares(gruposMuscularesAtualizados);
                modal.hide();
                const informModal = new bootstrap.Modal("#informModal", {});
                informModal.show();
            })
            .catch((error) => {
                console.log(error);
                modal.hide();
            });
    }

    return gruposmusculares.length === 0 ? (
        <div className="alert alert-info">Nenhum grupo muscular cadastrado</div>
    ) : (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {gruposmusculares.map((grupoMuscular) => (
                        <tr key={grupoMuscular._id}>
                            <td>{grupoMuscular.nome}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-1" to={`/gruposmusculares/alterar/${grupoMuscular._id}`}>
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <button className="btn btn-sm btn-danger" onClick={() => confirmarExclusao(grupoMuscular)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmModal question={`Deseja realmente excluir o grupo muscular <b>${grupoMuscularExcluir?.nome}</b>?`} action={excluirGrupoMuscular} />
            <InformModal info={`Grupo muscular <b>${grupoMuscularExcluir?.nome}</b> excluído com sucesso.`} />
        </>
    );
};

export default TableGruposMusculares;
