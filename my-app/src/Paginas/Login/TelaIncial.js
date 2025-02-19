import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"


const TelaInicial = () => {
    const navigate = useNavigate();

    const renderizaTela = () => {
        navigate.push('/login')
    }

    useEffect(() => {
        setTimeout(renderizaTela, 3000)
    }, [])

    return(
        <div>
            <img src="../../logo.png" />
        </div>
    );
}

    
export default TelaInicial
