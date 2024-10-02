import React from 'react';
import styled from 'styled-components';

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
          <p>Descubra como estamos transformando vidas e comunidades - Venha conhecer o que fazemos!</p>
          <p>No PROTEGE, desenvolvemos projetos focados na melhoria das condições de vida em famílias substitutas. Nossa abordagem inclui o desenvolvimento de atividades produtivas, como a criação de coelhos Cui, tanto para consumo interno quanto para geração de renda. Além de fornecerem alimentos nutritivos, estes coelhos ajudam a garantir que os recursos sejam reinvestidos na manutenção e melhoria do abrigo.</p>
          <p>Outro destaque do projeto é o investimento em plantações de alimentos para fornecer refeições saudáveis e frescas para crianças e adolescentes. As plantações são geridas de forma colaborativa, ensinando às crianças o valor de trabalhar com a terra e de cuidar do ambiente, ao mesmo tempo que fortalecem o abastecimento doméstico.</p>
        </TextSection>
      </Content>

      <SaibaMaisSection>
        <a href="#">Saiba mais</a>
                {/* quando for criado a nova pagina será direcionado a ela ex:(#OQueFazemos) */}

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

  // Media query para ajustar em telas menores
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

  // Media query para ajustar o texto em telas menores
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

 // Media query para ajustar a imagem em telas menores
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px; 
 // Adiciona um espaço embaixo para imagens empilhadas
  }
`;

const SaibaMaisSection = styled.div`
  margin-top: 20px;
  text-align: center;

  a {
    color: #b36732;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
