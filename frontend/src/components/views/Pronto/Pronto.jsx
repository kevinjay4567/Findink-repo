import React from "react";
import logoPronto from "../../../assets/logo1.1.png"
import './Pronto.css'
import { Link } from "react-router-dom";


export default function Pronto() {

    return (
        <>
            <div className="contenedor_pronto">
            <img className="logoPronto" src={logoPronto} alt="Logo" />
            <h1 className="titulo_proximo">
                ¡Hola Findinker!
            </h1>
            <p className="text_proximo1">
            Esta funcionalidad estará disponible próximamente 
            </p>
            <p className="text_proximo2">
            Nuestro equipo de trabajo se encuentra constantemente trabajando para 
            brindarte una mejor experiencia  
            </p>
            <p className="text_proximo3">
            Para enterarte de todas nuestras actualizaciones, promociones, eventos 
            y demás información relevante te invitamos a seguirnos en nuestras 
            redes sociales haciendo   
            </p>
            
                            <div className="boton_siguenos_proximamente">
                            <a href="https://www.instagram.com/findink_official/" target="_blank">
                                <button className="botonSieguenosProximamaente">Siguenos en Instagram</button>
                            </a>
                            </div>
                        
            </div>
        </>
    )
}