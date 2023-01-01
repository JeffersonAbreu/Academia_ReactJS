import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableTiposExercicios from "../../components/tiposexercicios/TableTiposExercicios";
import Loading from "../../components/Loading";
import { authHeader } from "../../services/authServices";
import "./Listagem.css";

const Listagem = () => {
    const [tiposexercicios, setTiposExercicios] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarTiposExercicios = () => {
        axios
            .get("http://localhost:8080/api/tiposexercicios", { headers: authHeader() })
            .then((response) => {
                setTiposExercicios(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarTiposExercicios();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Tipos Exercicios</h1>
                <Link to="/tiposexercicios/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableTiposExercicios tiposexercicios={tiposexercicios} setTiposExercicios={setTiposExercicios} />}
        </>
    );
};

export default Listagem;
