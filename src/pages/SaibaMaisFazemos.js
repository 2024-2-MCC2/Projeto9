import React from 'react';
import Header from '../components/Header';
/*import Section from './Section';*/
/*import './styles.css';*/
import styled from "styled-components";
import Rodape from '../components/Rodape';

function SaibaMaisFazemos() {
  return (
    <div className="SaibaMaisFazemos">
      <Header />
      <main>
        <Section 
          title="Qual o nosso objetivo?" 
          text={`Queremos promover a autossustentabilidade, onde nosso lar possa gerar seus próprios recursos, minimizando a dependência de doações externas, e para tornar nosso projeto o mais autossustentável possível, e reduzir ao máximo os custos, criamos atividades produtivas que gerem renda, como uma criação de granja de galinhas e coelhos, criação de vacas para consumo próprio e comercialização, e oferta de empregos para jovens que deixam o lar aos 18 anos, além de voluntários para trabalhar em nossa instituição. Focamos na geração de recursos próprios, plantando nossos legumes, verduras e frutas para consumo próprio e comercialização, já que não recebemos recursos do Estado, por serem muitas crianças, jovens e adultos em situação de vulnerabilidade que o Estado precisa cuidar. Mas tudo só será possível com a sua ajuda, pois precisamos de recursos financeiros para iniciar nossa oficina e dar início a esse planejamento de autossustentabilidade.\n
          
          É comum as crianças chegarem em nosso abrigo cheios de traumas, normalmente são crianças que vivem nas ruas, e que estão subnutridas, pois não se alimentam, não tem agasalhos e muitas vezes não tem sapatos ou chinelos, elas chegam descalças em nosso abrigo. E para fornecer o básico de alimentação, roupas e sapatos, precisamos de sua ajuda.`}
          image="../images/Kids.png" // Caminho para a imagem na pasta public
        />
        <Section 
          title="Plantação" 
          text={`No PROTEGE acreditamos profundamente na importância de garantir uma alimentação saudável e sustentável para as crianças e adolescentes que acolhemos. Por isso, investimos em plantações de alimentos onde cultivamos uma variedade de vegetais e frutas frescas, adaptadas ao clima e ao solo local. Essas plantações são essenciais para assegurar refeições nutritivas, proporcionando alimentos frescos e de qualidade que contribuem diretamente para a saúde e bem-estar dos acolhidos. Além de garantir a alimentação, as plantações também desempenham um papel educativo crucial. Ensinamos aos jovens todas as etapas do processo agrícola, desde a preparação do solo até a colheita, passando por técnicas de cultivo sustentáveis que respeitam e preservam o meio ambiente. Dessa forma, eles aprendem não apenas a produzir seu próprio alimento, mas também a valorizar a importância da sustentabilidade e da conexão com a natureza. \n
            
        Com essa experiência prática, os jovens desenvolvem habilidades essenciais para o futuro como o trabalho em equipe, a responsabilidade e a resiliência. Eles se envolvem ativamente em todas as etapas, contribuindo diretamente para o autossustento do abrigo e ganhando um senso de realização e independência. Ao participarem desse processo, eles não apenas garantem a alimentação do presente, mas também constroem uma base sólida para o futuro, aprendendo a valorizar e cuidar da terra que os sustenta.`}
                image="../images/garden.png" // Caminho para a imagem correspondente
                />
        <Section 
          title="Coelhos Cui" 
          text={`A criação de coelhos da raça Cui é uma das principais atividades produtivas no PROTEGE. Eles fornecem uma fonte nutritiva de alimentos para as crianças e adolescentes. O manejo dos coelhos é realizado colaborativamente, ensinando aos jovens habilidades práticas, como o cuidado com os animais e o respeito ao ciclo de produção. Essa atividade não apenas apoia a sustentabilidade do abrigo, mas também oferece aos jovens uma oportunidade valiosa de aprendizado, preparando-os para o futuro com conhecimento prático e responsabilidade.\n

          A carne do Cui é especialmente nutritiva, por possuir alto teor de proteínas, é baixa em gordura e fácil de digerir. Também é rica em vitaminas e minerais essenciais, tornando-se um alimento fundamental para o desenvolvimento saudável das crianças e adolescentes do abrigo. \n
          Essa atividade não apenas garante o sustento imediato, mas também prepara os jovens para o futuro, oferecendo-lhes capacitação prática e técnica no manejo animal. Ao aprenderem sobre o processo, eles adquirem conhecimentos que podem ser aplicados em diferentes áreas profissionais, aumentando suas oportunidades de alcançar independência e qualidade de vida. Assim, a criação dos coelhos Cui vai além de apoiar a sustentabilidade do abrigo; ela se transforma em uma ferramenta de desenvolvimento e empoderamento para os jovens.`}
          image="../images/rabbit.png" // Caminho para a imagem correspondente
        />
      </main>
      <Rodape />
    </div>
  );
}

export default SaibaMaisFazemos;


function Section({ title, text, image }) {
    // Dividindo o texto em parágrafos usando a quebra de linha (\n)
    const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
  
    return (
      <section className="section">
        <div className="section-image">
          <img src={image} alt={title} />
        </div>
        <div className="section-content">
          <h2>{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    );
  }

