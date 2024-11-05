import React from 'react';
import styled from 'styled-components';

function Banner() {
  return (
    <BannerContainer>
      <BannerImage src="https://i.postimg.cc/5NW9qwTz/PROTEGE.jpg" alt="Banner PROTEGE" />
    </BannerContainer>
  );
}

export default Banner;

// Estilos com styled-components

const BannerContainer = styled.div`
  width: 100%;
  height: 100%; /* Ajuste esta altura conforme necessário */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* Cor de fundo para quando a imagem não carregar */
  overflow: hidden; /* Garante que a imagem não "vaze" fora do container */

  @media (max-width: 768px) {
    height: 200px; /* Altura menor em telas menores */
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Mantém a imagem centralizada e cobre todo o espaço do banner */
`;
