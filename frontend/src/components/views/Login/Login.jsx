import React, { useState } from 'react'
import axios from 'axios'
import logo1 from "../../../assets/logo1.png"
import "./Login.css"



const Login = () => {

    const [body, setBody] = useState({ username: '', password: '' })

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        console.log(body)
        let username = {"username" : body.username};
        axios.post('http://localhost:4000/api/0.0.1/users/login', body)
            .then(({ data }) => {
                console.log(data);
                localStorage.setItem('User', JSON.stringify(data));
                localStorage.setItem('auth', JSON.stringify("yes"));
            })
            .catch(({ response }) => {
                console.log(response.data)
            })
    }

return(
    <>
    <div className='loginfondo'>
    <div className='container container_login'>
        <div className='row row_form justify-content-center'>
        <div className='login-box'>
            <img className='img_login' src={logo1} alt="FindInk"/>
            <form>
                <div className='user-box'>
                    <input 
                    type="email"
                    label='Username'
                    value={body.username}
                    onChange={inputChange}
                    name='username'/>
                        <label>Correo</label>
                </div>
                <div className='user-box'>
                <input type="password" 
                    label='Password'
                    value={body.password}
                    onChange={inputChange}
                    name='password'/>
                        <label>Contraseña</label>
                </div>
                <a className='iniciar_sesion'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar Sesión
                </a>
                <a className='iniciar_sesion'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar con Google
                </a>
                <div className='links_login'>
                <a className="olvido" href="#">¿Olvidaste la contraseña?</a>
                <p className="crear_cuenta">¿No tienes una cuenta? <a className="olvido" href="#">Crear cuenta</a></p>
                </div>
                            
            </form>
        </div>
        </div>
    </div>
    </div>
    </>
)
}

export default Login
