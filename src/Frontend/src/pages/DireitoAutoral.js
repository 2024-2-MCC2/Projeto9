import React from 'react';
import styled from 'styled-components';

function DireitoAutoral() {
  return (
    <Container>
      <Content>
        <Title>Direito Autoral e Uso de Imagens</Title>
        <Paragraph>
          A Organização PROTEGE declara, para todos os fins de Direito que, todas as suas fotografias, vídeos e outras produções audiovisuais que envolvam suas imagens, logotipos ou quaisquer signos distintivos minimamente identificáveis são de sua exclusiva propriedade, não sendo permitida a utilização, por qualquer Terceiro, independentemente da finalidade e meio escolhido, sem a prévia e expressa autorização por escrito.
        </Paragraph>
      </Content>
      {/* Rodapé */}
      <Footer>
        <p>&copy; 2024 | Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
}

export default DireitoAutoral;

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* alinha o conteúdo em coluna para colocar o rodapé abaixo */
  min-height: 100vh;
  padding: 20px;
`;

const Content = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  text-align: justify;
  margin-bottom: 20px; /* Dá um espaçamento entre o conteúdo e o rodapé */
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.6;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 12px;
  color: #777;
  margin-top: 20px; /* Espaçamento acima do rodapé */
  padding: 10px;
  width: 100%;
  
`;
