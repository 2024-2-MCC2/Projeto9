import React from 'react';
import styled from 'styled-components';
import LocationButton from './/LocationButton'; // botão de localização

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
      <Title>FAÇA O BEM - DOE!</Title>
     
      <ImageGrid>
        {images.map((image, index) => (
          <GridItem key={index}>
            <img src={image.src} alt={image.type} />
            <p>{image.type}</p>
          </GridItem>
        ))}
      </ImageGrid>
      <Info>
        Roupas masculinas, femininas e infantis, calçados, acessórios (bolsas, carteiras, mochilas, cintos, óculos),
        utensílios domésticos, aparelhos eletrônicos, artigos para decoração, cama, mesa e banho.
      </Info>

      <LocationButton />  
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: black;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: black;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 160px;
  margin-bottom: 20px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 15px

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
  }

  p {
    margin-top: 8px;
    font-size: 0.8rem;
    text-align: center;
    color: black;
  }
`;

const Info = styled.p`
  font-size: 1.2rem;
  margin-top: 80px;
  color:  black;
  max-width: 80%;
`;

export default DonationPage;