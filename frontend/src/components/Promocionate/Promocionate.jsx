import React from "react";
import './Promocionate.css'
import { Link } from "react-router-dom";


export default function Promocionate() {

    return (
        <>
        <div className="contenedorPromocionate">
            <div className="boxTextPromocionate">
                <h2 className="tituloPromocionate">¡Promociónate con Nosotros!</h2>
                <p className="textPromocionate1">Disfruta de los beneficios de pertenecer a Findink, 
                adquiere alguno de nuestros paquetes y logra mejorar exposición y por supuesto, mayor 
                reconocimiento </p>
                <p className="textPromocionate2">Regístrate y adquiere cualquiera de los plane que tenemos 
                preparados para ti, beneficios como: Posicionamiento en destacados, botón de citas, más 
                fotos en la galería, horarios de atención, mensajes, acceso a WhatsApp, ¡redes sociales 
                y mucho más! </p>
                <Link className="Link" to="/proximamente">
                <button className="botonPromocionate">Saber más</button>
                </Link>
            </div>
            <img className="bannerPromocionate d-block w-100" src="./imagenes/promocionateimg.png" alt="Promocionate" />
        </div>
        </>
    )
}