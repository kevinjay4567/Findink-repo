import React, { useState, useEffect } from 'react'
import { Drawer, Paper, IconButton, Divider } from '@material-ui/core'
import { useStyles } from '../../../style/style'
import { Menu as MenuIcon } from '@material-ui/icons'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './assets/css/styles.css';

const Edit = ({ match }) => { 
    console.log(match.params.id)
    const classNamees = useStyles()
    const [params, setParms] = useState({ Rfrnc: match.params.id })
    const [profiles, setProfiles] = useState([])
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

    return (
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center"> <button className="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> <span className="name mt-3">{ profiles.username}</span> <span className="idd">@{ profiles.username}</span>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div>
                        <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">1069 <span className="follow"></span></span> </div>
                        <div className=" d-flex mt-2"> <a href={ "edit/profile/" + params.Rfrnc} className="btn1 btn-dark">Edit Profile</a> </div>
                        <div className="text mt-3"> <span>{ profiles.name} is a creator of minimalistic x bold graphics and digital artwork.<br/><br/> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div>
                        <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>
                        <div className=" px-2 rounded mt-4 date "> <span className="join">{ profiles.email}</span> </div>
                    </div>
                </div>
            </div>
    )
}

export default Edit
