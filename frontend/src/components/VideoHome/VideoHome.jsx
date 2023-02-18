import React from "react";
import './VideoHome.css'
import { Link } from "react-router-dom";
import video from "../../assets/videoHome.mp4"


export default function VideoHome() {

    return (
        <div className='contenedorVideoHome'>
                <div className='container'>
                    <div className='row row_video'>
                    <div className='col-lg-2 col_text_video'>
                            <div className='contenedor_volver_video'>
                            <a className='nav-link volver_video_home ' href="#re">Volver arriba ——————
                            </a>
                            </div>
                        </div>
                        <div className='col-lg-3 col_text_video'>
                            <div className='contenedor_text_video'>
                            <p className='title_video_home'>BUSCA
                            </p>
                            <p className='title_video_home'>CONÉCTA
                            </p>
                            <p className='title_video_home'>TATÚATE
                            </p>
                            </div>
                        </div>
                        <div className='col-lg-7 col_video_video justify-content-center'>
                        <div className='contenedor_viedo_video'>
                            <video className='video_home' controls>
                                <source src={video} type="video/mp4" />
                            </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}