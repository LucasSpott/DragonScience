import React from "react";
import { Link } from "react-router-dom";
import "./CSS/login.css";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { auth } from "./firebase-config";
import { async } from "@firebase/util";


export default function Main(){

    const [loginEmail, setLoginEmail] = React.useState("");
    const [loginPassword, setLoginPassword] = React.useState("");
    const login = async () => {
        try{
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        ).then( () => {
            window.location.href = "/Homelogin";
        })
        }catch(error){
            document.querySelector("#erro").innerHTML = 'email ou senha incorretos';
        }
    }


    return(
        <fieldset className="login">
            <div className="invisi"></div>
            <img src="cellPhoto.png" alt="cellphone" className="cellphone"/>
            <img src="cellPhone2.png" alt="cellphone" className="cellphone2"/>
            <h6 className="label-Email">Email</h6>
            <input onChange={(event) => {setLoginEmail(event.target.value)}}/>
            <h6 className="label-Login">Senha</h6>
            <input type="password" onChange={(event) => {setLoginPassword(event.target.value)}}/>
            <button className="btn-login" onClick={login}>Entrar</button>
            <Link to='/' className="btn-voltar">Voltar a pagina inícial</Link>
            <Link to="/matricular" className="bt-matricular">Não tenho uma conta</Link>  
            <p id="erro"></p>
        </fieldset>

    );
}