import React from "react";
import styled from "styled-components";
import ImageGrid from "../components/ImageGrid";

function VocePodeDoar() {
    return (
        <Container>
            <h2>VOCÊ PODE DOAR...</h2>
            <DoacoesInfo>
                <p>
                    Roupas masculinas, femininas e infantis, calçados, acessórios (bolsas, carteiras, mochilas, cintos, óculos), utensílios domésticos, aparelhos eletrônicos, artigos para decoração, cama, mesa e banho.
                </p>
            </DoacoesInfo>
            <ImageGrid />
        </Container>

    );
}

export default VocePodeDoar;

const Container = styled.div`
    color: white;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`;

const DoacoesInfo = styled.div`
    color: black;
    font-size: 0.8rem;
    text-align: center;
    margin-top: 20px;
`;