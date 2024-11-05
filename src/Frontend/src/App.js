import React from 'react';
import styled from 'styled-components';
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
import DetalhesDEV from './pages/DetalhesDEV';
import DetalhesIntegrante from './pages/DetalhesIntegrante';
import DetalhesRepresentante from './pages/DetalhesRepresentante';
import Familia from './pages/Familia';
import Rodape from './components/Rodape';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
      <AppContainer>
      <Background />
      <Header /> 
      <ScrollToTop />
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
        <Route path="/integrante/:id" element={<DetalhesIntegrante />} />
       <Route path="/representante/:id" element={<DetalhesRepresentante />} />
        <Route path="/dev/:id" element={<DetalhesDEV />} />
        <Route path= "Familia" element={<Familia />} />
        <Route path= "FacaBem"elemenmt= {<FacaBem />} />        
      </Routes>
      <Rodape />

      </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  padding-top: 10%; /* Adiciona espaçamento para o conteúdo não sobrepor o Header */
`;
