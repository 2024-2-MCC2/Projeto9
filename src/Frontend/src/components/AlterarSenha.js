import React, { useState } from 'react';
import styled from 'styled-components';

function AlterarSenha() {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleAlterarSenha = (e) => {
    e.preventDefault();
    if (novaSenha === confirmarSenha) {
      setMessage('Senha alterada com sucesso!');
    } else {
      setMessage('As senhas não coincidem.');
    }
  };

  return (
    <Container>
      <Overlay />
      <FormContainer>
        <h2>Alterar Senha</h2>
        <form onSubmit={handleAlterarSenha}>
          <Label>Nova Senha</Label>
          <Input
            type="password"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <Button type="submit">Alterar Senha</Button>
        </form>
        {message && <Message>{message}</Message>}
      </FormContainer>
    </Container>
  );
}

export default AlterarSenha;

// Local do css e styled.

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: url('/images/BackgroundImage.jpg') center/cover no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); //deixa o fundo escuro 
  z-index: 1;
`;

const FormContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
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
  padding: 10px;
  font-size: 1rem;
  background-color: #b36732;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #a25626;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  color: green;
  font-weight: bold;
`;