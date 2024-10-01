import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import TelaPrincipal from './pages/TelaPrincipal';
import Donate from './pages/Donate';

function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/donation" element={<Donate />} />
      </Routes>
    </div>
  );
}

export default App;
