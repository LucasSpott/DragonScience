import React from "react";
import './style.css';

export default function sobreFrontEnd(){
    return(
        <div className="main">
            <div className="um-container">
                <h1>Desenvolvimento Front-End</h1>
                <p>Você irá aprender o básico de front-end HTML, CSS, JAVASCRIPT e também o
                avançado como, React.Js e o React Native, Angular, Canva, Vue entre outros.</p>
                <h1>A pergunta que não quer calar O que é Front-End?</h1>
                <p><b>Front-end</b> é toda parte da programação relativa à interface de uma aplicação.</p>

<p>Para que fique mais claro, imagine que você acessou o site de sua rede social favorita.</p>

<p>Lá você pode ver fotos, curtir algumas publicações, alterar seu status, fazer comentários, conversar por mensagens privadas… enfim, uma série de ações podem ser tomadas nestas áreas de interação.</p>

<p>Toda parte dinâmica de um site com a qual um usuário pode interagir é criada por um(a) desenvolvedor(a) front-end.</p>

<p>Em suma, como o próprio nome sugere, front-end é tudo aquilo que diz respeito à parte da frente de um site, aplicativo ou software; toda a aparência visível pelos seus visitantes.</p>

<p>A programação front-end também é chamada de client-side.</p>
            </div>
            <div className="photos">
                <img className="sites" src="sitem4.jpg" alt="sitem4" />
                <img className="sites" src="sitem12.jpg" alt="sitem5" />
                <img className="sites" src="sitem8.jpg" alt="sitem6" />
                <img className="sites" src="sitem7.jpg" alt="sitem7" />
            </div>

        </div>
    );
}