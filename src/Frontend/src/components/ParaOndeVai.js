import React from "react";
import styled from "styled-components";

function ParaOndeVai() {
  return (
    <Container>
      <Content>
        <TextSection>
          <h2>Para Onde Vão as Doações?</h2>
          <p>
            A sua generosidade faz toda a diferença e é fundamental para a
            realização dos nossos projetos. As doações recebidas pela
            Organização PROTEGE são aplicadas de forma responsável e
            transparente, sempre com o objetivo de gerar o maior impacto positivo
            nas vidas das crianças e jovens que atendemos.
          </p>

          <h3>Distribuição das Doações</h3>
          <p>As contribuições financeiras são utilizadas para:</p>

          <ul>
            <li>
              <strong>Educação e Capacitação:</strong> Investimos em materiais
              didáticos, cursos de capacitação e programas educacionais para
              crianças e jovens em situação de vulnerabilidade social.
            </li>
            <li>
              <strong>Assistência Básica:</strong> As doações ajudam a fornecer
              alimentos, roupas, produtos de higiene e outros itens essenciais
              para garantir o bem-estar dos nossos assistidos. Também oferecemos
              apoio psicológico, atendimento social e orientação para as famílias
              que enfrentam dificuldades.
            </li>
            <li>
              <strong>Infraestrutura e Manutenção:</strong> Parte das doações é
              utilizada para manter as instalações da organização, garantindo que
              nossos espaços sejam seguros e adequados para as atividades que
              realizamos. Melhorias em infraestrutura são feitas com foco no
              conforto e no desenvolvimento das nossas ações.
            </li>
            <li>
              <strong>Projetos e Parcerias:</strong> Suas doações também ajudam a
              financiar novos projetos sociais, campanhas de conscientização e
              ações comunitárias que visam promover a inclusão, a educação e a
              igualdade de oportunidades. Estamos constantemente buscando
              parcerias e novas iniciativas que expandam o impacto das nossas
              ações, e sua contribuição é essencial para viabilizar esses
              projetos.
            </li>
          </ul>

          <h3>Transparência e Prestação de Contas</h3>
          <p>
            Nós da Organização PROTEGE prezamos pela transparência em todas as
            nossas ações. Periodicamente, publicamos relatórios financeiros e de
            impacto, detalhando a destinação das doações e os resultados obtidos
            com cada recurso recebido.
          </p>
          <p>
            Nosso compromisso é com o uso responsável e eficiente de cada
            centavo, garantindo que cada doação tenha um impacto real e positivo
            na vida das pessoas que atendemos.
          </p>

          <h3>Agradecimento</h3>
          <p>
            Agradecemos imensamente pela confiança depositada em nosso trabalho.
            Cada doação, grande ou pequena, é um passo a mais para construirmos
            um futuro mais justo e igualitário para as crianças e jovens que mais
            precisam.
          </p>
          <p>
            Juntos, podemos transformar realidades! 🧒🧒🏻🧒🏼🧒🏽🧒🏾🧒🏿💜
          </p>
        </TextSection>
      </Content>

      <Footer>
        <p>&copy; 2024 | Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
}

export default ParaOndeVai;

// Container centralizado
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  min-height: 100vh; /* Garantir que o container ocupe toda a altura da tela */
  padding: 20px;
  border-radius: 10px;
`;

// Content que tem a seção de texto
const Content = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os itens dentro do Content */
  flex-direction: column; /* Disposição vertical para telas menores */
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
  max-width: 1200px;
  width: 100%; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Centraliza os itens em telas menores */
  }

  flex-grow: 1; /* Faz o conteúdo crescer para ocupar o espaço disponível */
`;

// Seção de texto com bordas e padding
const TextSection = styled.div`
  text-align: left;
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 2px solid #ddd;
  overflow-y: auto;
  width: 80%; /* Ocupa 90% da largura disponível */

  margin: 0 auto; /* Centraliza a seção de texto */

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  ul {
    padding-left: 20px;
    list-style-type: disc;
  }

  ul li {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    p {
      font-size: 0.9rem;
    }
  }
`;

// Footer no final
const Footer = styled.footer`
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
  color: #777;
  width: 100%; /* Faz o footer ocupar toda a largura */
`;

