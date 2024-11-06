import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function OQueFazemos() {
  return (
    <Container>
      {/* Barra Superior com o título da seção */}
      <BarraSuperior>
        <TituloBarra>O QUE FAZEMOS</TituloBarra>
      </BarraSuperior>

      <Content>
        {/* Seção da Imagem */}
        <ImageSection>
          <StyledImage src="/images/OQuefazemos.png" alt="Imagem do projeto(Crianças)" />
          <StyledImage src="/images/MaoscomPlanta.png" alt="Mãos comn Planta" />
        </ImageSection>

        {/* Seção de Texto */}
        <TextSection>
          <p>No PROTEGE enfrentamos o grande desafio de operar sem o apoio governamental devido à nova lei na Bolívia, que impede o auxílio direto às instituições.
             Mas, com a sua ajuda, podemos mudar essa realidade. Desenvolvemos atividades produtivas sustentáveis, como a criação de coelhos da raça Cui, que proporciona alimentos nutritivos e gera renda, e plantações que garantem refeições frescas todos os dias. Essas iniciativas não só sustentam o abrigo, mas também ensinam aos jovens habilidades valiosas para a vida, preparando-os para um futuro mais digno e independente.</p> 

          <p>Entretanto, todo esse trabalho só pode continuar com o seu apoio. Para que essas crianças possam crescer em um ambiente de carinho, proteção e oportunidades, precisamos da sua ajuda. Você pode ser a chave para garantir que essas crianças não apenas sobrevivam, mas floresçam — que elas tenham a chance de sonhar, brincar, aprender e construir um futuro melhor.</p>

          <p>Nada disso será possível sem você!
          Ajude-nos a garantir um futuro de esperança e dignidade para cada uma dessas crianças.</p> 
          <p>Juntos, podemos transformar a vida dessas crianças!</p>
        </TextSection>
      </Content>

      {/* Botão "Saiba Mais" */}
      <SaibaMaisSection>
        <Link to="/oque-fazemos-sb">
          <SaibaMaisButton>Saiba mais</SaibaMaisButton>
        </Link>
      </SaibaMaisSection>
    </Container>
  );
}

export default OQueFazemos;

// Estilos

// Container geral que define a fonte e o espaçamento externo
const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
`;

// Barra Superior contendo o título "O QUE FAZEMOS"
const BarraSuperior = styled.div`
  background-color: #b36732;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
`;

// Estilo do título da barra
const TituloBarra = styled.h2`
  color: white;
  font-size: 2rem;
  margin: 0;
`;

// Wrapper para organizar a imagem e o texto lado a lado
const Content = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Seção da imagem com as imagens empilhadas verticalmente
const ImageSection = styled.div`
  flex: 1;
  max-width: 100%;
  padding: 20px;
  margin-left: -20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column; /* Empilha as imagens verticalmente */
  gap: 20px; /* Espaço entre as imagens */

  @media (max-width: 768px) {
    width: 100%;
    max-width: 80%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

// Estilo para as imagens
const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border: 3px solid #b36732;
  border-radius: 10px;
  object-fit: cover;
`;

// Seção de texto, com fundo, sombra e estilo para texto responsivo
const TextSection = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 20px;
  background-color: #f4f4f4;
  
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  text-align: left;
  

  p {
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`;

// Wrapper para o botão "Saiba Mais" na parte inferior
const SaibaMaisSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

// Estilo do botão "Saiba Mais"
const SaibaMaisButton = styled.button`
  color: white;
  background-color: #b36732;
  text-decoration: none;
  padding: 15px 30px;
  font-size: 1.5rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  margin-top: 20px; 

  &:hover {
    background-color: #a35e2d;
    transform: scale(1.1);
  }
`;
