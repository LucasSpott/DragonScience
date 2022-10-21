
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import './CSS/quemsomos.css';

import React from 'react';

function quemSomos() {
    return (
    <div>
    <Header />
    <div className="container">
        <h1>Quem somos e o Projeto Dragon Science</h1>
        <p>Nós somos pessoas de toda classe que quer você não tenha os mesmos problemas
            que nós tivemos, quando começamos a aprender programação, para que você aprenda
            verdadeiramente, e não apenas copiar e colar códigos, para que você aprenda a 
            programar. O projeto Dragon Science não é só um projeto de ensino com fins lucrativos, 
            é um projeto que visa ajudar pessoas que não tem condições de pagar um curso de programação,
            e também ajudar pessoas que não tem tempo para frequentar uma escola de programação.
            Vivenciamos programação, e sabemos o quanto é difícil aprender sozinho, e por isso
            nós visamos você como um novo programador.
        </p>
    </div>
    <Footer />
    </div>
    );
    }
export default quemSomos;