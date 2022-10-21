import React from "react";
import { Link } from "react-router-dom";
import "./CSS/HomeLogin.css";
import { useState } from "react";


export default function HomeLogin(){
    
        const menu = document.querySelectorAll('.dash-Perfil');
        const button = document.querySelectorAll('.perfil');
        

        function toggleMenu(event){
           if(event.currentTarget === button[0]){
            menu[0].classList.toggle('active');
           }
              if(event.currentTarget === button[1]){
            menu[1].classList.toggle('active');
           }
                if(event.currentTarget === button[2]){
            menu[2].classList.toggle('active');
           }
           
    }

        

    return(
        <header className="header">
            <nav className="nav">
                <Link to='/' className="meusCurso">Meus Cursos</Link>
                <div className="dash">
                    <img onClick={toggleMenu} src="perfilAvatar.png" alt="perfil" className="perfil"/>
                    <div className="dash-Perfil">
                    <button className="btn-Perfil">Perfil</button>
                    <button className="btn-Perfil">Sair//</button>
                    </div>
                    </div>
                    </nav>
                    </header>

    );
}