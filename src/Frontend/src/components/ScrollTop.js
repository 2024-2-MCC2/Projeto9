import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 150); // Rola para o topo da p�gina
  }, [location]); // Sempre que a localiza��o mudar (ou seja, a rota mudar)

  return null; // N�o precisa renderizar nada
}

export default ScrollToTop;
