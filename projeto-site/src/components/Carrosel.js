import React, { useState, useEffect } from 'react';

// Aqui embaixo vamos 
const frases = [
  {
    titulo: "Você sabia que essas crianças não têm sapatos para irem à escola?",
    descricao: "Muitas vezes, elas caminham longas distâncias descalças ou com sapatos desgastados. Você pode ajudar doando calçados ou contribuindo para campanhas que garantem a essas crianças o básico para poderem ir à escola com dignidade e segurança.",
    imagem: "/images/SapatoVermelho.png" 
  },
  {
    titulo: "Você sabia que essas crianças sentem medo?",
    descricao: "Elas enfrentam o medo sozinhas, sem apoio emocional adequado. Você pode ajudar a confortá-las.",
    imagem: "/images/Monstro.png" 
  },
  {
    titulo: "Contribua para mudar vidas!",
    descricao: "Com sua doação ou apoio voluntário, você pode transformar a vida de muitas crianças.",
    imagem: "/images/Donate.png" 
  },
  {
    titulo: "Você sabia que essas crianças não têm a garantia de comer todos os dias?",
    descricao: "A fome é uma realidade constante para muitas dessas crianças. Contribua com alimentos ou apoie nossos projetos de auto sustentabilidade, como a criação de coelhos, para garantir que haja comida suficiente e nutritiva na mesa diariamente.",
    imagem: "/images/Fome.png" 
  }
];

function Carrossel() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Função que muda o slide automaticamente a cada 6 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((indiceAtual + 1) % frases.length);  // Muda para o próximo slide, e reinicia no primeiro ao chegar no final
    }, 6000);  // Intervalo de 6 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo quando o componente sai de cena, evitando bugs
  }, [indiceAtual]);  // Atualiza o efeito toda vez que o índice mudar

  return (
    <div style={estiloCarrossel}>
      <div style={container}>
        <div style={estiloTexto}>
          <h3 style={estiloTitulo}>{frases[indiceAtual].titulo}</h3>  
          <p>{frases[indiceAtual].descricao}</p> 
        </div>

        <div style={estiloImagemContainer}>
          <img src={frases[indiceAtual].imagem} alt={frases[indiceAtual].titulo} style={estiloImagem} />
        </div>
      </div>
    </div>
  );
}

export default Carrossel;

// Estilos para o Carrossel

const estiloCarrossel = {
  textAlign: 'center', 
  padding: '30px',  
  backgroundColor: '#f4f4f4', 
  borderRadius: '90px',  // Deixa os cantos do carrossel arredondados
  margin: '20px 0'  // Margem de 20px acima e abaixo
};

const estiloImagem = {
  width: '100%', 
  height: '200px',  
  objectFit: 'contain',  
  borderRadius: '10px'  // Serve para arendondar a imagem 
};

const container = {
  display: 'flex',  // Usa flexbox para organizar os elementos (texto e imagem)
  alignItems: 'center', 
  justifyContent: 'space-between',  // Espaço entre o texto e a imagem
  gap: '20px',  // Espaço de 20px entre o texto e a imagem
  padding: '20px',  
};

const estiloTitulo = {
  fontSize: '2rem',  // O título é um pouco maior
  fontWeight: 'bold',  // O título é negrito para chamar atenção
  marginBottom: '10px',  // Margem inferior para espaçar do texto abaixo
};

const estiloTexto = {
  flex: 1,  // O texto ocupa 1 unidade de flex, permitindo que se ajuste de acordo com o espaço disponível
  textAlign: 'left',  // Alinha o texto à esquerda
  fontSize: '1.5rem',  // Tamanho do texto normal
  fontWeight: 'normal',  // O texto não é negrito por padrão
  marginBottom: '10px',  // Margem inferior de 10px para espaçar do próximo elemento
};

const estiloImagemContainer = {
  flex: 1,  // A imagem ocupa o mesmo espaço do texto
  textAlign: 'right',  // Alinha a imagem à direita garantindo  que tenha a divisão de texto esquerda e imagem na direita
};