import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselCriancas() {
  // Essa parte faz o carrosel funcionar e dar a localização dentro do site, passa de imagem cada 9 segundos
  return (
    <div style={{ marginBottom: '20px', width: '100%', position: 'relative', left: '0', transform: 'translateX(0)' }}>
      <Carousel interval={9000}>  
        {/* primeira imagem e suas definições de tamanho */}
        <Carousel.Item>
          <img
            src="/images/CriancaTriste.png"
            style={{ height: '600px', objectFit: 'contain' }}  
          />
        </Carousel.Item>
{/* Segunda imagem e suas definições de tamanho  */}
        <Carousel.Item>
          <img
            src="/images/CriancaFeliz.png"
            style={{ height: '600px', objectFit: 'contain' }} 
            // limita quantos pixei vai utilizar -^
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselCriancas;

