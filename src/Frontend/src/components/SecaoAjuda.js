import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SecaoAjuda() {
  return (
    <ContainerSecao> {/* Container da seção de ajuda */} 
      {/* Título principal */} 
      <Titulo>AJUDE CRIANÇAS E JOVENS CARENTES</Titulo>
      <WrapperDescricao> {/* Primeira separação Doação e Voluntariado */} 
        <CaixaAjuda> {/* Caixa da esquerda para Doação */} 
          <TituloAjuda>DOAÇÃO</TituloAjuda>
          <p>
            Com a sua doação, você estará apoiando não somente um projeto, mas transformando a vida dos jovens,
            oferecendo a esperança e chance de um futuro cheio de oportunidades para as crianças que precisam de um novo começo!
          </p>
          <BotaoAjuda as={Link} to="/donation" >Doe Agora</BotaoAjuda> {/* Botão para a página de doação */}
        </CaixaAjuda>

        <CaixaAjuda> {/* Caixa da direita para Voluntariado */} 
          <TituloAjuda>VOLUNTARIADO</TituloAjuda>
          <p>
            Ser um voluntário no projeto PROTEGE, você não só muda vidas, mas também investe no futuro de crianças
            que necessitam do seu apoio para alcançar um novo começo para uma vida melhor!
          </p>
          <BotaoAjuda as={Link} to="/voluntariado">Seja um Voluntário</BotaoAjuda> {/* Botão para a página de doação */}
        </CaixaAjuda>
      </WrapperDescricao>
    </ContainerSecao>
  );
}

export default SecaoAjuda;

const ContainerSecao = styled.div`
  padding: 40px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Titulo = styled.h1`
  color: #b36732;
  font-size: 2.8rem;
  margin-bottom: 30px;
  font-weight: bold;
`;

const WrapperDescricao = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 40px;
  font-family: Roboto, sans-serif;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const CaixaAjuda = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  width: 45%;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); /* Substituindo a borda por sombra */
`;

const TituloAjuda = styled.h2`
  background-color: #b36732;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const BotaoAjuda = styled.button`
  background-color: #b36732;
  border: none;
  color: white;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  text-decoration: none; /* Remover a linha sublinhada */
  display: inline-block; /* Garante que o botão seja tratado como um bloco */
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; /* Transição suave */

  &:hover {
    background-color: #d49058;
    transform: scale(1.1); /* Efeito de zoom ao passar o mouse */
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3); /* Sombra aumentada ao passar o mouse */
  }
`;
