import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 150); // Rola para o topo da página
  }, [location]); // Sempre que a localização mudar (ou seja, a rota mudar)

  return null; // Não precisa renderizar nada
}

export default ScrollToTop;
