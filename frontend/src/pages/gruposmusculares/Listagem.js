import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableGruposMusculares from "../../components/gruposmusculares/TableGruposMusculares";
import Loading from "../../components/Loading";
import { authHeader } from "../../services/authServices";
import "./Listagem.css";

const Listagem = () => {
    const [gruposmusculares, setGruposMusculares] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarGruposMusculares = () => {
        axios
            .get("http://localhost:8080/api/gruposmusculares", { headers: authHeader() })
            .then((response) => {
                setGruposMusculares(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarGruposMusculares();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Grupos Musculares</h1>
                <Link to="/gruposmusculares/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableGruposMusculares gruposmusculares={gruposmusculares} setGruposMusculares={setGruposMusculares} />}
        </>
    );
};

export default Listagem;
