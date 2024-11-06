import React from "react";
import styled from "styled-components";

const Porcentagem = () => {
    return (
        <PercentageSection>
            <Percentage><strong>90%</strong> pretendemos alcançar o mundo inteiro com nossa causa social.</Percentage>
            <Percentage><strong>65%</strong> das crianças recebem ajuda diariamente.</Percentage>
            <Percentage><strong>50%</strong> somos mais de 49 voluntários atuando na causa social.</Percentage>
        </PercentageSection>
    );
};

export default Porcentagem;

const PercentageSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    border-radius: 10px;
    padding: 30px; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); /* Sombra preta */
    font-family: 'Roboto', sans-serif;
    max-width: 250px; /* Definindo uma largura máxima para o bloco */
`;

const Percentage = styled.p`
    font-size: 1.4rem; /* Aumentando o tamanho da fonte */
    margin-bottom: 15px;
    line-height: 1.6; /* Ajuste de espaçamento entre linhas */
    text-align: center;

    strong {
        font-size: 1.6rem; /* Aumentando o tamanho da porcentagem */
        color: #b36732; /* Cor da porcentagem para destaque */
    }
`;
