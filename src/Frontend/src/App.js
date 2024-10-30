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
        <Route path="/quem-somos" element={<QuemSomos />} /> {/* Adiciona rota para QuemSomos */}
        <Route path="/quem-somos-detalhes" element={<QuemSomosSB />} /> {/* Adiciona rota para QuemSomosSB */}
      </Routes>

    </div>
  );
}

export default App;
