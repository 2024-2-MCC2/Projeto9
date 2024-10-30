import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import TelaPrincipal from './pages/TelaPrincipal';
import Donate from './pages/Donate';
import Background from './components/Background';  
import Localizacao from './pages/Localizacao';
import Voluntariado from './pages/Voluntariado';
import OQueFazemosSB from './pages/OQueFazemosSB';
import QuemSomosSB from './pages/QuemSomosSB'; 
import QuemSomos from './components/QuemSomos';
import Login from './components/Login';
import AlterarSenha from './components/AlterarSenha';
import VocePodeDoar from './pages/VocePodeDoar';
import FacaBem from './components/FacaBem';
import LocationButton from './components/LocationButton';

function App() {
  return (
    <div>
      <Background />
      <Header /> 
      <Routes>
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/donation" element={<Donate />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="/oque-fazemos-sb" element={<OQueFazemosSB />} /> 
        <Route path="/quem-somos" element={<QuemSomos />} /> 
        <Route path="/quem-somos-detalhes" element={<QuemSomosSB />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/alterar-senha" element={<AlterarSenha />} />
        <Route path="/VocePodeDoar" element={<VocePodeDoar />} />
      </Routes>

    </div>
  );
}

export default App;