
import React, { useState } from 'react';
import './CSS/matricular.css';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword }  from 'firebase/auth';
import { auth } from './firebase-config';

export default function Matricular(){

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    
    const register = async () => {
        try{
        const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
        );
        }catch(error){
            if(error.code === 'auth/invalid-email'){
                document.querySelector('#erro').innerHTML = 'email invalido';
            }else if(error.code === 'auth/weak-password'){
                document.querySelector('#erro').innerHTML = 'senha fraca';
            }else if(error.code === 'auth/email-already-in-use'){
                document.querySelector('#erro').innerHTML = 'email ja cadastrado';
            }else if(error.code ==='auth/confimation-password'){
                document.querySelector('#erro').innerHTML = 'senhas diferentes';
            }
        }
    }

    return(
          
            <fieldset className='matricular'>
                <div className='invisi'></div>
                    <h6 className='label'>Email</h6>
                    <input onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                    <h6 className='label'>Senha</h6>
                    <input type='password' onChange={(event) => {setRegisterPassword(event.target.value)}}/>
                    <h6 className='label' type='password'>Confirmar Senha</h6>
                    <input id='confirmar' type='password' onChange={(event) => {setRegisterPassword(event.target.value)}}/>
                    <button className='btn-matricular' onClick={register}>Matricular</button>
                    
                    <Link to='/' className="bt-voltar">Voltar a pagina inícial</Link>
                    <Link to='/Login' className='bt-Log'>Já tenho uma conta</Link>
                    <p id='erro'></p>
                    
            </fieldset>
           
    );
}