import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Carrossel from '../components/Carrosel';
import Rodape from '../components/Rodape';
import OQuefazemos from '../components/OQueFazemos';
import QuemSomos from '../components/QuemSomos';
import CarouselCriancas from '../components/CarouselCriancas';
import SecaoAjuda from '../components/SecaoAjuda'

function TelaPrincipal() {
  return (
    <ContainerTela>
      <MainSection>
        {/* Carrossel */}
        <CarouselContainer>
          <CarouselCriancas />
        </CarouselContainer>
        {/* Botões principais */}
        <ButtonsContainer>
          <BotaoAjuda as="a" href="#Quem-Somos">Quem Somos</BotaoAjuda> {/* Sem redirecionamento */}
          <BotaoAjuda as={Link} to="/donation">Doe Agora</BotaoAjuda> {/* Redirecionamento para a página de doação */}
          <BotaoAjuda as="a" href="#oque-fazemos">O que Fazemos</BotaoAjuda> {/* Rolagem suave para a seção "O que Fazemos" */}
        </ButtonsContainer>
        {/* Seção Ajuda */}
        <SecaoAjuda />
        {/* Seção informativa */}
        <SecaoInfo>
          <Carrossel />
        </SecaoInfo>

        {/* Seção "O que Fazemos" */}
        <SectionWrapper id="oque-fazemos">
          <OQuefazemos />
        </SectionWrapper>

        {/* Seção "Quem Somos" */}
        <SectionWrapper id= "Quem-Somos">
          <QuemSomos />
        </SectionWrapper>
      </MainSection>

      {/* Rodapé */}
      <Rodape />
    </ContainerTela>
  );
}

export default TelaPrincipal;

/* Estilos para a tela principal */
const ContainerTela = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px; 
  /* Ajuste para tela grande */
  margin: 0 auto;
  padding: 20px;

  /* Media query para telas menores */
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

const Titulo = styled.h1`
  color: #b36732;
  font-size: 2.5rem; 
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto; 
  //auto para nao cortar e ter sua limitação
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ButtonsContainer = styled.div`
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d49058;
  }

  @media (max-width: 768px) {
    width: 100%; 
    /* Botões ocupam 100% da largura em telas menores */
    padding: 15px 0;
  }
`;

const SecaoInfo = styled.div`
  background-color: #f4f4f4;
  padding: 50px 20px;
  border-radius: 10px;
  margin-top: 40px;
  border : 2px solid black;

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
