import React from "react";
import styled from "styled-components";
import Porcentagem from "../components/Porcentagem";

function Donate() {
    return (
        <Container>
            <Content>
                <TextSection>
                    <Title>VOCÊ SABIA?</Title>
                    <Description>
                        Ajudamos as crianças diariamente com itens de higiene pessoal, alimentos, calçados, vestimentas, livros e mesas para que elas possam estudar confortavelmente.
                    </Description>
                    <Description>
                        Para muitas delas, o dia do aniversário passa sem qualquer celebração, bolo ou presente. 
                        Participe organizando festas de aniversário ou doando recursos para podermos proporcionar momentos de alegria e carinho para cada criança no seu dia especial.
                    </Description>
                </TextSection>

                <CenterSection>
                    <Circle>
                        <DonateText>Mãos que ajudam, Tranformam corações</DonateText>
                    </Circle>
                    <ButtonContainer>
                        <Button>DOAR</Button>
                        {/* será adcionado o link para a conta bancaria e depositar o dinheiro aqui  */}
                    </ButtonContainer>
                </CenterSection>

                <PorcentagemSection>
                    <Porcentagem />
                </PorcentagemSection>
            </Content>
        </Container>
    );
}

export default Donate;

const imagespace = styled.div`
width: 100%;
height: 100%
align-items;

`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 15px;
    margin-top: 120px;
    width: 100%;  
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start; 
    
    width: 100%; 
    max-width: 1200px; 
 //   Limite de largura para que o conteúdo não fique muito esticado
`;

const TextSection = styled.section`
    flex: 1;
    padding: 20px;
    margin-right: 20px;
    max-width: 400px;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;

`;

const Title = styled.h2`
    color: #b36732;
    font-size: 2.4rem;
    margin-bottom: 15px;
`;

const Description = styled.p`
    font-size: 1.4rem;
    line-height: 1.6;
    margin-bottom: 15px;
`;

const CenterSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const Circle = styled.div`
    width: 350px;
    height: 350px;
    background-color: #b36732;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const DonateText = styled.h3`
    color: white;
    font-size: 2rem;
    font-weight: bold;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
`;

const Button = styled.button`
    background-color: #b36732;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
        &:hover {
    background-color: #a25626;
    transform: scale(1.1); /* Efeito de zoom ao passar o mouse */
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3); /* Sombra aumentada ao passar o mouse */
  }
    }
`;

const PorcentagemSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end; 
    flex: 1;
    padding: 20px;
    max-width: 300px;
`;
