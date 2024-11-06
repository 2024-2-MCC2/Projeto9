// ScrollToTop.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Verifica se a rota atual é uma página de detalhes específica (dev, integrante, ou representante)
    if (
      location.pathname.includes('/dev/') ||
      location.pathname.includes('/integrante/') ||
      location.pathname.includes('/representante/')
    ) {
      // Para rotas de detalhes, role para o topo absoluto
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Para outras páginas, aplique o offset de 150 pixels
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

export default ScrollToTop;
