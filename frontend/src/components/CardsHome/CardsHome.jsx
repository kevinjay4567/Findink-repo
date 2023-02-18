import React from "react";
import './CardsHome.css'
import { Link } from "react-router-dom";


export default function CardsHome() {

    return (
        <div className="contenedor1">
            <div className="container">
            <div className="row row_cards">
            <div className="col-lg-4 mt-4 col_cards">
                <Link to="/proximamente" className="Links LinkCards">
                    <div class="card all_cards card_img1">
                        <div className="testCardsBG">
                            <div class="card-body">
                                <span className="titulo_ver_tatuadores2">01.</span>
                                <span className="titulo_ver_tatuadores3">Ver</span>
                                <p className="titulo_ver_tatuadores4">.</p>
                                <span className="titulo_ver_tatuadores5">Tatuadores</span>
                                <p className="titulo_ver_tatuadores6">.</p>
                                
                            </div>
                            </div>
                    </div>
                </Link>
            </div>

            <div className="col-lg-4 mt-4 col_cards">
                <Link to="/proximamente" className="Links LinkCards">
                    <div class="card all_cards card_img2">
                    <div className="testCardsBG">
                            <div class="card-body">
                            <span className="titulo_ver_tatuadores2">02.</span>
                                <span className="titulo_ver_tatuadores3">Ver</span>
                                <p className="titulo_ver_tatuadores4">.</p>
                                <span className="titulo_ver_tatuadores5">Estilos</span>
                                <p className="titulo_ver_tatuadores6">.</p>
                            </div>
                            </div>
                    </div>
                </Link>
            </div>

            <div className="col-lg-4 mt-4 col_cards mb-5">
                <Link to="/proximamente" className="Links LinkCards">
                    <div class="card all_cards card_img3">
                    <div className="testCardsBG">
                            <div class="card-body">
                            <span className="titulo_ver_tatuadores2">03.</span>
                                <span className="titulo_ver_tatuadores3">Ir al</span>
                                <p className="titulo_ver_tatuadores4">.</p>
                                <span className="titulo_ver_tatuadores5">Marketplace</span>
                                <p className="titulo_ver_tatuadores6">.</p>
                            </div>
                            </div>
                    </div>
                </Link>
            </div>
            </div>
            </div>
        </div>
    )
}