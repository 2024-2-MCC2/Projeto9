import React from "react";
import styled from "styled-components";

function Voluntariado() {
    return (
        <Container>
            <Content>
                <TextSection>
                    <Title>COMO SE TORNAR UM VOLUNTÁRIO?</Title>
                    <Description>
                        Como voluntário do PROTEGE, você tem várias maneiras de se destacar.
                        Desde colaborar diretamente em nossos projetos de sustentabilidade, como a criação de coelhos da raça 'Cui' e o cultivo de alimentos nas plantações do abrigo, é possível participar de atividades educativas e recreativas com as crianças.
                    </Description>
                    <Description>
                        A agricultura e a geração de recursos para o lar são garantidas por essas iniciativas produtivas, que o auxiliam a se manter de maneira autossustentável.
                    </Description>
                </TextSection>

                <ImageSection>
                    <VolunteerImage src="/images/OQuefazemos.png" alt="Imagem do projeto" />
                    <T>Junte-se a nós nessa missão de transformar vidas!</T>
                </ImageSection>
            </Content>
        </Container>
    );
}

export default Voluntariado;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 30px;
    margin-top: 80px;
    width: 100%;  
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    gap: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const TextSection = styled.section`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    font-size: 1.1rem;
    line-height: 1.6;
    width: 100%;
    max-width: 500px;
    color: #333;
    border: 2px solid black;
`;

const Title = styled.h2`
    color: #b36732;
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: bold;
`;

const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
`;

const ImageSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin-top: 20px;
`;

const VolunteerImage = styled.img`
    width: 100%;
    border-radius: 20px; /* Bordas arredondadas */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid black;
    margin-bottom: 20px;
`;

const T = styled.div`
    background-color: #f4a261;
    color: #333;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    border: 2px solid black;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
`; 
