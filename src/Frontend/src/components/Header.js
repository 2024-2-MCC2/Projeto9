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
        <Logo src="/images/Logo.png" onClick={handleLogoClick} />
        <MenuButton onClick={handleLogoClick}>Login</MenuButton>
      </LogoSection>

      {/* Dropdown para dispositivos móveis */}
      {isMenuOpen && (
        <DropdownMenu>
          <DropdownItem as={Link} to="/login">Login</DropdownItem>
          <DropdownItem as={Link} to="/alterar-senha">Alterar Senha</DropdownItem>
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
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
`;

const Logo = styled.img`
  margin-top: 2px;
  height: 70px;
  width: 60px;
  margin-right: 10px;
  cursor: pointer;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
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
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #d49058;
  }
`;

const ImagemLugar = styled.img`
  width: 150px;
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
  padding: 10px;
  text-align: left;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #d49058;
  }
`;