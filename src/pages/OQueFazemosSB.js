import React from 'react';
import styled from 'styled-components';

function OQueFazemos() {
  return (
    <Container>
      <Header>
        <Title>O QUE FAZEMOS</Title>
      </Header>

      <SectionsContainer>
        <ContentSection>
          <ImageSection>
            <img src="/images/Kids.png" alt="Globo com as crianças" />
          </ImageSection>
          <TextSection>
            <h3>Qual o nosso objetivo?</h3>
            <p>
              Queremos promover a autossustentabilidade, onde nosso lar possa gerar seus próprios recursos, minimizando a dependência de doações externas, e para tornar nosso projeto o mais autossustentável possível, e reduzir ao máximo os custos, criamos atividades produtivas que gerem renda, como uma criação de granja de galinhas e coelhos, criação de vacas para consumo próprio e comercialização, e oferta de empregos para jovens que deixam o lar aos 18 anos, além de voluntários para trabalhar em nossa instituição. Focamos na geração de recursos próprios, plantando nossos legumes, verduras e frutas para consumo próprio e comercialização, já que não recebemos recursos do Estado, por serem muitas crianças, jovens e adultos em situação de vulnerabilidade que o Estado precisa cuidar. Mas tudo só será possível com a sua ajuda, pois precisamos de recursos financeiros para iniciar nossa oficina e dar início a esse planejamento de autossustentabilidade.
            </p>
            <p>
              É comum as crianças chegarem em nosso abrigo cheios de traumas, normalmente são crianças que vivem nas ruas, e que estão subnutridas, pois não se alimentam, não tem agasalhos e muitas vezes não tem sapatos ou chinelos, elas chegam descalças em nosso abrigo. E para fornecer o básico de alimentação, roupas e sapatos, precisamos de sua ajuda.
            </p>
          </TextSection>
        </ContentSection>

        <ContentSection>
          <ImageSection>
            <img src="/images/garden.png" alt="Plantação" />
          </ImageSection>
          <TextSection>
            <h3>Plantação</h3>
            <p>
              É comum as crianças chegarem em nosso abrigo cheios de traumas, normalmente são crianças que vivem nas ruas, e que estão subnutridas, pois não se alimentam, não tem agasalhos e muitas vezes não tem sapatos ou chinelos, elas chegam descalças em nosso abrigo. E para fornecer o básico de alimentação, roupas e sapatos, precisamos de sua ajuda.
            </p>
            <p>
              Além de garantir a alimentação, as plantações também desempenham um papel educativo crucial. Ensinamos aos jovens todas as etapas do processo agrícola, desde a preparação do solo até a colheita, passando por técnicas de cultivo sustentáveis que respeitam e preservam o meio ambiente. Dessa forma, eles aprendem não apenas a produzir seu próprio alimento, mas também a valorizar a importância da sustentabilidade e da conexão com a natureza.
            </p>
            <p>
              Com essa experiência prática, os jovens desenvolvem habilidades essenciais para o futuro como o trabalho em equipe, a responsabilidade e a resiliência. Eles se envolvem ativamente em todas as etapas, contribuindo diretamente para o autossustento do abrigo e ganhando um senso de realização e independência. Ao participarem desse processo, eles não apenas garantem a alimentação do presente, mas também constroem uma base sólida para o futuro, aprendendo a valorizar e cuidar da terra que os sustenta.
            </p>
          </TextSection>
        </ContentSection>

        <ContentSection>
          <ImageSection>
            <img src="/images/rabbit.png" alt="Coelho Cui" />
          </ImageSection>
          <TextSection>
            <h3>Coelho Cui</h3>
            <p>
              A criação de coelhos da raça Cui é uma das principais atividades produtivas do PROTEGE, sendo uma fonte crucial para garantir a sustentabilidade e a autossuficiência do abrigo. Os coelhos Cui são criados tanto para proporcionar uma fonte nutritiva de proteína nas refeições diárias das crianças e adolescentes quanto para gerar renda extra com a venda externa. Essa abordagem assegura que o abrigo mantenha suas operações de forma autossustentável, mesmo diante de desafios financeiros.
            </p>
            <p>
              O manejo dos coelhos Cui é estruturado para envolver os jovens do abrigo em todas as etapas do processo produtivo, incluindo alimentação, cuidados diários e limpeza dos espaços. Ao participar ativamente, eles desenvolvem habilidades práticas como o cuidado responsável com os animais e o entendimento do ciclo produtivo sustentável. Além disso, essa experiência ensina aos jovens a importância da responsabilidade, ao perceberem como seus esforços impactam diretamente a qualidade dos alimentos e a geração de recursos financeiros para o abrigo.
            </p>
            <p>
              A carne do Cui é especialmente nutritiva, por possuir alto teor de proteínas, é baixa em gordura e fácil de digerir. Também é rica em vitaminas e minerais essenciais, tornando-se um alimento fundamental para o desenvolvimento saudável das crianças e adolescentes do abrigo. A cunicultura do Cui é uma prática bem estabelecida na região de Cochabamba, conhecida por sua gastronomia diversificada, e é ecologicamente sustentável, o que fortalece ainda mais sua viabilidade e impacto positivo no abrigo.
            </p>
            <p>
              Essa atividade não apenas garante o sustento imediato, mas também prepara os jovens para o futuro, oferecendo-lhes capacitação prática e técnica no manejo animal. Ao aprenderem sobre o processo, eles adquirem conhecimentos que podem ser aplicados em diferentes áreas profissionais, aumentando suas oportunidades de alcançar independência e qualidade de vida. Assim, a criação dos coelhos Cui vai além de apoiar a sustentabilidade do abrigo, transformando-se em uma ferramenta de desenvolvimento e empoderamento para os jovens.
            </p>
          </TextSection>
        </ContentSection>
      </SectionsContainer>
    </Container>
  );
}

export default OQueFazemos;

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 12000px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: none; 
  padding: 0px;
  border-radius: 10px 10px 10px 10px;
`;

const Title = styled.h1`
  font-size: 89px;
  color: #b36732; 
  text-transform: uppercase;
  margin-top: 200px; 
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  width: 100%;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
`;

const ImageSection = styled.div`
  flex: 30;
  text-align: center;

  img {
    width: 300px; /* Largura fixa */
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 150px;
  }
`;

const TextSection = styled.div`
  flex: 100;
  margin-left: 50px;
  background-color: #f5a25d; 
  padding: 30px;
  border-radius: 20px;

  h3 {
    font-size: 2.2rem;
    color: #000; 
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #000000; 
    margin-bottom: 15px;
    font-family: Roboto, sans-serif;
  }
`;