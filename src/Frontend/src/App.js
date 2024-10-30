import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
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
import Familia from './pages/Familia'
import AlterarSenha from './components/AlterarSenha';
import DetalhesIntegrante from './pages/DetalhesIntegrante';
import DetalhesRepresentante from './pages/DetalhesRepresentante';
import DetalhesDEV from './pages/DetalhesDEV';

function App() {
  return (
    <AppContainer>
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
        <Route path= "Familia" element={<Familia />} />
        <Route path="/integrante/:id" element={<DetalhesIntegrante />} />
       <Route path="/representante/:id" element={<DetalhesRepresentante />} />
        <Route path="/dev/:id" element={<DetalhesDEV />} />
      </Routes>
          </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  padding-top: 10%; /* Adiciona espaçamento para o conteúdo não sobrepor o Header */
`;