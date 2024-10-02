import React from 'react';
import styled from 'styled-components';

function Donate() {
  return (
    <Container>
      <Title>Faça Sua Doação</Title>
      <Description>
        Ajude a transformar vidas! Com sua doação, você contribui para que crianças e jovens em situação de vulnerabilidade tenham acesso a uma vida melhor.
      </Description>
      
      <DonationButton onClick={() => alert('Obrigado por sua doação!')}>
        Doar Agora
      </DonationButton>
    </Container>
  );
}

export default Donate;

/* Estilos com styled-components */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  color: #b36732;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  max-width: 600px;
  margin-bottom: 40px;
`;

const DonationButton = styled.button`
  background-color: #b36732;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d49058;
  }
`;
