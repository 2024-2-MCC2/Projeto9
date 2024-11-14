import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleLogoClick() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <HeaderContainer>
      {/* Logo e botão de menu à esquerda */}
      <LogoSection>
        <Logo src="/images/LogoPROTEGE.png" onClick={handleLogoClick} />
        <MenuButton onClick={handleLogoClick}>Login</MenuButton>
      </LogoSection>

      {/* Dropdown para dispositivos móveis */}
      {isMenuOpen && (
        <DropdownMenu>
          <DropdownItem as={Link} to="/login">Login</DropdownItem>
          <DropdownItem as={Link} to="/alterar-cadastro">Alterar Cadastro</DropdownItem>
        </DropdownMenu>
      )}

      {/* Seção central com imagem e botões */}
      <CenterSection>
        <NavLinks>
          <NavLink as={Link} to="/donation">Doa Aqui</NavLink>
          <NavLink as={Link} to="/voluntariado">Voluntariado</NavLink>
          <Link to="/">
            <ImagemLugar src="/images/SloganPROTEGE.png" alt="Imagem Central" />
          </Link>
          <NavLink as={Link} to="/localizacao">Calendário</NavLink>
          <NavLink as={Link} to="/Familia">Nossa Família</NavLink>
        </NavLinks>
      </CenterSection>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  background-color: #b36732;
  display: flex;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
`;

const Logo = styled.img`
  height: 90px;  /* Aumentando a altura da imagem */
  width: 80px;   /* Aumentando a largura da imagem */
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease; /* Transição suave para o efeito hover */

  &:hover {
    transform: scale(1.1); /* Efeito de aumento ao passar o mouse */
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #d49058;
  }
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 900px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #d49058;
  }
`;

const ImagemLugar = styled.img`
  width: 200px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.5); 
  }
`;

const DropdownMenu = styled.div`
  margin-top: 20px;
  position: absolute;
  top: 60px;
  left: 10px;
  background-color: #b36732;
  width: 150px;
  border: 1px solid black;
  border-radius: 5px;
  z-index: 100;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 15px; /* Aumenta o padding para mais área clicável */
  text-align: left;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem; /* Aumenta o tamanho da fonte */
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #d49058;
    transform: scale(1.1); /* Efeito de aumento ao passar o mouse */
  }
`;
