import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Instância do Axios

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      setSuccessMessage('');
    } else {
      setError('');
      try {
        const response = await api.post('/users/login', {
          email,
          senha: password,
        });
        localStorage.setItem('token', response.data.token); // Salva o token no localStorage
        setSuccessMessage('Login bem-sucedido!');
        navigate('/'); // Redireciona para a página principal
      } catch (err) {
        setError('Credenciais inválidas. Tente novamente.');
        console.error('Erro no login:', err.response?.data || err.message);
      }
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLoginSubmit}>Entrar</Button>
      <Link onClick={() => navigate('/cadastro')}>Fazer cadastro</Link>
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
