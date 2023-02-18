import React from "react";
import './BannerHome.css'
import { Link } from "react-router-dom";


export default function BannerHome() {

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="div_oculto">
                <h2 className="tituloBanner mini1">¡Conoce a los mejores tatuadores</h2>
                            <p className="textoBanner1 mini3">Findink te hace la vida más fácil, conecta con 
                            los mejores tatuadores, conoce su talento y tatúate con ellos. </p>
                            <Link to="/proximamente">
                            <button className="botonocultobanner">Buscar tatuadores</button>
                            </Link>
                </div>
                <img className="d-block w-100" src="./imagenes/banner0.2.jpg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                    <div className='row'>
                        <div className='col col12'>
                            <h2 className="tituloBanner">¡Conoce a los mejores</h2>
                            <h2 className="tituloBanner2">tatuadores!</h2>
                            <p className="textoBanner1">Findink te hace la vida más fácil, conecta con los mejores </p>
                            <p className="textoBanner2">tatuadores,
                                conoce su talento y tatúate con ellos.</p>
                        </div>
                        <div className='col col13'>

                            <div className='buscar_box'>
                                <form className='formbanner'>
                                    <h3 className='textboxbuscar1'>¡Encuentra a tu </h3>
                                    <h3 className='textboxbuscar2'>tatuador ideal!</h3>
                                    <div className=''>
                                        <input
                                            className='inputboxbanner'
                                            type="text"
                                            placeholder='Palabra clave'
                                        />
                                    </div>
                                    <div className=''>
                                        <select className="inputboxbanner" id="inputGroupSelect04">
                                            <option className='pholder' selected >Ubicación geográfica</option>
                                            <option value="1">Medellín</option>
                                            <option value="2">Bogotá</option>
                                            <option value="3">Cali</option>
                                        </select>
                                    </div>
                                    <div className=''>
                                        <select className="inputboxbanner" id="inputGroupSelect04">
                                            <option selected className='pholder'>Tipo de usuario</option>
                                            <option value="1">Tatuador</option>
                                            <option value="2">Estudio</option>
                                            <option value="3">Tienda</option>
                                        </select>
                                    </div>
                                    <Link to="/proximamente">
                                    <button className=' btnbuscarbaner'>Buscar</button>
                                    </Link>

                                </form>
                            </div>


                        </div>
                    </div>


                </div>

            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="./imagenes/banner0.3.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Third slide" />
            </div>
        </div>
    </div>
    )
}