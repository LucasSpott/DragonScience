import { Link } from "react-router-dom";
import React from "react";


export default function Footer(){
    return (
        // FOOTER DA PAGINA HOME
        <div className="footer">
            <div className='footer-List'>
                <div className='footer-List-Item'>
                    <h2 className='h2-List'>Sobre</h2>
                    <Link to='/quemsomos' className='fp-List'>Quem somos</Link>
                    <br></br><Link to='' className='fp-List'>Termos de Uso</Link>
                    <br></br><Link to='' className='fp-List'>Política de Privacidade</Link>
                </div> 
                
                <div className='footer-List-Item'>
                    <h2 className='h2-List'>Cursos</h2>
                    <Link to='' className='fp-List'>Lógica de Programação</Link>
                    <br></br><Link to='/sobreFrontEnd' className='fp-List'>Front-End</Link>
                    <br></br><Link to='' className='fp-List'>Back-End</Link>
                    <br></br><Link to='' className='fp-List'>Desenvolvimento Mobile</Link>
                    <br></br><Link to='' className='fp-List'>Engenharia</Link>
                    <br></br><Link to='' className='fp-List'>Criação de Games</Link>
                    <br></br><Link to='' className='fp-List'>CI/CD</Link>
                    
                </div>
                <div className='footer-List-Item'>
                    <h2 className='h2-List'>Contato</h2>
                    <Link to='/contato' className='fp-List'>Fale Conosco</Link>
                    <br></br><Link to='' className='fp-List'>Trabalhe Conosco</Link>
                    <br></br><Link to='' className='fp-List'>Parceiros</Link>
                    <br></br><Link to='' className='fp-List'>Blog</Link>
                </div>
                <div className='footer-List-Item'>
                    <h2 className='h2-List'>Redes Sociais</h2>
                    <Link className='fp-List'>Facebook</Link>
                    <br></br><Link className='fp-List'>Instagram</Link>
                    <br></br><Link className='fp-List'>Twitter</Link>
                    <br></br><Link className='fp-List'>Linkedin</Link>
                </div>
               
                <div className='footer-Org'>
                    <h6>@Dragon Science - Formando novos desenvolvedores. Em apoio ao outrubo rosa.</h6>
                    </div>
            </div>
        </div>
    );
}