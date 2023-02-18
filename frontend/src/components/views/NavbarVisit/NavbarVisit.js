import React from "react";
import { Link } from "react-router-dom";
import "./NavbarVisit.css"
import logo from "../../../assets/logo.png"

function NavbarVisit(){
return(
    <nav className="navbar navbar-expand-lg " id="re">
  <div className="container-fluid">
    <Link to="/">
    <a className="navbar-brand" href="#"><img className="logoNav" src={logo} alt="findink logo"/></a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon navbar-toggler-icon-nav"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="Links" to="/">
          <a className="nav-link active" aria-current="page">Inicio</a>
          </Link>
        </li> */}
        <li className="nav-item">
        <Link className="Links" to="/proximamente">
          <a className="nav-link nav-link_tatuador">Buscar tatuadores</a>
        </Link>
        </li>
        <li className="nav-item">
          <Link className="Links" to="/proximamente">
          <a className="nav-link active nav-link_preguntas" aria-current="page">Preguntas frecuentes</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="Links" to="/proximamente">
          <a className="nav-link">Contáctenos</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/proximamente">
          <a className="nav-link active">Blog</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/proximamente">
          <a className="nav-link active">Unirme</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/login">
          <a className="nav-link active">Iniciar sesión</a>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="Link" to="/">
          <a className="nav-link active">Buscar</a>
          </Link>
        </li> */}
        {/* <li className="nav-item">
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar mi tatuador" aria-label="Search"/>
        <button className="btn btn-search btn-outline-success" type="submit">Buscar</button>
      </form>
        </li> */}
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar mi tatuador" aria-label="Search"/>
        <button className="btn btn-search btn-outline-success" type="submit">Buscar</button>
      </form> */}
    </div>
  </div>
</nav>
)
}

export default NavbarVisit