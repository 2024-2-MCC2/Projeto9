import React from 'react';
import styled from 'styled-components';
import LocationButton from './/LocationButton'; // botão de localização

// Array com objetos que representam as imagens e seus respectivos tipos
const images = [
  { src: "../images/roupas.png", type: "ROUPAS" },
  { src: "../images/sapatos.png", type: "SAPATOS" },
  { src: "../images/livros.png", type: "LIVROS" },
  { src: "../images/brinquedos.png", type: "BRINQUEDOS" },
  { src: "../images/camabanho.png", type: "CAMA/MESA/BANHO" },
  { src: "../images/utilidades.png", type: "UTILIDADES" },
  { src: "../images/acessorios.png", type: "ACESSÓRIOS" },
  { src: "../images/eletronicos.png", type: "ELETRÔNICOS" },
];

const DonationPage = () => {
  return (
    <MainContainer>
      {/* Título da página */}
      <Title>FAÇA O BEM - DOE!</Title>

      {/* Grade de imagens que exibe cada item com sua imagem e tipo */}
      <ImageGrid>
        {images.map((image, index) => (
          <GridItem key={index}>
            <ZoomImage src={image.src} alt={image.type} />
            <p>{image.type}</p>
          </GridItem>
        ))}
      </ImageGrid>

      {/* Informações detalhadas sobre os itens que podem ser doados */}
      <Info>
      Roupas para todos os estilos (masculinas, femininas e infantis), calçados, acessórios (como bolsas, carteiras, mochilas, cintos e óculos), além de utensílios domésticos, eletrônicos, artigos de decoração e itens de cama, mesa e banho
      </Info>

      {/* Botão de localização com efeito de zoom ao passar o mouse */}
      <ZoomButton>
        <LocationButton />
      </ZoomButton>
    </MainContainer>
  );
};

// Styled Components

// Contêiner principal da página com configuração de layout centralizado
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 50px;
  padding-bottom: 100px; /* Garante espaço para o footer em telas menores */

  @media (max-width: 768px) {
    padding-bottom: 150px; /* Mais espaço em telas muito pequenas */
  }
`;

// Estilização do título principal
const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #b36732;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

// Configuração de grade para exibir imagens em diferentes tamanhos de tela
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Contêiner para cada item da grade, com efeito de zoom ao passar o mouse
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  p {
    margin-top: 8px;
    font-size: 1.3rem;
    text-align: center;
    color: black;
  }
`;

// Imagens dos itens com efeito de zoom ao passar o mouse
const ZoomImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    max-width: 120px;
  }

  @media (max-width: 480px) {
    max-width: 100px;
  }
`;

// Texto sobre os tipos de itens que podem ser doados
const Info = styled.p`
  font-size: 1.3rem;
  margin-top: 40px;
  color: black;
  font-family: 'Roboto', sans-serif;
  max-width: 80%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Botão de localização com efeito de zoom ao passar o mouse
const ZoomButton = styled.div`
  margin-top: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export default DonationPage;
