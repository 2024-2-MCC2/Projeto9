// DetalhesDEV.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';



function DetalhesDEV() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dev, setDev] = useState(null);

  useEffect(() => {
    const devsData = [
      { id: '1', src: "https://i.postimg.cc/NfJ8bgV7/Nicolas-J.jpg", title: "Nicolas Roberto Jordan Morales 1", description: "Programador e desenvolvedora do site" },
      { id: '2', src: "https://i.postimg.cc/FKg7Wpz5/Nicolas-S.jpg", title: "Nicolas Soeiro", description: "Programador e desenvolvedora do site" },
      { id: '3', src: "https://i.postimg.cc/Dz7ZRGR9/Nicolly.jpg", title: "Nicolly Da Silva Soares ", description: "Programadora e desenvolvedora do site" },
      { id: '4', src: "https://i.postimg.cc/MTgHXFrB/Hellen.jpg", title: "Hellen", description: "Programadora e desenvolvedora do site" },
      { id: '5', src: "https://i.postimg.cc/yYsBnK9d/Stephany.jpg", title: "Stephany", description: "Programadora e desenvolvedora do site" },
      // Adicione mais DEVs aqui
    ];

    const selectedDev = devsData.find(item => item.id === id);
    setDev(selectedDev);
  }, [id]);

  if (!dev) return <div>DEV não encontrado</div>;

  return (
    <espacamentoHeader>
    <DetalhesContainer>
      <Image src={dev.src} alt={dev.title} />
      <Title>{dev.title}</Title>
      <Description>{dev.description}</Description>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </DetalhesContainer>
    </espacamentoHeader>
  );
}

export default DetalhesDEV;
const espacamentoHeader = styled.div`
padding-top: 500px;
`;

const DetalhesContainer = styled.div`
  max-width: 55%; /* Aumenta a largura máxima */
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 30%; 
  height: auto;
  border-radius: 10px; 
  margin-bottom: 20px;
  object-fit: cover; 
`;

const Title = styled.h2`
  color: #333;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
