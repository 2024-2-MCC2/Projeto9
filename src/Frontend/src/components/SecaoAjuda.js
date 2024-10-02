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
          <BotaoAjuda as={Link} to="/donation">Doe Agora</BotaoAjuda> {/* Botão para a página de doação */}
        </CaixaAjuda>

        <CaixaAjuda> {/* Caixa da direita para Voluntariado */}
          <TituloAjuda>VOLUNTARIADO</TituloAjuda> 
          <p>
            Ser um voluntário no projeto PROTEGE, você não só muda vidas, mas também investe no futuro de crianças
            que necessitam do seu apoio para alcançar um novo começo para uma vida melhor!
          </p>
          <BotaoAjuda as={Link} to="/donation">Seja um Voluntário</BotaoAjuda> {/* Botão para a página de doação */}
        </CaixaAjuda>
      </WrapperDescricao>

      {/* Seção do "Você Sabia?" */}
      <CaixaVoceSabia> 
        <TextoVoceSabia>
          <h3>Você sabia que essas crianças não têm sapatos para irem à escola?</h3>
          <p>Muitas vezes, elas caminham longas distâncias descalças ou com sapatos desgastados.</p>
          <p>Você pode ajudar doando calçados ou contribuindo para campanhas que garantem a essas crianças o básico para poderem ir à escola com dignidade e segurança.</p>
        </TextoVoceSabia>
        <ImagemSapato src="/images/sapato-vermelho.png" alt="Sapato Vermelho" /> {/* Imagem do sapato */}
      </CaixaVoceSabia>
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
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const WrapperDescricao = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 40px;
`;

const CaixaAjuda = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  width: 45%;
  text-align: center;
`;

const TituloAjuda = styled.h2`
  background-color: #b36732;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CaixaVoceSabia = styled.div`
  background-color: #f4f4f4;
  padding: 30px;
  border-radius: 10px;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

const TextoVoceSabia = styled.div`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const ImagemSapato = styled.img`
  width: 150px;
  margin-left: 20px;
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

  &:hover {
    background-color: #d49058;
  }
`;
