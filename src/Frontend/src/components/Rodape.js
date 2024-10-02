

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
              <a href="#">Sobre a Organização PROTEGE - "Manos que ayudan, transforman corazones"</a>
            </li>
            <li><a href="#">Principais dúvidas</a></li>
            <li><a href="#">Para onde vão as doações arrecadadas?</a></li>
            <li><a href="#">Onde posso encontrar o comprovante de recebimento que consta a doação feita?</a></li>
            <li><a href="#">Proteção de Dados</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">2024 | Todos os direitos reservados. </a></li>
          </ul>
        </LinksSection>
{/* a section de links terá como intuito linkar a diversas paginas ou blocos que expliquem o que está escrito no "link" */}
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
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaTwitter /></a>
          </SocialMedia>
        </LinksSection>
      </FooterLinks>

      <LinksSection>
        <h4>Início</h4>
        <ul>
          <li><a href="#">Voltar para o Início</a></li>
        </ul>
      </LinksSection>

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


const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #e88e4e;
  color: #333;
  font-family: Arial, sans-serif;
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

const InicioContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #333;

  a {
    text-decoration: none;
    color: #007BFF; 
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
