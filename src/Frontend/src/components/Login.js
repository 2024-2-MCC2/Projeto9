// src/pages/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!login || !password) {
      setError('Por favor, preencha todos os campos');
      setSuccessMessage('');
    } else {
      setError('');
      navigate('/'); // Redireciona para a página principal após o login
    }
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (!newPassword) {
      setError('Por favor, insira uma nova senha');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage('Senha atualizada com sucesso!');
      setNewPassword('');
      // Aqui você adicionará a integração com o backend para atualizar a senha no banco de dados
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <Input
        type="text"
        placeholder="Nickname"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLoginSubmit}>Entrar</Button>
      <Link onClick={() => navigate('/cadastro')}>Fazer cadastro</Link>

      <Separator />
      
      <h3>Alterar Senha</h3>
      <Input
        type="password"
        placeholder="Nova Senha"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <Button onClick={handlePasswordUpdate}>Atualizar Senha</Button>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
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

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  display: block;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;
