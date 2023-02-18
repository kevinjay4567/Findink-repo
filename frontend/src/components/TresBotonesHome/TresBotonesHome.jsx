import React from "react";
import './TresBotonesHome.css'
import { Link } from "react-router-dom";


export default function TresBotonesHome() {

    return (
        <div className="contenedorDeTest1">
            
                <div className='contenedorDeTest'>
                    
                    <div className='row row_botonesHome'>
                        
                    <div className='col col_text_botones'>
                            <div className='contenedor_textBotones'>
                            <p>¿Eres tatuador?</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col_botones_botones'>
                            <div className='contenedor_botonesBotones'>
                                <div className="row row_interna_botones">
                                    <div className="col col_1botones all_col_botones">
                                    <Link className="Link" to="/proximamente">
                                    <button className="all_botonesBotones boton1botones">Registrarse</button>
                                    </Link>
                                    </div>
                                    <div className="col col_2botones all_col_botones">
                                    <Link className="Link" to="/proximamente">
                                    <button className="all_botonesBotones boton2botones">Contáctenos</button>
                                    </Link>
                                    </div>
                                    <div className="col col_3botones all_col_botones">
                                    <Link className="Link" to="/proximamente">
                                    <button className="all_botonesBotones boton3botones">Saber más</button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    )
}