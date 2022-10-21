import React from "react";
import './CSS/style.css';
import { Link } from 'react-router-dom';

export default function Main(){
    return(
        <div className="main">
            <div className="main__container">
                <h1>Como nossos cursos funciona?</h1>
                <p>Os cursos são divididos em módulos, cada módulo possui um conteúdo específico, e cada módulo possui um vídeo explicativo, e um exercício para fixação do conteúdo.</p>
                <p>Temos video aulas para por em prática tudo que você aprendeu, e também temos
                    aulas escritas para você que prefere ler.
                    Além de termos um fórum para tirar dúvidas sobre seu código e erro, e interagir com outras pessoas.
                </p>
                <p>Projetos para colocar em seu portifólio, um Discord para você que gosta
                    de interagir com outras pessoas em tempo real.
                </p>
                
                </div>
                <div className="main-container">
                <Link to="/" className='btn-Head'>Discord</Link>
                <Link to="/" className='btn-Head'>Fórum</Link>
                <Link to="/" className='btn-Head'>Projetos</Link>
                </div>

            </div>
    );
}