import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.a`
    display: inline-block;
    cursor: pointer;
    background-color: #b36732;
    border: none;
    color: white;
    padding: 15px 30px;
    font-size: 0.8rem;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    text-decoration: none;

  &:hover {
    background-color: #d49058;
    transition:trasnform 0.3s ease;
    transform: scale(1.1);
  }

`;

const Image = styled.img`
    width: 100px;
    height: auto;
`;

const LocationButton = () => {
    const handleClick = () => {
        // Redireciona para o Google Maps (ou outro serviço de localização)
        window.open("https://www.google.com/maps", "_blank"); // _blank abre em uma nova aba
    };

    return (
        <ButtonContainer onClick={handleClick}>
            <Image src="URL_DA_IMAGEM" alt="Localização" />
        </ButtonContainer>
    );
};

export default LocationButton;