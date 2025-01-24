import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Detail() {
    const { cripto } = useParams();

    return (
        <div>
            <h1>Pagina detalhe da moeda {cripto}</h1>
        </div>
    )
}