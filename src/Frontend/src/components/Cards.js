import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: #b39283;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 120px; /* Tamanho ajustável conforme necessário */
  height: 120px;
  border-radius: 50%; /* Formato circular */
  border: 3px solid #ffa500; /* Borda laranja */
  object-fit: cover;
  object-position: center;
  margin-bottom: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  border-radius: 20px;
`;

function Cards({ title, characters, navigate, basePath }) {
  return (
    <div>
      <h1>{title}</h1>
      <CardsContainer>
        {characters.map((character) => (
          <CardContainer key={character.id}>
            <CardImage src={character.src} alt={character.alt} />
            <h3>{character.title}</h3>
            <p>{character.description}</p>
            <Button onClick={() => navigate(`${basePath}/${character.id}`)}>Saiba Mais</Button>
          </CardContainer>
        ))}
      </CardsContainer>
    </div>
  );
}

export default Cards;
