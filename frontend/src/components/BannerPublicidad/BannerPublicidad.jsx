import React from "react";
import './BannerPublicidad.css'
import { Link } from "react-router-dom";


export default function BannerPublicidad() {

    return (
        <div className="contenedorBannerPublicidad">
            <a class="" href="https://wa.link/jhj2pm" target="_blank">
            <img className="bannerPublicidad" src="./imagenes/publicidadbanner.png" alt="Publicidad" />
            </a>
        </div>
    )
}
