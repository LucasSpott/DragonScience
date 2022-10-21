import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NossosCursos from './pages/nossosCursos';
import FrontEnd from './pages/sobreFrontEnd';
import QuemSomos from './pages/sobres/quemSomos';
import Contato from './pages/sobres/contato';
import Matricular from './pages/Logins/matricular';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './pages/Logins/firebase-config';
import Homelogin from './pages/Dashborad/HomeLogin';


function App() {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if(uid === '1'){
        window.location.href = '/sobreFrontEnd';
      }
    }else{
      console.log('nao logado');
    }
    });

  return (
   
      <Router>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/nossoscursos" element={<NossosCursos />} />
        <Route path="/sobreFrontEnd" element={<FrontEnd />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/matricular" element={<Matricular />} />
        <Route path="/HomeLogin" element={<Homelogin />} />
      </Routes>
      </Router>
   
  );
}

export default App;
