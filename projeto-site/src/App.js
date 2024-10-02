import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import TelaPrincipal from './pages/TelaPrincipal';
import Donate from './pages/Donate';
import Background from './components/Background';  // Certifique-se de que o nome está correto

function App() {
  return (
    <div>
      <Background />
      <Header /> 
      <Routes>
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/donation" element={<Donate />} />
      </Routes>
    </div>
  );
}

export default App;
