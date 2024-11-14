

import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import paypal from '../Images/PayPal.png';
import visa from '../Images/Mastercard.png';
import mastercard from '../Images/Visa.png';
import elo from '../Images/Elo.png';

function Rodape() {
  return (
    <FooterContainer>
      <FooterLinks>
        <LinksSection>
          <h4>Institucional</h4>
          <ul>
            <li>
              <a href="/principais-duvidas">Sobre a Organização PROTEGE - "Manos que ayudan, transforman corazones"</a>
            </li>
            <li><a href="/principais-duvidas">Principais dúvidas</a></li>
            <li><a href="/para-onde">Para onde vão as doações arrecadadas?</a></li>
            <li><a href="/protecao-de-dados">Proteção de Dados</a></li>
            <li><a href="/politica-privacidade">Política de Privacidade</a></li>
            <li><a href="/direito-autoral">2024 | Todos os direitos reservados. </a></li>

          </ul>
        </LinksSection>

        <LinksSection>
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Redes Sociais</a></li>
          </ul>
        </LinksSection>

        <LinksSection>
          <h4>Fale Conosco</h4>
          <ul>
            <li><a href="#">Tire suas dúvidas</a></li>
          </ul>
          <h4>Siga-nos e nos acompanhe</h4>
          <SocialMedia>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </SocialMedia>
        </LinksSection>
      </FooterLinks>

      <Metas>
        <h4>Metas Alinhadas aos Objetivos de Desenvolvimento Sustentável da ONU</h4>
        <p>
          Trabalhamos para cumprir as Metas de Desenvolvimento Sustentável, promovendo ações que impactam positivamente a sociedade.
        </p>
        <IconsContainer>
          <Icon>
            <img src="/images/ODS1.png" alt="Objetivo de Desenvolvimento Sustentável  1" />  
            <p>Erradicação da Pobreza</p>
          </Icon>
          <Icon>
            <img src="/images/ODS2.png" alt="Objetivo de Desenvolvimento Sustentável  2" />  
            <p>Fome Zero</p>
          </Icon>
          <Icon>
            <img src="/images/ODS3.png" alt="Objetivo de Desenvolvimento Sustentável  3" />  
            <p>Saúde e Bem-Estar</p>
          </Icon>
          <Icon>
            <img src="/images/ODS4.png" alt="Objetivo de Desenvolvimento Sustentável  4" />  
            <p>Educação de Qualidade</p>
          </Icon>
        </IconsContainer>
      </Metas>

      <FooterBottom>
        <OndeDoar>
          <img src={paypal} alt="PayPal" />
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={elo} alt="Elo" />
        </OndeDoar>
        
        <Agradecimentos>
          <h2>Agradecimentos</h2>
          <p>
            Agradecemos a todo o apoio durante a execução do Projeto, e a você que de alguma forma está contribuindo
            para tornar o sonho das nossas crianças e jovens em realidade.<br />
            Juntos somos mais fortes!
          </p>
          <p>
            A educação não tem preço. Sua falta tem custo.<br />
            - Antônio Carlos Lacerda
          </p>
        </Agradecimentos>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Rodape;

// Estilos com Styled Components
const FooterContainer = styled.footer`
  padding: 30px 60px;
  background-color: #e88e4e;
  color: #333;
  font-family: Arial, sans-serif;
  border-radius: 20px; /* Bordas arredondadas */
  max-width: 1200px; /* Largura máxima */
  margin: 20px auto; /* Centraliza e dá uma margem ao footer */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LinksSection = styled.div`
  flex: 1;
  margin-right: 20px;

  h4 {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 5px;
    }

    a {
      text-decoration: none;
      color: #333;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-top: 10px;

  a {
    margin-right: 10px; 
    color: #000000; 

    svg {
      width: 24px; 
      height: 24px; 
    }
  }
`;

const Metas = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #000000;

  h4 {
    margin-bottom: 10px;
  }

  p {
    margin: 10px 0;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
  margin-top: 20px;
`;

const Icon = styled.div`
  margin: 10px;
  text-align: center;

  img {
    width: 50px; 
    height: 50px;
    margin-bottom: 5px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  p {
    margin: 0;
  }
`;

const OndeDoar = styled.div`
  display: flex;

  img {
    margin-right: 10px;
    width: 40px;
  }  
`;

const Agradecimentos = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  color: #000000;
  overflow-wrap: break-word;  

  p {
    margin: 20px 0; 
  }
  `;