import React from 'react';
import styled from 'styled-components';


function PoliticaPrivacidade() {
    return (
      <Container>
        <Content>
          <TextSection>
            <Title>1. Política de Privacidade e Cookies</Title>
            <Paragraph>
              Nosso compromisso estabelece transparência com os usuários sobre como suas informações serão tratadas e protegidas.
            </Paragraph>
            <Paragraph>Última atualização: 05 de novembro de 2024</Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>1.1 Conceitos-Chave</Subtitle>
            <Paragraph><strong>Titular de Dados:</strong> Pessoa cujos dados são tratados.</Paragraph>
            <Paragraph><strong>Tratamento de Dados:</strong> Operações com dados, como coleta, armazenamento, eliminação.</Paragraph>
            <Paragraph><strong>Dados Pessoais/Sensíveis:</strong> Informações que identificam uma pessoa ou revelam aspectos sensíveis como saúde, raça, religião.</Paragraph>
            <Paragraph><strong>Cookies:</strong> Arquivos que armazenam informações do usuário no navegador.</Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>2. Princípios</Subtitle>
            <Paragraph>
              A política baseia-se nos princípios de Confidencialidade, Integridade e Disponibilidade, que garantem que apenas pessoas autorizadas têm acesso aos dados, que os dados estejam corretos e que sejam acessíveis quando necessário.
            </Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>3. Papéis e Responsabilidades</Subtitle>
            <Paragraph>
              A Organização PROTEGE age como Controladora quando coleta dados para seus próprios fins, e como Operadora quando age em nome de terceiros. Como controladora, é responsável por definir os fins e meios do tratamento dos dados.
            </Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>4. Coleta de Dados</Subtitle>
            <Paragraph><strong>Equipe Interna:</strong> Coleta de dados por telefone, e-mail, etc.</Paragraph>
            <Paragraph><strong>Plataformas Digitais:</strong> Dados fornecidos pelo usuário em sites e aplicativos.</Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>5. Base Legal para Tratamento</Subtitle>
            <Paragraph>
              O tratamento de dados segue as bases da LGPD, especialmente quando há consentimento ou interesse legítimo.
            </Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>6. Cookies</Subtitle>
            <Paragraph>
              Cookies ajudam a personalizar a experiência do usuário e incluem autenticação, segurança, pesquisa e publicidade. O usuário pode desativá-los, mas algumas funcionalidades podem ser afetadas.
            </Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>7. Uso dos Dados</Subtitle>
            <Paragraph>
              Os dados são usados para fornecer e melhorar a plataforma, segurança e personalizar publicidade. Os dados pessoais ajudam a otimizar a experiência e a proteger contra fraudes.
            </Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>8. Compartilhamento de Dados</Subtitle>
            <Paragraph>
              A Organização PROTEGE só compartilha dados em casos necessários, como cumprimento de obrigações legais, proteção de direitos ou por solicitação do usuário.
            </Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>9. Responsabilidades do Usuário</Subtitle>
            <Paragraph>
              Os usuários são responsáveis pelo uso que fazem dos sistemas e pelas informações que enviam. A Organização PROTEGE não se responsabiliza por atos decorrentes de mau uso.
            </Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>10. Direitos do Usuário</Subtitle>
            <Paragraph><strong>Solicitar acesso e cópia dos dados.</strong></Paragraph>
            <Paragraph><strong>Solicitar retificação ou exclusão dos dados.</strong></Paragraph>
            <Paragraph><strong>Contestar o tratamento dos dados.</strong></Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>11. Contato</Subtitle>
            <Paragraph>
              Para dúvidas ou reclamações, o DPO (Encarregado de Proteção de Dados) pode ser contatado pelo e-mail encarregado-de-dados@protege.org.
            </Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>12. Reclamações e Segurança</Subtitle>
            <Paragraph>
              O usuário pode fazer reclamações sobre o tratamento de dados. A segurança dos dados é uma prioridade, com medidas preventivas adotadas contra acesso não autorizado.
            </Paragraph>
          </TextSection>
  
          <TextSection>
            <Subtitle>13. Propriedade Intelectual</Subtitle>
            <Paragraph>
              Todo conteúdo da plataforma é propriedade da Organização PROTEGE, e seu uso pelos usuários deve respeitar direitos autorais.
            </Paragraph>
          </TextSection>
        </Content>
      </Container>
    );
  }
  
  export default PoliticaPrivacidade;



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
`;

const Content = styled.div`
  max-width: 800px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextSection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  color: #444;
  margin-bottom: 8px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 10px;
`;