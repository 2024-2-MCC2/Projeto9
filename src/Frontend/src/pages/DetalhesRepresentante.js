// DetalhesRepresentante.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function DetalhesRepresentante() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [representante, setRepresentante] = useState(null);

  useEffect(() => {
    const representantesData = [
      { id: '1', src: "/path/to/image1.jpg", title: "Nome Representante 1", description: "Detalhes sobre o Cargo Representante 1" },
      // Adicione mais representantes aqui
    ];

    const selectedRepresentante = representantesData.find(item => item.id === id);
    setRepresentante(selectedRepresentante);
  }, [id]);

  if (!representante) return <div>Representante não encontrado</div>;

  return (
    <DetalhesContainer>
      <Image src={representante.src} alt={representante.title} />
      <Title>{representante.title}</Title>
      <Description>{representante.description}</Description>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </DetalhesContainer>
  );
}

export default DetalhesRepresentante;

const DetalhesContainer = styled.div`
  max-width: 800px;
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #333;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
`;
