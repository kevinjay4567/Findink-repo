import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import logo1 from '../../../assets/logo1.png';
import Swal from 'sweetalert2';
import { env } from '../../../env';

const Register = () => {
  const [errors, setErrors] = useState({});
  const [body, setBody] = useState({
    name: '',
    username: '',
    typeuser: '',
    gender: '',
    email: '',
    password: '',
    confirmpassword: '',
    terminos: '',
    edad: '',
  });

  function validate(body) {
    const expresiones = {
      /* nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, // tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
            celular: /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/,
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, */
    };
    const errors = {};
    if (!expresiones.nombre.test(body.name)) {
      errors.name =
        'Debe ingresar un nombre válido (no se permiten números ni símbolos)';
    } else if (!expresiones.correo.test(body.email)) {
      errors.email = 'Debe ingresar un correo válido (nombre@proveedor.com)';
    } else if (!expresiones.password.test(body.password)) {
      errors.password =
        '8 y 16 caracteres, minimo un número, minimo una minúscula, minimo una mayúscula.';
    } else if (body.password !== body.confirmpassword) {
      errors.confirmpassword = 'Las contraseñas deben ser iguales.';
    } else if (body.typeuser === '') {
      errors.typeuser = 'Seleccione tipo de usuario.';
    } else if (body.gender === '') {
      errors.gender = 'Seleccione genero.';
    } else if (body.terminos === '') {
      errors.terminos = 'Debe Aceptar Terminos y Condiciones.';
    } else if (body.edad === '') {
      errors.edad = 'Debe ser mayor de edad.';
    }
    return errors;
  }

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
    setErrors(
      validate({
        ...body,
        [name]: value,
      })
    );
  };

  const onSubmit = () => {
    if (
      body.name === '' ||
      body.username === '' ||
      body.typeuser === '' ||
      body.email === '' ||
      body.password === '' ||
      body.confirmpassword === '' ||
      body.terminos === '' ||
      body.edad === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe completar todos los campos!',
      });
    } else if (
      errors.name ||
      errors.typeuser ||
      errors.email ||
      errors.password ||
      errors.confirmpassword ||
      errors.terminos ||
      errors.edad
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe completar todos los campos!',
      });
    } else {
      axios
        // variables de entorno
        .post(env.API_URL, {
          name: body.name,
          nickname: body.username,
          email: body.email,
          password: body.password,
          type: body.typeuser,
        })
        .then(({ data }) => {
          console.log(data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
  };

  return (
    <>
      <div className="loginfondo">
        <div className="container">
          <div className="row row_form justify-content-center">
            <div className="login-box register-box">
              <img className="img_login" src={logo1} alt="FindInk" />
              <form>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          type="text"
                          value={body.name}
                          onChange={inputChange}
                          name="name"
                          placeholder="Nombre Completo"
                        />
                      </div>
                      {errors.name && (
                        <p className="errosRegistro">{errors.name}</p>
                      )}
                      <div className="mb-3">
                        <input
                          type="text"
                          value={body.username}
                          onChange={inputChange}
                          name="username"
                          placeholder="Nick Name"
                        />
                      </div>

                      <div className="mb-3" controlId="formBasicEmail">
                        <input
                          type="email"
                          value={body.email}
                          onChange={inputChange}
                          name="email"
                          placeholder="Correo Electronico"
                        />
                      </div>
                      {errors.email && (
                        <p className="errosRegistro">{errors.email}</p>
                      )}
                      <div className="mb-3" controlId="formBasicPassword">
                        <input
                          type="password"
                          value={body.password}
                          onChange={inputChange}
                          name="password"
                          placeholder="Contraseña"
                        />
                      </div>
                      {errors.password && (
                        <p className="errosRegistro">{errors.password}</p>
                      )}
                      <div className="mb-3" controlId="formBasicPassword2">
                        <input
                          type="password"
                          value={body.confirmpassword}
                          onChange={inputChange}
                          name="confirmpassword"
                          placeholder="Repetir Contraseña"
                        />
                      </div>
                      {errors.confirmpassword && (
                        <p className="errosRegistro">
                          {errors.confirmpassword}
                        </p>
                      )}
                      <br />
                      <label className="textfff">Tipo de usuario</label>
                      <div className="mb-3">
                        <p className="radio_options">
                          <input
                            type="radio"
                            className="textfff"
                            label="Cliente"
                            name="typeuser"
                            value="1"
                            onChange={inputChange}
                          />{' '}
                          Cliente
                        </p>
                        <p className="radio_options">
                          <input
                            type="radio"
                            className="textfff"
                            inline
                            label="Tatuador"
                            name="typeuser"
                            value="2"
                            onChange={inputChange}
                          />{' '}
                          Tatuador
                        </p>
                      </div>
                      {errors.typeuser && (
                        <p className="errosRegistro">{errors.typeuser}</p>
                      )}

                      {/* <label className='textfff'>Genero</label>
                                        <div className='mb-3'>
                                                <p className='radio_options'><input
                                                type="radio"
                                                    className='textfff'
                                                    label="Masculino"
                                                    name="gender"
                                                    value="1" onChange={inputChange} /> Masculino</p>
                                                <p className='radio_options'><input
                                                    type="radio"
                                                    className='textfff'
                                                    label="Femenino"
                                                    name="gender"
                                                    value="2" onChange={inputChange} /> Femenino</p>
                                                <p className='radio_options'><input
                                                    type="radio"
                                                    className='textfff'
                                                    label="Otro"
                                                    name="gender"
                                                    value="3" onChange={inputChange} /> Otro</p>
                                            
                                        </div> */}
                      {errors.gender && (
                        <p className="errosRegistro">{errors.gender}</p>
                      )}
                      <br />

                      <div className="mb-3">
                        <label className="textfff alinear_left">
                          Al registrarse estas aceptando los Términos y
                          Condiciones y Politicas de Privacidad
                        </label>
                        <div className="d-flex">
                          <p className="textfff aceptar">
                            <input
                              type="checkbox"
                              onChange={inputChange}
                              name="terminos"
                            />{' '}
                            Aceptar
                          </p>
                        </div>
                        {errors.terminos && (
                          <p className="errosRegistro">{errors.terminos}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="textfff alinear_left">
                          Soy mayor de edad
                        </label>

                        <div className="d-flex">
                          <p className="textfff aceptar">
                            <input
                              type="checkbox"
                              onChange={inputChange}
                              name="edad"
                            />{' '}
                            Aceptar
                          </p>
                        </div>
                        {errors.edad && (
                          <p className="errosRegistro">{errors.edad}</p>
                        )}
                      </div>

                      {/* <label className='textfff'>Genero</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                className='textfff'
                                                inline
                                                label="Masculino"
                                                name="gender"
                                                value="1" onChange={inputChange}
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <br/>
                                            <Form.Check
                                                className='textfff'
                                                inline
                                                label="Femenino"
                                                name="gender"
                                                value="2" onChange={inputChange}
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <br/>
                                            <Form.Check
                                                className='textfff'
                                                inline
                                                label="Otro"
                                                name="gender"
                                                value="3" onChange={inputChange}
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                    {errors.gender && (
                    <p className="errosRegistro">{errors.gender}</p>
                  )}
                  <br/>
                  <br/>
                                    <div className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Label className='textfff'>Al registrarse estas aceptando los Términos y Condiciones y Politicas de Privacidad</Form.Label>
                                        <div className='d-flex'>
                                            <Form.Check type="checkbox" onChange={inputChange} name='terminos' /><p className='textfff aceptar'>Aceptar</p>
                                        </div>
                                        {errors.terminos && (
                    <p className="errosRegistro">{errors.terminos}</p>
                  )}
                                    </div>
                                    <div className="mb-3" controlId="formBasicCheckbox">

                                        <Form.Label className='textfff'>Soy mayor de edad</Form.Label>

                                        <div className='d-flex'>
                                            <Form.Check type="checkbox" onChange={inputChange} name='edad' /> <p className='textfff aceptar'>Aceptar</p>
                                        </div>
                                        {errors.edad && (
                    <p className="errosRegistro">{errors.edad}</p>
                  )}
                                    </div> */}

                      <a className="iniciar_sesion" onClick={onSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Registrarse
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
