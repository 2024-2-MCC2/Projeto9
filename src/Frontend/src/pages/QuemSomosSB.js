
import React from "react";
import styled from "styled-components";

const QuemSomosSB = () => {
  return (
    <Container>
      <MainContent>
        <Title>QUEM SOMOS</Title>
        <ContentContainer>
          <TextSection>
            <p>
              Somos uma instituição que ajuda crianças e jovens carentes, que iniciou com minha sobrinha perguntando “Tio, porque não ajudam o lar Zapatito?”. Naquele tempo, éramos voluntários em outros dois lares, e não tínhamos muitos recursos. Em 2012 atendendo ao pedido de minha sobrinha, fomos ao lar Zapatitos. Ao chegar, Iván o responsável pelo lar me recebeu calorosamente. Vi crianças indo para escola descalças e outras com chinelos, fiquei chocado ao perceber que não tinham sapatos o suficiente. Desde então, com ajuda de amigos, buscamos melhorar a vida dessas crianças. Atualmente estamos localizados na Av: Nome real do endereço, SP - Brasil.
            </p>
            <p>
              Nosso trabalho diário é transformar a realidade das crianças que acolhemos, oferecendo um ambiente seguro e acolhedor, além de refeições nutritivas essenciais para o seu crescimento saudável. Buscamos alcançar a autossustentabilidade alimentar, para podermos reduzir a dependência de doações externas e garantir que todas as crianças recebam o cuidado e o apoio que precisam. Nosso compromisso é proporcionar a cada uma delas um futuro onde cresçam com saúde, dignidade e oportunidades reais de desenvolvimento.
            </p>
          </TextSection>
          <ImageSection>
            <Image src="/images/Criancas.png" alt="Grupo de crianças" />
            {/* Cópia da primeira imagem */}
            <Image src="/images/OQueFazemos.png" alt="Grupo de crianças" />
          </ImageSection>
        </ContentContainer>

        <ImageWithTextContainer>
          <SideImageWrapper>
            <SideImage src="/images/VoluntariadoCriancas.png" alt="Grupo de voluntários e crianças" />
            {/* Cópia da segunda imagem */}
            <SideImage src="/images/QuemSomos2.png" alt="Grupo de voluntários e crianças" />
          </SideImageWrapper>
          <TextContainer>
            <TextSection>
              <p>
                Nossa infraestrutura tem capacidade para acolher até 95 crianças, mas, infelizmente, devido à escassez de alimentos e recursos básicos, conseguimos atender apenas 35 crianças. Isso significa que nosso potencial está sendo subutilizado, e muitas crianças que precisam de ajuda ainda não podem ser atendidas. Também, enfrentamos o desafio de operar sem apoio governamental, pois uma nova lei na Bolívia impede que o Estado forneça auxílio direto às instituições de acolhimento. Isso nos coloca em uma posição ainda mais desafiadora para manter o sustento das crianças e garantir o apoio necessário.
              </p>
              <p>
                Mesmo com as dificuldades, continuamos firmes graças ao trabalho incansável de nossos voluntários e parceiros.
              </p>
            </TextSection>

            <TextSection>
              <p>
                Atualmente, contamos com o apoio de X voluntários e, até agora, já atendemos X crianças e adolescentes, com idades entre 0 e 18 anos. Nossos voluntários são fundamentais para o sucesso do projeto, atuando em diversas áreas, desde o cuidado diário e a atenção às crianças até o apoio nas atividades produtivas e educativas que promovemos. Nosso trabalho é sustentado pela generosidade de nossos voluntários e colaboradores, que contribuem com doações de recursos essenciais, como roupas, sapatos, livros, itens de higiene, brinquedos e outros materiais necessários para o bem-estar das crianças. Mas para continuarmos transformando vidas e garantir nossa autossustentabilidade precisamos da sua ajuda. Cada doação e cada apoio fazem a diferença, permitindo que mais crianças recebam o cuidado que merecem e que possamos ampliar nossa capacidade de acolhimento.
              </p>
              <p>
                Acreditamos que a educação é a chave para mudar vidas, e é por isso que trabalhamos incansavelmente para fornecer todas as oportunidades para que cada criança realize o seu potencial.
              </p>
            </TextSection>
          </TextContainer>
        </ImageWithTextContainer>
      </MainContent>
      <Footer>
        <p>Fale Conosco</p>
      </Footer>
    </Container>
  );
};

export default QuemSomosSB;

// Estilos com styled-components
const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  padding: 40px 60px;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 1200px;
  background-color: transparent;
  flex: 1; /* Ocupa o espaço restante */
`;

const Title = styled.h1`
  text-align: center;
  color: #b36732;
  font-size: 80px;
  margin: 100px 0 30px 0;
  font-weight: bold;
  font-family: "Georgia", serif; /* Fonte para o título */
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImageWithTextContainer = styled.div`
  display: flex;
  gap: 40px; /* Espaçamento entre imagem e texto */
  align-items: flex-start;
  margin-top: 40px;
  position: relative; /* Define a posição relativa para os elementos */

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SideImageWrapper = styled.div`
  flex: 1;
  max-width: 800px; /* Aumenta a largura máxima da imagem */
  min-width: 400px; /* Define uma largura mínima para a imagem */
  position: relative; /* Para controlar a sobreposição */
  z-index: 2; /* Traz a imagem para a frente */
  margin-left: -200px; /* Move a imagem mais para a esquerda */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SideImage = styled.img`
  width: 150%;
  height: auto;
  max-height: 600px; /* Limita a altura máxima da imagem */
  min-height: 300px; /* Define uma altura mínima para garantir que a imagem apareça */
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 4px solid #b36732;
   margin-top: 50px; /* Move a primeira imagem mais para baixo */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  position: relative;
  z-index: 12; /* Garante que o texto fique à frente */
  margin-left: 200px; /* Move o texto para a direita */
`;

const TextSection = styled.div`
  width: 100%;
  padding: 25px;
  border-radius: 10px;
  background-color: #f5a25d; /* Fundo laranja */
  color: black;

  p {
    font-size: 18px;
    line-height: 1.8; /* Aumenta o espaçamento entre linhas */
    margin-bottom: 15px; /* Adiciona um espaço entre os parágrafos */
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const ImageSection = styled.div`
  width: 95%; /* Aumenta a largura do contêiner de imagens */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px; /* Move a primeira imagem mais para baixo */

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 600px; /* Limita a altura máxima para evitar distorção */
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 4px solid #b36732; /* Adiciona uma borda de 3px */
`;

const Footer = styled.footer`
  background-color: #b36732;
  color: #000000;
  text-align: center;
  padding: 20px 0;
  margin-top: auto; /* Move o rodapé para a parte inferior */
`;

