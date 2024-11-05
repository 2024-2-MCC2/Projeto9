import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function QuemSomos() {
  return (
    <Container>
      <BarraSuperior>
        <TituloBarra>QUEM SOMOS</TituloBarra>
      </BarraSuperior>

      <Content>
        <IntroText>
          Somos a Associação PROTEGE!
        </IntroText>

        <DescriptionSection>
          <LeftText>
            <p>
              A instituição trabalha com dedicação para transformar a vida de crianças e adolescentes em situação de vulnerabilidade. Nosso propósito vai além de oferecer assistência temporária, nós buscamos soluções duradouras que garantam o bem-estar, o desenvolvimento e a dignidade dessas crianças.
            </p>
            <p>
              Uma das nossas maiores prioridades é garantir que cada criança sob nossos cuidados tenha acesso a uma alimentação adequada. Muitas chegam até nós em estado de subnutrição, sem acesso regular a refeições, impactando diretamente no seu crescimento físico, mental e emocional.
            </p>
          </LeftText>

          <RightText>
            <img src="/images/QuemSomos.png" alt="Imagem de crianças na instituição" />
          </RightText>
        </DescriptionSection>

        <ImagesWrapper>
          <LeftImage>
            <img src="/images/QuemSomos2.png" alt="Imagem de crianças recebendo ajuda" />
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

        <FooterText>
          <p>
            Construímos um espaço acolhedor e seguro, mas também recebemos farturas de apoio em parcerias que ampliam as nossas ações. Com o apoio de todos, podemos transformar vidas e construir um futuro mais digno e justo para todos!
          </p>
          <p>
            Ajude-nos a garantir que nenhuma criança sofra com a fome. Com o seu apoio, podemos transformar vidas e construir um futuro mais digno e justo para todos!
          </p>
        </FooterText>
      </Content>

      <SaibaMaisSection>
        <Link to="/quem-somos-detalhes">Saiba mais</Link>
      </SaibaMaisSection>
    </Container>
  );
}

export default QuemSomos;

// Estilos com styled-components
const Container = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
  background-color: transparent;
`;

const BarraSuperior = styled.div`
  background-color: #b36732;
  padding: 15px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  max-width: 100%;
`;

const TituloBarra = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IntroText = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const DescriptionSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftText = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 2px solid black;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }
`;

const RightText = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftImage = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto; /* Garante que a imagem mantenha a proporção */
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightTextBox = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 30px;
  text-align: left;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 2px solid black;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const FooterText = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 2px solid black;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }
`;

const SaibaMaisSection = styled.div`
  margin-top: 20px;
  text-align: center;

  a {
    display: inline-block; //permite que o link se comporte como um bloco que pode ser escalado, sem ele nao vamos poder aumentar o tamanho
    color: white;
    background-color: #b36732;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      background-color: #a65428;
      transform: scale(1.1); 
    }
  }
`;

