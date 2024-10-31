import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Cards from "../components/Cards";
import Header from "../components/Header";

function Familia() {
  const navigate = useNavigate();
  
  const integrantes = [
    { id: '1', src: "/path/to/image1.jpg", alt: 'Integrante 1', title: "Nome 1", description: "Cargo 1" },
    { id: '2', src: "/path/to/image2.jpg", alt: 'Integrante 2', title: "Nome 2", description: "Cargo 2" },
    { id: '3', src: "/path/to/image3.jpg", alt: 'Integrante 3', title: "Nome 3", description: "Cargo 3" },
  ];

  const representantes = [
    { id: '1', src: "/path/to/image1.jpg", alt: 'Representante 1', title: "Nome 4", description: "Cargo 4" },
    { id: '2', src: "/path/to/image2.jpg", alt: 'Representante 2', title: "Nome 5", description: "Cargo 5" },
    { id: '3', src: "/path/to/image3.jpg", alt: 'Representante 3', title: "Nome 6", description: "Cargo 6" },
  ];

  const DEVs = [
    { id: '1', src: "https://i.postimg.cc/NfJ8bgV7/Nicolas-J.jpg", alt: 'DEV 1', title: "Nicolas J", description: "Desenvolvedor do site" },
    { id: '2', src: "https://i.postimg.cc/FKg7Wpz5/Nicolas-S.jpg", alt: 'DEV 2', title: "Nicolas S", description: "Desenvolvedor do site" },
    { id: '3', src: "https://i.postimg.cc/Dz7ZRGR9/Nicolly.jpg", alt: 'DEV 3', title: "Nicolly", description: "Desenvolvedora do site" },
    { id: '4', src: "https://i.postimg.cc/MTgHXFrB/Hellen.jpg", alt: 'DEV 4', title: "Hellen", description: "Desenvolvedora do site" },
    { id: '5', src: "https://i.postimg.cc/yYsBnK9d/Stephany.jpg", alt: 'DEV 5', title: "Stephany", description: "Desenvolvedora do site" },

  ];

  return (
    <FamiliaContainer>
      <Header />
      <Overlay />
      <Content>
        <Cards title="Integrantes" characters={integrantes} navigate={navigate} basePath="/integrante" />
        <Cards title="Representantes" characters={representantes} navigate={navigate} basePath="/representante" />
        <Cards title="DEVs" characters={DEVs} navigate={navigate} basePath="/dev" />
      </Content>
    </FamiliaContainer>
  );
}

export default Familia;

// Estilos para os componentes
const FamiliaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('/images/BackgroundImage.jpg') center/cover no-repeat;
  position: relative;
  min-height: 100vh;
  padding-top: 60px; /* Ajuste caso o Header seja fixo */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  color: black;
`;
