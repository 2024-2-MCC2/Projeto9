import React, { useState } from 'react';
import styled from 'styled-components';

function AlterarCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleAlterarCadastro = (e) => {
    e.preventDefault();
    if (novaSenha && novaSenha !== confirmarSenha) {
      setMessage('As senhas não coincidem.');
      return;
    }

    if (senhaAtual) {
      setMessage('Cadastro atualizado com sucesso!');
      // Adicione aqui a lógica de atualização do cadastro no backend
      // Incluindo verificação da senha atual e atualização dos dados (nome, e-mail, senha)
    } else {
      setMessage('Por favor, insira sua senha atual para confirmar.');
    }
  };

  return (
    <PageContainer>
      <Overlay />
      <FormContainer>
        <h2>Alterar Cadastro</h2>
        <form onSubmit={handleAlterarCadastro}>
          <Label>Nome</Label>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha Atual</Label>
          <Input
            type="password"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
            required
          />
          <Label>Nova Senha</Label>
          <Input
            type="password"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <Label>Confirmar Nova Senha</Label>
          <Input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
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
  min-height: 70vh;
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

const Label = styled.label`
  margin: 10px 0 5px;
  font-size: 1rem;
  color: #333;
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
