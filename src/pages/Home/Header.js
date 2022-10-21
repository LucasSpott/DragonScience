import './CSS/style.css';
import { Link } from 'react-router-dom';
import React from 'react';


export default function Header(){
    return(

        //HEADER PAGINA HOME
        <div className="header">
            <nav className='nav-H2'>
                
                    <Link to='/' className='a-logo'><img className='logo-Header' src="logoRed.png" alt="logo" /></Link>
            
                <Link to="/nossoscursos" className='a-Head'>NOSSOS CURSOS</Link>
                <Link className='a-Head'>CURSOS GRATUITOS</Link>
                <Link className='a-Head'>PROGRAMA PREMIUM</Link>
                <div className='entrar'>
                <Link className='btn-Head-Log' to="/Login">Entrar</Link>
                <Link className='btn-Head'to='/matricular'>Matricular</Link>
                </div>
            </nav>
        
        </div>
    );
}