import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function Localizacao () {
    return(
        <Container>
            <BarraDeTitulo>
                <Titulo>Localização</Titulo>
            </BarraDeTitulo>

            <Content>
                <ImageSection>
                    <img src="/images/OQuefazemos.png" alt="Imagem do projeto" /> {/* Caminho ajustado para a imagem */}
                </ImageSection>
            </Content>

            <TextSection>
                <p>Central de Doações Rua Padre Mauricio, 242 Vila Invernada, São Paulo, SP</p>
                <p>Horários da central de doações:</p>
                <br/>
                <p>Segunda à Quinta das 8:30 às 20:45</p>
                <br/>
                <p>Sexta das 8:30 às 17:45</p>
                <br/>
                <p>Sábado 9:00 às 11:30</p>
                <br/>
                <p>Domingo 9:00 às 11:30</p>
            </TextSection>


        </Container>
    );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const BarraDeTitulo = styled.div`
  background-color: #b36732;
  padding: 15px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  max-width: 100%; 
`;

const Titulo = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0;
`;

const TextSection = styled.div`
  flex: 1;
  padding: 2px;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 2px solid black;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }

  // Media query para ajuste em telas menores
  @media (max-width: 768px) {
    padding-right: 0;
    p {
      font-size: 1rem;
    }
  }
`;

 

const ImageSection = styled.div`
  width: 48%;
`



export default Localizacao;