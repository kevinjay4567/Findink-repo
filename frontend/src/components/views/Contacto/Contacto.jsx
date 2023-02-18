import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Contacto = ({ match }) => {
    const [profiles, setProfiles] = useState([])
    let [body, setBody] = useState({ reference: match.params.id, email:'', title: '', message: '', classification: '' })
    const [params, setParms] = useState({ Rfrnc: match.params.id })
    const [isAuth, setIsAuth] = useState([])
    const init = () => {
        axios.get('http://localhost:4000/api/0.0.1/users/profile/' + params.Rfrnc)
            .then(({ data }) => {
                console.log(data);
                setProfiles(data);
            })
            .catch(({ response }) => {
                console.log(response)
            })
    }
    useEffect(init, [])
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
        axios.post('http://localhost:4000/api/0.0.1/email/send-email', body)
            .then(({ data }) => {
                console.log(data);
            })
            .catch(({ response }) => {
                //console.log(response)
            })
    }

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form method="POST">
                                <input type="hidden" name="reference" onChange={inputChange} value={body.reference=params.Rfrnc} />
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" value={profiles.name} disabled/>
                                </div>

                                <div className="form-group">
                                    <input type="text" name="email" className="form-control" value={body.email=profiles.email} disabled />
                                </div>  
                                <div className="form-group">
                                    <input type="text" name="title"  value={body.title} onChange={inputChange} className="form-control" placeholder="Enter title"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" value={body.message} onChange={inputChange} cols="30" rows="10"></textarea>
                                </div>

                                <div className="form-group">
                                    <select name="classification" value={body.classification} onChange={inputChange} id="classification">
                                        <option value="-">Seleccione</option>
                                        <option value="Quejas">Quejas</option>
                                        <option value="Reclamos">Reclamos</option>
                                        <option value="Dudas">Dudas</option>
                                        <option value="Comentario">Comentario</option>
                                    </select>
                                </div>
                                <button type="button" onClick={onSubmit}>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto
