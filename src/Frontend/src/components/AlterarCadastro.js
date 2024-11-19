import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../api'; // Instância do Axios

function AlterarCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [chaveSecreta, setChaveSecreta] = useState(''); // Adicionando o campo de chave secreta
  const [message, setMessage] = useState('');

  const handleAlterarCadastro = async (e) => {
    e.preventDefault();
    if (novaSenha && novaSenha !== confirmarSenha) {
      setMessage('As senhas não coincidem.');
      return;
    }

    try {
      const response = await api.put('/users/update/' + 1, { // Coloque o ID aqui (ou use um valor dinâmico)
        nome,
        email,
        senhaAtual,
        novaSenha,
        chave_secreta: chaveSecreta, // Envia a chave secreta
      });
      console.log('Cadastro atualizado com sucesso:', response.data);
      setMessage('Cadastro atualizado com sucesso!');
    } catch (err) {
      console.error('Erro ao atualizar cadastro:', err.response?.data || err.message);
      setMessage('Erro ao atualizar cadastro. Tente novamente.');
    }
  };

  return (
    <PageContainer>
      <Overlay />
      <FormContainer>
        <h2>Alterar Cadastro</h2>
        <form onSubmit={handleAlterarCadastro}>
          <Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha Atual"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Nova Senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirmar Nova Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Chave Secreta"
            value={chaveSecreta}
            onChange={(e) => setChaveSecreta(e.target.value)}
          />
          <Button type="submit">Alterar Cadastro</Button>
        </form>
        {message && <Message>{message}</Message>}
      </FormContainer>
    </PageContainer>
  );
}

export default AlterarCadastro;

// Estilos com styled-components

const PageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Preenche toda a altura da tela */
  padding: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -1;
`;

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #b36732;
  border: none;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #d49058;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
`;

const Message = styled.p`
  margin-top: 15px;
  color: green;
  font-weight: bold;
`;
