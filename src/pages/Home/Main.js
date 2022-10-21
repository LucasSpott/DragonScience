import './CSS/style.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Main(){

    // MAIN PAGINA HOME THE FIRST

        const anin = document.querySelector('aninSpan');
            const [aninSpan, setAninSpan] = useState(anin);
            useEffect(() => {
                setTimeout(() => {
                    setAninSpan((aninSpan) => 'Profissionais');
                }, 2000);
                if(aninSpan === 'Profissionais'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Programadores');
                    }, 2000);
                }
                if(aninSpan === 'Programadores'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Desenvolvedores');
                    }, 2000);
                }
                if(aninSpan === 'Desenvolvedores'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Empreendedores');
                    }, 2000);
                }
                if(aninSpan === 'Empreendedores'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Criadores');
                    }, 2000);
                }
                if(aninSpan === 'Criadores'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Chefes');
                    }
                    , 2000);
                }

            }, [aninSpan]);
             
    return(
        <div className="main">
            <div className='div-Main'>
                <div className='div-Main-1'>
            <h1 className='h1-Main'>Formando novos <span>{aninSpan}</span></h1>
            <p className='pp-Main'>Domine tecnologias, faça projetos, aumente seu portifólio,
                aprenda programação, faça amigos, se desenvolva,
                 seja um profissional completo.
            </p>
            <img className='fundoCode' src="fundoCode.png" alt="logoCode"/>
            </div>
            <div className='main-List'>
                <div className='main-List-Item'>
                    <img className='img-LogoCodigo' src="codLogical.png" alt="logo" />
                    <img className='img-LogoCodigo' src="codNuvem.png" alt="logo" />
                    <h2 className='h2-List'>Lógica de Programação</h2>
                    <p className='p-List'>Aprenda a lógica de programação e o básico para começar a programar</p>
            </div>
            <div className='main-List-Item'>
                <img className='img-Htmlcss' src="htmlcss.png" alt="img1" />
                <img className='img-Angular' src="logoAngular.png" alt="img1" />
                <img className='img-React' src="react.png" alt="img1" />
                
                <h2 className='h2-List'>Front-End & Frameworks</h2>
                <p className='p-List'>Aprenda a criar sites com as tecnologias e frameworks mais utilizadas do mercado.</p>
            </div>
            <div className='main-List-Item'>
                <img className='img-Php' src="phplogo.png" alt="img1" />
                <img className='img-MySql' src="MySql.png" alt="img1" />
                <img className='img-Postgre' src="postgreSqlogo.png" alt="img1" />
                <h2 className='h2-List'>Back-End</h2>
                <p className='p-List'>Aprenda a sistemas web, sistemas de login para seu site com as tecnologias mais utilizadas do mercado.</p>
            </div>
            
            </div>
            
            <div className='main-List'>
                <div className='main-List-Item'>
                <img className='img-Angular' src="logoAngular.png" alt="img1" />
                <h2 className='h2-List'>Mobile</h2>
                <p className='p-List'>Aprenda a aplicativos com as tecnologias mais utilizadas do mercado, com tecnologias fácies para Ios & Android.</p>
                </div>
            <div className='main-List-Item'>
                <img className='img-Angular' src="logoAngular.png" alt="img1" />
                <h2 className='h2-List'>Engenharia</h2>
                <p className='p-List'>Aprenda a criar sites e sistemas web com as tecnologias mais utilizadas do mercado.</p>
            </div>
            <div className='main-List-Item'>
                <img className='img-Angular' src="logoAngular.png" alt="img1" />
                <h2 className='h2-List'>CI/CD</h2>
                <p className='p-List'>Aprenda a criar sites e sistemas web com as tecnologias mais utilizadas do mercado.</p>
            </div>
            </div>
            <div className='div-Planos'>
                
                <div className='div-planosGratis'>
                <h2 className='h2-Planos'>Plano Gratuito</h2>
                <Link className='a-Planos' href='#'>FRONT-END</Link>
                <br></br><Link className='a-Planos' href='#'>BACK-END</Link>
                <br></br><Link  className='a-Planos'href='#'>CI/CD</Link>
                <br></br><Link  className='a-Planos'href='#'>GITHUB</Link>
                <br></br><br></br><Link className='button-Planos' to='/login'>Entrar Grátis</Link>

                </div>
               
                <div className='div-planosPremium'>
                    <h2 className='h2-Planos'>Plano Premium</h2>
                    <Link className='a-Planos' href='#'>FRONT-END</Link>
                    <br></br><Link className='a-Planos' href='#'>BACK-END</Link>
                    <br></br><Link className='a-Planos' href='#'>CI/CD</Link>
                    <br></br><Link className='a-Planos' href='#'>Desenvolvimento Mobile</Link>
                    <br></br><Link className='a-Planos' href='#'>Engenharia</Link>
                    <br></br><Link className='a-Planos' href='#'>Desevolvimento de Jogos com Unity</Link>
                    <br></br><Link className='a-Planos' href='#'>Desenvolvimento de Jogos com Unreal</Link>
                    <br></br><br></br><Link className='button-Planos' to='/matricular'>Matricular</Link>
                </div>
            </div>
            </div>
        </div>
    );
}

