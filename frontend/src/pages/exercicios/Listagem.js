import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableExercicios from "../../components/exercicios/TableExercicios";
import Loading from "../../components/Loading";
import { authHeader } from "../../services/authServices";
import "./Listagem.css";

const Listagem = () => {
    const [exercicios, setExercicios] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarAlunos = () => {
        axios
            .get("http://localhost:8080/api/exercicios", { headers: authHeader() })
            .then((response) => {
                setExercicios(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarAlunos();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Exercícios</h1>
                <Link to="/exercicios/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableExercicios exercicios={exercicios} setExercicios={setExercicios} />}
        </>
    );
};

export default Listagem;
