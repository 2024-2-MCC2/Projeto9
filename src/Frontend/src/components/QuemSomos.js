import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function QuemSomos() {
  return (
    <Container>
      {/* Barra Superior com o título da seção */}
      <BarraSuperior>
        <TituloBarra>QUEM SOMOS</TituloBarra>
      </BarraSuperior>

      <Content>
        <IntroText>Somos a Associação PROTEGE!</IntroText>

        {/* Seção de Descrição com texto e imagem */}
        <DescriptionSection>
          <LeftText>
            <p>
              A instituição trabalha com dedicação para transformar a vida de crianças e adolescentes em situação de vulnerabilidade. Nosso propósito vai além de oferecer assistência temporária, nós buscamos soluções duradouras que garantam o bem-estar, o desenvolvimento e a dignidade dessas crianças.
            </p>
            <p>
              Uma das nossas maiores prioridades é garantir que cada criança sob nossos cuidados tenha acesso a uma alimentação adequada. Muitas chegam até nós em estado de subnutrição, sem acesso regular a refeições, impactando diretamente no seu crescimento físico, mental e emocional.
            </p>
          </LeftText>

          {/* Imagem à direita da descrição */}
          <RightText>
            <StyledImage src="/images/QuemSomos.png" alt="Imagem de crianças na instituição" />
          </RightText>
        </DescriptionSection>

        {/* Segunda seção com duas imagens e um bloco de texto */}
        <ImagesWrapper>
          <LeftImage>
            <StyledImage src="/images/QuemSomos2.png" alt="Imagem de crianças recebendo ajuda" />
          </LeftImage>

          <RightTextBox>
            <p>
              Infelizmente, o cenário é desafiador. Mesmo com todos os nossos esforços, muitas vezes faltam recursos para garantir que cada criança receba as refeições necessárias para um desenvolvimento pleno.
            </p>
            <p>
              No PROTEGE, estamos comprometidos em mudar essa realidade, oferecendo não apenas um espaço acolhedor e seguro, mas também refeições nutritivas que assegurem que cada criança possa crescer saudável e feliz.
            </p>
          </RightTextBox>
        </ImagesWrapper>

        {/* Seção final com texto de rodapé */}
        <FooterText>
          <p>
            Construímos um espaço acolhedor e seguro, mas também recebemos farturas de apoio em parcerias que ampliam as nossas ações. Com o apoio de todos, podemos transformar vidas e construir um futuro mais digno e justo para todos!
          </p>
          <p>
            Ajude-nos a garantir que nenhuma criança sofra com a fome. Com o seu apoio, podemos transformar vidas e construir um futuro mais digno e justo para todos!
          </p>
        </FooterText>
      </Content>

      {/* Botão "Saiba mais" que leva a outra página */}
      <SaibaMaisSection>
        <StyledLink to="/quem-somos-detalhes">Saiba mais</StyledLink>
      </SaibaMaisSection>
    </Container>
  );
}

export default QuemSomos;

// Styled Components

// Container geral que define a fonte e o espaçamento externo
const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
  background-color: transparent;
`;

// Barra Superior contendo o título "QUEM SOMOS"
const BarraSuperior = styled.div`
  background-color: #b36732;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
`;

// Estilo do título da barra
const TituloBarra = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0;
`;

// Wrapper geral para o conteúdo principal
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Texto de introdução estilizado
const IntroText = styled.h3`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
  color: #b36732;
`;

// Seção da descrição com a imagem e o texto ao lado
const DescriptionSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Alinha a imagem e o texto na mesma altura */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Texto à esquerda na seção de descrição
const LeftText = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);

  p {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }
`;

// Imagem à direita do texto na seção de descrição
const RightText = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

// Wrapper para a segunda seção com imagens e texto
const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Alinha as imagens e o bloco de texto na mesma altura */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Imagem à esquerda na segunda seção
const LeftImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilo para as imagens com altura ajustada
const StyledImage = styled.img`
  width: 100%;
  height: 100%; /* Ajusta a imagem para ocupar toda a altura do contêiner */
  border-radius: 12px;
  border: 3px solid #b36732;
  object-fit: cover;
`;

// Caixa de texto à direita na segunda seção
const RightTextBox = styled.div`
  flex: 1;
  padding: 30px;
  text-align: left;
  margin-left: 30px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);

  p {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

// Texto final, ao estilo de rodapé, para a seção de descrição
const FooterText = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  text-align: left;

  p {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }
`;

// Seção do botão "Saiba Mais" na parte inferior
const SaibaMaisSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

// Estilo do botão "Saiba Mais"
const StyledLink = styled(Link)`
  color: white;
  background-color: #b36732;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: inline-block;

  &:hover {
    background-color: #a65428;
    transform: scale(1.1);
  }
`;
