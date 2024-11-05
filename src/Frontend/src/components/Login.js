import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLoginSubmit = (e, userType) => {
    e.preventDefault();
    if (!login || !password) {
      setError('Por favor, preencha todos os campos');
      setSuccessMessage(''); // Limpa a mensagem de sucesso
    } else {
      setError('');
      if (userType === 'admin') {
        navigate('/admin-dashboard'); // Redireciona para a página do admin
      } else {
        setSuccessMessage('Login realizado com sucesso!');
      }
    }
  };

  return (
    <PageContainer>
      <Overlay />
      <LoginFormContainer>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        <Input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          error={error && !login}
        />
        <PasswordWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error && !password}
          />
          <ToggleButton type="button" onClick={togglePasswordVisibility}>
            {showPassword ? 'Esconder' : 'Mostrar'}
          </ToggleButton>
        </PasswordWrapper>
        <ButtonGroup>
          <Button onClick={(e) => handleLoginSubmit(e, 'user')}>Entrar como Usuário</Button>
          <Button onClick={(e) => handleLoginSubmit(e, 'admin')}>Entrar como Admin</Button>
        </ButtonGroup>
        <Link href="/alterar-senha">Esqueceu a senha?</Link>
        <Link href="#">Fazer cadastro</Link>
      </LoginFormContainer>
    </PageContainer>
  );
}

export default Login;

// Estilos com styled-components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo mais escuro */
  z-index: -1; /* Coloca o fundo atrás do conteúdo */
`;

const LoginFormContainer = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 30%;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: ${({ error }) => (error ? '2px solid red' : '1px solid #ccc')};
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
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
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
