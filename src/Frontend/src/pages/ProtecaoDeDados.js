import React from 'react';
import styled from 'styled-components';

function ProtecaoDeDados() {
  return (
    <PageContainer>
      <h1>Política de Proteção de Dados - PROTEGE</h1>
      <p><strong>Última atualização: 05 de novembro de 2024</strong></p>
      
      <Section>
        <h2>1. Introdução</h2>
        <p>
          A PROTEGE, como Organização sem fins lucrativos, tem um compromisso sério com a proteção da privacidade e dos dados pessoais de seus usuários, colaboradores, voluntários e parceiros.
          Esta Política de Proteção de Dados descreve como coletamos, utilizamos, armazenamos e protegemos as informações pessoais que recebemos e processamos.
        </p>
      </Section>

      <Section>
        <h2>2. Dados Coletados</h2>
        <p>
          A PROTEGE coleta os seguintes tipos de dados pessoais:
        </p>
        <ul>
          <li><strong>Dados de identificação pessoal:</strong> Nome, e-mail, telefone, endereço.</li>
          <li><strong>Dados de doação:</strong> Dados bancários, informações de pagamento.</li>
          <li><strong>Dados de voluntariado:</strong> Experiência profissional, disponibilidade para trabalho voluntário.</li>
          <li><strong>Dados de navegação:</strong> Endereço IP, dados de navegação em nosso site (como cookies).</li>
        </ul>
      </Section>

      <Section>
        <h2>3. Como Usamos Seus Dados</h2>
        <p>
          Utilizamos os dados pessoais coletados para as seguintes finalidades:
        </p>
        <ul>
          <li>Processamento de doações e emissão de recibos.</li>
          <li>Gerenciamento de atividades de voluntariado.</li>
          <li>Comunicação de eventos, campanhas de arrecadação e atualizações sobre a organização.</li>
          <li>Análise de dados para melhorar nossos serviços e experiências.</li>
          <li>Cumprir com obrigações legais e regulatórias.</li>
        </ul>
      </Section>

      <Section>
        <h2>4. Como Protegemos Seus Dados</h2>
        <p>
          A PROTEGE adota medidas de segurança adequadas para proteger seus dados pessoais, incluindo:
        </p>
        <ul>
          <li>Uso de criptografia para transações financeiras.</li>
          <li>Controle de acesso restrito aos dados pessoais.</li>
          <li>Treinamento contínuo da equipe para garantir que as melhores práticas de segurança sejam seguidas.</li>
          <li>Armazenamento de dados em servidores seguros, com backups regulares.</li>
        </ul>
      </Section>

      <Section>
        <h2>5. Compartilhamento de Dados</h2>
        <p>
          A PROTEGE não compartilha seus dados pessoais com terceiros, exceto nas seguintes situações:
        </p>
        <ul>
          <li>Com prestadores de serviços contratados para processar transações financeiras ou gerenciar a plataforma de doações.</li>
          <li>Quando exigido por lei ou por ordem judicial.</li>
          <li>Com parceiros de projetos, desde que os dados sejam anonimizados ou se o titular do dado tenha consentido com o compartilhamento.</li>
        </ul>
      </Section>

      <Section>
        <h2>6. Seus Direitos</h2>
        <p>
          Como titular de dados, você tem os seguintes direitos:
        </p>
        <ul>
          <li><strong>Direito de Acesso:</strong> Você pode solicitar uma cópia de seus dados pessoais armazenados conosco.</li>
          <li><strong>Direito de Retificação:</strong> Você pode corrigir dados pessoais que estejam incorretos ou desatualizados.</li>
          <li><strong>Direito de Exclusão:</strong> Você pode solicitar a exclusão de seus dados pessoais, desde que não haja obrigações legais ou contratuais que nos impeçam de fazer isso.</li>
          <li><strong>Direito de Restrição ao Processamento:</strong> Você pode solicitar que limitemos o uso de seus dados pessoais em determinadas circunstâncias.</li>
        </ul>
      </Section>

      <Section>
        <h2>7. Cookies</h2>
        <p>
          Utilizamos cookies para melhorar a experiência de navegação em nosso site. Cookies são pequenos arquivos de texto armazenados no seu navegador que permitem personalizar a sua experiência e analisar o uso do nosso site.
          Você pode optar por desativar os cookies nas configurações do seu navegador, mas isso pode impactar a funcionalidade do site.
        </p>
      </Section>

      <Section>
        <h2>8. Alterações nesta Política</h2>
        <p>
          A PROTEGE pode alterar esta Política de Proteção de Dados de tempos em tempos. Quaisquer modificações serão publicadas nesta página com a respectiva data de atualização.
        </p>
      </Section>

      <Section>
        <h2>9. Como Entrar em Contato Conosco</h2>
        <p>
          Se você tiver alguma dúvida sobre esta política ou sobre o uso de seus dados pessoais, entre em contato conosco através do e-mail: <strong>contato@protege.org.br</strong>.
        </p>
      </Section>
    </PageContainer>
  );
}

export default ProtecaoDeDados;

const PageContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Section = styled.section`
  margin-bottom: 20px;
  h2 {
    margin-top: 20px;
    font-size: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

