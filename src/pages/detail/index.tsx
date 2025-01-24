import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export function Detail() {
    const { cripto } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getCoin() {
            try {
                fetch(`https://api.coincap.io/v2/assets${cripto}`)
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                })
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        }
        getCoin();
    }, [cripto, navigate])

    return (
        <div>
            <h1>Pagina detalhe da moeda {cripto}</h1>
        </div>
    )
}