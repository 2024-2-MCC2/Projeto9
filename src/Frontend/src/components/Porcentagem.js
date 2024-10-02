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
    border: 2px solid black;
    border-radius: 10px;

`;

const Percentage = styled.p`
    font-size: 1.2rem;
    margin-bottom: 15px;
    line-height: 1.5;
    text-align: center;
    align-items: flex-start;

    strong {
        font-size: 1.4rem;
        color: #b36732; /* Cor da porcentagem para destaque */
    }
`;