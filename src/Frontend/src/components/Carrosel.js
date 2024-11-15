import React, { useState, useEffect } from 'react';

// Aqui embaixo vamos colocar os voce sabia e a imagem correspondente
const frases = [
  {
    titulo: "Você sabia que essas crianças não têm sapatos para irem à escola?",
    descricao: "Muitas vezes, elas caminham longas distâncias descalças ou com sapatos desgastados. Você pode ajudar doando calçados ou contribuindo para campanhas que garantem a essas crianças o básico para poderem ir à escola com dignidade e segurança.",
    imagem: "https://i.postimg.cc/SsM32LhR/Sapato.png" 
  },
  {
    titulo: "Você sabia que essas crianças sentem medo?",
    descricao: "Elas enfrentam o medo sozinhas, sem apoio emocional adequado. Você pode ajudar a confortá-las.",
    imagem: "https://i.postimg.cc/j2Gj64W1/monstro-roso.png" 
  },
  {
    titulo: "Contribua para mudar vidas!",
    descricao: "Com sua doação ou apoio voluntário, você pode transformar a vida de muitas crianças.",
    imagem: "https://i.postimg.cc/tgxj0ng3/cora-o.png" 
  },
  {
    titulo: "Você sabia que essas crianças não têm a garantia de comer todos os dias?",
    descricao: "A fome é uma realidade constante para muitas dessas crianças. Contribua com alimentos ou apoie nossos projetos de auto sustentabilidade, como a criação de coelhos, para garantir que haja comida suficiente e nutritiva na mesa diariamente.",
    imagem: "https://i.postimg.cc/t4586dMC/Hamburger.png" 
  }
];

function Carrossel() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((indiceAtual + 1) % frases.length);
    }, 6000);

    return () => clearInterval(intervalo);
  }, [indiceAtual]);

  return (
    <div style={estiloCarrossel}>
      <div style={container}>
        <div style={estiloTexto}>
          <h3 style={estiloTitulo}>{frases[indiceAtual].titulo}</h3>  
          <p style={estiloDescricao}>
            {frases[indiceAtual].descricao.split('. ').map((sentence, index) => (
              <span key={index}>
                {sentence.trim()}
                {index < frases[indiceAtual].descricao.split('. ').length - 1 ? '.' : ''} {/* Adiciona ponto final apenas entre as frases */}
                <br /><br />
              </span>
            ))}
          </p>
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
  borderRadius: '10px',
  margin: '20px 0',
  backgroundColor: 'white',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.35)',
  fontFamily: 'Roboto, sans-serif',
};

const estiloImagem = {
  width: '100%',
  height: '200px',
  objectFit: 'contain',
  borderRadius: '10px'
};

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '20px',
  padding: '20px',
};

const estiloTitulo = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  fontFamily: 'Roboto, sans-serif',
};

const estiloTexto = {
  flex: 1,
  textAlign: 'left',
  fontSize: '1.5rem',
  fontWeight: 'normal',
  marginBottom: '10px',
  lineHeight: '1.3',
  fontFamily: 'Roboto, sans-serif',
};

const estiloDescricao = {
  fontFamily: 'Roboto, sans-serif',
  lineHeight: '1.6',
};
  
const estiloImagemContainer = {
  flex: 1,
  textAlign: 'right',
};
