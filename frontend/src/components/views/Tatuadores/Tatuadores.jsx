import React from 'react'
import "./Tatuadores.css"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import CardsTatuadores from '../../CardsTatuadores/CardsTatuadores'
import FilterTatuadores from '../FiltrosTatuadores/Filtros';



export default function Tatuadores(){

    const dispatch = useDispatch();
    const allTatuadores = useSelector((state) => state.tatuadores);
    return (
        <>
             <div className="container container_tatuadores">
                <div className='justify-content-center'>
                <h2 className='titulo_cardsTatuadoresHome'>¡Últimos tatuadores / estudios!</h2>
                <h5 className='subtitulo_cardsTatuadoresHome'>Échale un vistaso a los últimos estudios / tatuadores registrados</h5>
                </div>

    <div className="row">
        {allTatuadores.map((t) => {
          return (
              <CardsTatuadores 
              key={t.id} 
              id={t.id} 
              nombre={t.nombre}
              pais={t.pais} 
              estilos={t.estilos}
              ciudad={t.ciudad} 
              foto_de_perfil={t.foto_de_perfil} 
              foto_tattoo={t.foto_tattoo} 
              galeria={t.galeria}
              rate={t.rate}
              visitas={t.visitas} />
          );
        })}
    </div>
    </div> 
        </>
    )
}
