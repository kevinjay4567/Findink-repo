import React from 'react'
import "./Home.css"
import CardsHome from '../../CardsHome/CardsHome'
import BannerHome from '../../BannerHome/BannerHome'
import VideoHome from '../../VideoHome/VideoHome'
import TresBotonesHome from '../../TresBotonesHome/TresBotonesHome'
import CardsTatuadores from '../../CardsTatuadores/CardsTatuadores'
import Tatuadores from '../Tatuadores/Tatuadores'
import imagenfindink from "../../../assets/imagenfindink.jpeg"
import BannerPublicidad from '../../BannerPublicidad/BannerPublicidad'
import Promocionate from '../../Promocionate/Promocionate'
import Nosotros from '../../Nosotros/Nosotros'
import { Link } from 'react-router-dom'
import { getTatuadores } from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'



const Home = props => {

    const dispatch = useDispatch()
    const allEvents = useSelector((state) => state.all_events)


    useEffect(() => {
        dispatch(getTatuadores())
    }, [dispatch])

    const { route } = props
    return (
        <>
                 <a class="btn-burbuja" href="https://wa.link/jhj2pm" target="_blank">
                <img src="imagenes/burbujaPublicidad2.png" alt="img" class="img-burbuja"/>
                </a> 
           <BannerHome/>
           <CardsHome/>
           <BannerPublicidad/>
           <VideoHome/>
           <TresBotonesHome/>
           <Tatuadores/>
           <Promocionate/>
           <Nosotros/>
        </>
    )
}

export default Home
