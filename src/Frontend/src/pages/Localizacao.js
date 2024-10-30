import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Calendar from '../components/Calendar';

// Estilização do calendário
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #ff6633;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContentC = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  position: relative; /* Necessário para o posicionamento do texto sobre a imagem */
`;

const DonateButton = styled.button`
  padding: 12px 25px; /* Aumenta o tamanho do botão */
  background-color: #b36732;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 15px; /* Aumenta o arredondamento */
  margin-top: 90px;
  font-size: 16px; /* Aumenta o tamanho da fonte */
  text-decoration: none;
  transition: transform 0.3s ease;

  & hover {
    transform: scale(1.1);
  }
`;

const ImageWrapper = styled.div`
  position: relative; /* Para posicionar o texto sobre a imagem */
`;

const ImagePlaceholder = styled.img`
  width: 250px;
  height: 350px;
`;


const OverlayText = styled.div`
  position: absolute;
  top: 55%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-55%, -50%); /* Ajusta para centralizar */
  color: black; /*Cor do texto*/
  font-size: 14px;
  font-weight: bold;
  text-align: center; /* Centraliza o texto */
`;

const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
`;

const Panel = styled.div`
  background-color: #DBA27E;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
`;

const LocalizacaoCalendario = () => {
  return (
    <PageContainer>
      <Header>CALENDÁRIO</Header>
      <ContentC>
        <Panel>
          <Calendar />
        </Panel>
        <Sidebar>
          <DonateButton as="a" href="/VocePodeDoar" >O que posso doar?</DonateButton>
          <ImageWrapper>
            <ImagePlaceholder src="../images/Calendario.png" alt="Imagem de acompanhe o calendario" />
            <OverlayText>Acompanhe nosso calendário para ficar por dentro das campanhas destinadas às nossas crianças! 😊</OverlayText>
          </ImageWrapper>
        </Sidebar>
      </ContentC>
      <Footer>
      <Container>
            <BarraDeTitulo>
                <Titulo>Localização</Titulo>
            </BarraDeTitulo>

            <Content>
            </Content>

            <TextSection>
                <p>Central de Doações Rua Padre Mauricio, 242 Vila Invernada, São Paulo, SP</p>
                <p>Horários da central de doações:</p>
                <br/>
                <p>Segunda à Quinta das 8:30 às 20:45</p>
                <br/>
                <p>Sexta das 8:30 às 17:45</p>
                <br/>
                <p>Sábado 9:00 às 11:30</p>
                <br/>
                <p>Domingo 9:00 às 11:30</p>
            </TextSection>


        </Container>
      </Footer>
    </PageContainer>
  );
};


//Estilização da localização
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const BarraDeTitulo = styled.div`
  background-color: #b36732;
  padding: 15px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  max-width: 100%; 
`;

const Titulo = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0;
`;

const TextSection = styled.div`
  flex: 1;
  padding: 2px;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 2px solid black;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }

  // Media query para ajuste em telas menores
  @media (max-width: 768px) {
    padding-right: 0;
    p {
      font-size: 1rem;
    }
  }
`;



export default LocalizacaoCalendario;