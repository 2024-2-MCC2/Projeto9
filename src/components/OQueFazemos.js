import React from 'react';  
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function OQueFazemos() {
  return (
    <Container>
      <BarraSuperior>
        <TituloBarra>O QUE FAZEMOS</TituloBarra>
      </BarraSuperior>

      <Content>
        <ImageSection>
          <img src="/images/OQuefazemos.png" alt="Imagem do projeto" /> {/* Caminho ajustado para a imagem */}
        </ImageSection>

        <TextSection>
          <p>No PROTEGE enfrentamos o grande desafio de operar sem o apoio governamental devido à nova lei na Bolívia, que impede o auxílio direto às instituições. Mas, com a sua ajuda, podemos mudar essa realidade. Desenvolvemos atividades produtivas sustentáveis, como a criação de coelhos da raça Cui, que proporciona alimentos nutritivos e gera renda, e plantações que garantem refeições frescas todos os dias. Essas iniciativas não só sustentam o abrigo, mas também ensinam aos jovens habilidades valiosas para a vida, preparando-os para um futuro mais digno e independente.</p> 

          <p>Entretanto, todo esse trabalho só pode continuar com o seu apoio Para que essas crianças possam crescer em um ambiente de carinho, proteção e oportunidades, precisamos da sua ajuda. Você pode ser a chave para garantir que essas crianças não apenas sobrevivam, mas floresçam — que elas tenham a chance de sonhar, brincar, aprender e construir um futuro melhor. </p>

          <p> </p>Nada disso será possível sem você!
          Ajude-nos a garantir um futuro de esperança e dignidade para cada uma dessas crianças. 
          Juntos, podemos transformar a vidas dessas crianças!
        </TextSection>
      </Content>

      <SaibaMaisSection>
        <Link to="/oque-fazemos-sb">
          <SaibaMaisButton>Saiba mais</SaibaMaisButton>
        </Link>
      </SaibaMaisSection>
    </Container>
  );
}

export default OQueFazemos;

// Estilos com media queries para responsividade
const Container = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
`;

const BarraSuperior = styled.div`
  background-color: #b36732;
  padding: 15px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
`;

const TituloBarra = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextSection = styled.div`
  text-align: left;
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 2px solid black;

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    p {
      font-size: 0.9rem;
    }
  }
`;

const ImageSection = styled.div`
  width: 50%;

  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const SaibaMaisSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const SaibaMaisButton = styled.button`
  color: white;
  background-color: #b36732;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #a35e2d;
  }
  `;