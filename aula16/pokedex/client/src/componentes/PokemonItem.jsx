import { useState } from "react";

function PokemonItem(props){

    const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
    return(
        <li>
            <h2>Nome: {props.name}</h2>
            {
            <button onClick={ () => setMostrarDetalhes( (detalhes) => !detalhes )}>
                {mostrarDetalhes ? "Ocultar detalhes" : "Ver detalhes"}
            </button>
            }

            {mostrarDetalhes && (
                <div>
                    <p>{props.level}</p>
                    <p>{props.type}</p>
                </div>
            )}
        </li>
    )
}

export default PokemonItem