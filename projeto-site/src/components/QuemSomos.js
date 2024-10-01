import React from 'react';
import styled from 'styled-components';

function QuemSomos() {
  return (
    <Container>
      {/* Barra superior com o título */}
      <BarraSuperior>
        <TituloBarra>QUEM SOMOS</TituloBarra>
      </BarraSuperior>

      <Content>
        <TextWrapper>
          <IntroText>Somos a Associação PROTEGE!</IntroText>
        </TextWrapper>
        <TextSection>
          <p>
            A instituição trabalha com dedicação para mudar a realidade de crianças e adolescentes em
            situação de vulnerabilidade. Surgimos para oferecer não apenas ajuda momentânea, mas sim soluções
            duradouras que assegurem o bem-estar, o progresso e a dignidade dessas crianças. Inspirados pelo
            exemplo do Lar Zapatito Roto, nosso propósito é criar um espaço acolhedor e sustentável, no qual
            cada criança possa crescer com carinho, proteção e acesso aos recursos necessários para um futuro
            de sucesso.
          </p>
          <p>
            Asseguramos que os jovens se desenvolvam em um contexto seguro, favorecendo a aprendizagem, a
            expressão e a preparação para a maturidade. Atuamos pautados pela empatia, solidariedade e
            responsabilidade, cientes de que o afeto e a atenção conseguem mudar cenários. Desejamos que
            todos os jovens tenham oportunidade de almejar e edificar um destino digno.
          </p>
        </TextSection>

        <ImagesWrapper>
          <ImageSection>
            <img src="/images/QuemSomos.png" alt="QuemSomos" /> {/* Caminho ajustado */}
          </ImageSection>
          <ImageSection>
            <img src="/images/QuemSomos2.png" alt="QuemSomos" /> {/* Caminho ajustado */}
          </ImageSection>
        </ImagesWrapper>
      </Content>

      <SaibaMaisSection>
        <a href="#">Saiba mais</a> 
        {/* quando for criado a nova pagina será direcionado a ela ex:(#SaibaMaisQuemSomos) */}
      </SaibaMaisSection>
    </Container>
  );
}

export default QuemSomos;

// Estilos com responsividade
const Container = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
`;

// Barra superior laranja com título
const BarraSuperior = styled.div`
  background-color: #b36732;
  padding: 15px;
  border-radius: 10px 10px 0 0;
  text-align: center;
  width: 100%; /* Linha laranja cobrindo a tela inteira */
`;

const TituloBarra = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

const IntroText = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 20px;
  text-align: left;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }

  /* Media query para ajuste em telas menores */
  @media (max-width: 768px) {
    padding-right: 0;
    p {
      font-size: 1rem;
    }
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  
  /* Media query para ajuste em telas menores */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ImageSection = styled.div`
  width: 48%;

  img {
    width: 100%;
    border-radius: 10px;
  }

  /* Media query para ajustar a imagem em telas menores */
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px; /* Adiciona um espaçamento em cima para telas menores */
  }
`;

const SaibaMaisSection = styled.div`
  margin-top: 20px;
  text-align: center;

  a {
    color: #b36732;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
