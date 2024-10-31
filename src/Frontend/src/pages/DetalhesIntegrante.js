import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function DetalhesIntegrante() {
  const { id } = useParams();
  const [integrante, setIntegrante] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mockData = [
      { id: '1', src: "/path/to/image1.jpg", title: "Nome 1", description: "Detalhes sobre o Cargo 1" },
      { id: '2', src: "/path/to/image2.jpg", title: "Nome 2", description: "Detalhes sobre o Cargo 2" },
      { id: '3', src: "/path/to/image3.jpg", title: "Nome 3", description: "Detalhes sobre o Cargo 3" },
      // Adicione mais integrantes aqui
    ];

    const selectedIntegrante = mockData.find(item => item.id === id);
    setIntegrante(selectedIntegrante);
  }, [id]);

  if (!integrante) return <div>Integrante não encontrado</div>;

  return (
    <DetalhesContainer>
      <Image src={integrante.src} alt={integrante.title} />
      <Title>{integrante.title}</Title>
      <Description>{integrante.description}</Description>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </DetalhesContainer>
  );
}

export default DetalhesIntegrante;
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
