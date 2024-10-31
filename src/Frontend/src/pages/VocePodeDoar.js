import React from "react";
import styled from "styled-components";
import ImageGrid from "../components/ImageGrid";

function VocePodeDoar() {
    return (
        <Container>
            <DoacoesInfo>

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