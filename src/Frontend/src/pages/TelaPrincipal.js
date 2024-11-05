import React from 'react'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import OQueFazemos from '../components/OQueFazemos';
import QuemSomos from '../components/QuemSomos';
import SecaoAjuda from '../components/SecaoAjuda'
import Carrosel from '../components/Carrosel'

function TelaPrincipal() {
  return (
    <ContainerTela>
      <MainSection>

        <BannerContainer>
          <Banner />
        </BannerContainer>
        
        {/* Botões principais */}
        <ButtonsContainer>
          <BotaoAjuda as="a" href="#Quem-Somos">Quem Somos</BotaoAjuda>
          <BotaoAjuda as={Link} to="/donation">Doe Agora</BotaoAjuda>
          <BotaoAjuda as="a" href="#oque-fazemos">O que Fazemos</BotaoAjuda>
          <BotaoAjuda as="a" href="#SecaoAjuda">Como Ajudar?</BotaoAjuda>
        </ButtonsContainer>
        
        {/* Seção Ajuda */}
        <SectionWrapper id="SecaoAjuda">
          <SecaoAjuda />
        </SectionWrapper>

        {/* Seção informativa */}
        <SecaoInfo>
          <Carrosel />
        </SecaoInfo>

        {/* Seção "O que Fazemos" */}
        <SectionWrapper id="oque-fazemos">
          <OQueFazemos />
        </SectionWrapper>

        {/* Seção "Quem Somos" */}
        <SectionWrapper id="Quem-Somos">
          <QuemSomos />
        </SectionWrapper>
      </MainSection>
    </ContainerTela>
    
  );
}

export default TelaPrincipal;

/* Estilos para a tela principal */
const ContainerTela = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px; 
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
  }
`;

const MainSection = styled.div`
  text-align: center;
  padding: 0;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

/* Banner Container para alinhar e definir o espaço do Banner */
const BannerContainer = styled.div`
  margin: 20px auto 40px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 20px;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const BotaoAjuda = styled.button`
  background-color: #b36732;
  border: none;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #d49058;
    transform: scale(1.1);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%; 
    padding: 15px 0;
  }
`;

const SecaoInfo = styled.div`
  background-color: #f4f4f4;
  padding: 50px 20px;
  border-radius: 10px;
  margin-top: 40px;
  border: 2px solid black;

  @media (max-width: 768px) {
    padding: 20px 10px;
    margin-top: 20px;
  }
`;

const SectionWrapper = styled.div`
  margin: 60px 0;

  @media (max-width: 768px) {
    margin: 30px 0;
  }
`;
