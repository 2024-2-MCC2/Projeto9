import React from "react";
import styled from "styled-components";

function voceSabiaDonate () {
    return(
        <Container>
            <Content>
                <ButtonSection>
                <div>
                    <BotaoDoar>Doar</BotaoDoar>
                </div>
                </ButtonSection>

                <TextSection>
                <h2>VOCÊ SABIA?</h2>
                <p>Ajudamos as crianças diariamente com itens de higiene pessoal, alimentos, calçados, vestimentas, livros e mesaspara que elas possam estudar confortavelmente.</p>
                <p>Para muitas delas, o dia do aniversário passa sem qualquer celebração, bolo ou presente.
                Participe organizando festas de aniversário ou doando recursos para podermos proporcionar
                momentos de alegria e carinho para cada criança no seu dia especial.</p>
                </TextSection>
            </Content>
        </Container>
    );
}

export default voceSabiaDonate

const Container = styled.div`
    display: flex;
    justify-content: center; 
    background-color: #f4f4f4 ;
    align-items: center; 
    border-radius: 10px;
    padding: 200px;
    margin-top: 50px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const TextSection = styled.section`
  justify-content: center;
  align-items: left;
  flex: 1;
  padding-right: 20px;

  h2 {
    color: #b36732;
    font-size: 2.6rem;
    margin-bottom: 15px;
    text-align: center;
    margin-right: 800px;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
    margin-bottom: 15px;
    margin-right: 800px;
    text-align: center;
  }
`;

const BotaoDoar = styled.button`
width: 200px; 
    height: 200px; 
    border: #ffff; 
    border-radius: 100%; 
    background-color: #b36732; 
    color: white; 
    font-size: 16px; 
    cursor: pointer;
    display: flex; 
    justify-content: center; 
    align-items: center; 
`
const ButtonSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
`





  