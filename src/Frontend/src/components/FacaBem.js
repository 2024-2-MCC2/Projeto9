import React from "react";
import styled from "styled-components";
import LocationButton from "./LocationButton";

// Component Principal
function FacaBem() {
    return (
        <Container>
            <Title>FAÇA O BEM - DOE!</Title>
            <Subtitle>VOCÊ PODE DOAR...</Subtitle>
            <GridContainer>
                {items.map((item, index) => (
                    <GridItem key={index}>{item}</GridItem>
                ))}
            </GridContainer>
            <Description>
                Roupas masculinas, femininas e infantis, calçados, acessórios (bolsas, carteiras, mochilas,
                cintos, óculos), utensílios domésticos, aparelhos eletrônicos, artigos para decoração, cama, mesa e
                banho.
            </Description>
            <LocationButtonWrapper>
                <StyledLocationButton />
            </LocationButtonWrapper>
        </Container>
    );
}


const items = ["ROUPAS", "SAPATOS", "LIVROS", "BRINQUEDOS", "CAMA/MESA/BANHO", "UTILIDADES", "ACESSÓRIOS", "ELETRÔNICOS"];


const Container = styled.div`
    text-align: center;
    color: #333;
    font-family: Arial, sans-serif;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #222;
    margin-bottom: 10px;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 20px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-bottom: 20px;
`;

const GridItem = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
`;

const Description = styled.p`
    font-size: 0.8rem;
    color: #666;
    margin-top: 20px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

const LocationButtonWrapper = styled.div`
    margin-top: 20px;
`;

// hover e scale
const StyledLocationButton = styled(LocationButton)`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export default FacaBem;