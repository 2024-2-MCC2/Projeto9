import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselCriancas() {
  return (
    <div style={{ marginBottom: '20px', width: '80%', maxWidth: '1200px', margin: '0 auto' }}>
      <Carousel interval={9000}>  
        {/* Primeira imagem e suas definições */}
        <Carousel.Item>
          <img
            src="/images/CriancaTriste.png"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}  
          />
        </Carousel.Item>
        {/* Segunda imagem e suas definições */}
        <Carousel.Item>
          <img
            src="/images/CriancaFeliz.png"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }} 
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselCriancas;
