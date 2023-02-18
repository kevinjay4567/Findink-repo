import React from "react";
import logo from "../../../src/assets/logo.png"
import './Nosotros.css'
import { Link } from "react-router-dom";


export default function Nosotros() {

    return (
        <>
            <div className='contenedorVideoHome'>
                <div className='container'>
                    <div className='row row_video row_nosotros'>
                        <div className='col-lg-7 col_text_video'>
                            <img className="logoFindinkNosotros d-block w-100" src={logo} alt="Logo" />
                        </div>
                        <div className='col-lg-5 col_video_video  justify-content-center'>
                            <h2 className="tituloNosotros">Quiénes somos? </h2>
                            <p className="textNosotros2">Quienes somos: FindInk es el lugar donde conectamos 
                            a los clientes con los artistas del tatuaje por medio de una plataforma 
                            digital que invita a la creación de comunidad y así solucionamos dos grandes 
                            problemáticas de la industria (posicionamiento y búsqueda), generando una 
                            competencia leal y por méritos.  </p>
                            <div className="boton_NosotrosCenter">
                            <Link className="Link" to="/proximamente">
                                <button className="botonNosotros">Saber más</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}