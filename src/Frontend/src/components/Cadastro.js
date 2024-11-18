import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../api'; 

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCadastroSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !email || !senha || !confirmarSenha) {
      setError('Por favor, preencha todos os campos.');
    } else if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
    } else if (senha !== confirmarSenha) {
      setError('As senhas não coincidem.');
    } else {
      setError('');
      try {
        const response = await api.post('/users/register', { nome, email, senha });
        console.log('Cadastro realizado com sucesso:', response.data);
        setSuccessMessage('Cadastro realizado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        setConfirmarSenha('');
      } catch (err) {
        console.error('Erro no cadastro:', err.response?.data || err.message);
        setError('Erro ao realizar o cadastro. Tente novamente.');
      }
    }
  };

  return (
    <CadastroContainer>
      <h2>Cadastro</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
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
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
      />
      <Button onClick={handleCadastroSubmit}>Cadastrar</Button>
    </CadastroContainer>
  );
}

export default Cadastro;

const CadastroContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
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
