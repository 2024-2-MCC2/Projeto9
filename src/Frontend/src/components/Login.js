import React, { useState } from 'react';
import styled from 'styled-components';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setMessage('Login realizado com sucesso');
      // no futuro colocar a linkagem com o MySql aqui (se der) vamos colocar a logica da programação aqui ou criar um js e importar aqui. dps mandar o setMessage...
    } else {
      setMessage('Por favor, insira o nome de usuário e a senha');
    }
  };

  return (
    <Container>
      <Overlay />
      <FormContainer>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <Label>Usuário</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Label>Senha</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Entrar</Button>
          {message && <Message>{message}</Message>}
        </form>
      </FormContainer>
    </Container>
  );
}

export default Login;

// local do css e styled 

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: url('/images/BackgroundImage.jpg') center/cover no-repeat; // coloca o background 
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); //deixa escuro o fundo 
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