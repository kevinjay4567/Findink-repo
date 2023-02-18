import React from "react";
import { Link } from "react-router-dom";
import "./Filtros.css"
import { useSelector, useDispatch } from "react-redux";
import { paisFilter, todos, ciudadFilter, estiloFilter } from "../../../redux/actions";

function FilterTatuadores(){
    const dispatch = useDispatch();
    const allTatuadores = useSelector((state) => state.tatuadores);
    let paises = []
    allTatuadores.map(e => {
      if(!paises.includes(e.pais)){
        paises.push(e.pais)
      }
    })
    let ciudades = []
    allTatuadores.map(e => {
      if(!ciudades.includes(e.ciudad)){
        ciudades.push(e.ciudad)
      }
    })
    let estilos = []
    allTatuadores.map(e => {
      if(!estilos.includes(e.estilos)){
        estilos.push(e.estilos)
      }
    })
    // let categories = []
    // allEvents.map(e => {
    //   if(!categories.includes(e.category)){
    //     categories.push(e.category)
    //   }
    // })
    // let gender = []
    // allEvents.map(e => {
    //   if(!gender.includes(e.gender)){
    //     gender.push(e.gender)
    //   }
    // })

    function handleLocation(e, event){
      console.log(e.target.value)
      dispatch(paisFilter(event))
    }
    function handleLocationCiudad(e, event){
      console.log(e.target.value)
      dispatch(ciudadFilter(event))
    }
    function handleEstilo(e, event){
      console.log(e.target.value)
      dispatch(estiloFilter(event))
    }

    // function handlecategory(e, event){
    //   console.log(event)
    //   dispatch(categoryFilter(event))
    // }

    // function handleGender(e, event){
    //   console.log(event)
    //   dispatch(genderFilter(event))
    // }

    function handletodos(e){
      console.log(e.target.value)
      dispatch(todos(e.target.value))
    }

    

    return(
        <nav class="navbar navbar_sidebar navbar-expand-lg bg-light mt-5 mb-3">
  <div class="container-fluid container-fluid-sidebar">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon navbar-filter-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent2">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link nav-link-eventos " onClick={(e) => handletodos(e)} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Todos
          </a></li>
        {/* filtro de Pais */}
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pais
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a value='all' onClick={(e) => handletodos(e)} class="dropdown-item">Todos los paises</a></li>
            <li><hr class="dropdown-divider"/></li>
            {paises.map((event) => {
          return (
            <li><a value={event} onClick={(e) => handleLocation(e, event)} class="dropdown-item">{event}</a></li>
          );
        })}
        </ul>
        </li>
        {/* filtro de Ciudad */}
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ciudad
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" value='all' onClick={(e) => handletodos(e)}>Todas las ciudades</a></li>
            <li><hr class="dropdown-divider"/></li>
            {ciudades.map((event) => {
          return (
            <li><a value={event} onClick={(e) => handleLocationCiudad(e, event)} class="dropdown-item">{event}</a></li>
          );
        })}
        </ul>
        </li>
        {/* filtro de Estilos */}
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Estilos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" value='all' onClick={(e) => handletodos(e)}>Todos los estilos</a></li>
            <li><hr class="dropdown-divider"/></li>
            {estilos.map((event) => {
          return (
            <li><a value={event} onClick={(e) => handleEstilo(e, event)} class="dropdown-item">{event}</a></li>
          );
        })}
        </ul>
        </li>
        
        {/* <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rama
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" onClick={(e) => handletodos(e)}>Todas las ramas</a></li>
            <li><hr class="dropdown-divider"/></li>
            {gender.map((event) => {
          return (
            <li><a value={event} onClick={(e) => handleGender(e, event)} class="dropdown-item" >{event}</a></li>
          );
        })}
        </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    )
}

export default FilterTatuadores