import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false); // Controla se o menu está aberto ou fechado

  // Função para alternar o estado do menu (aberto/fechado)
  function handleLogoClick() {
    setMenuOpen(!isMenuOpen); 
  }

  return (
    <HeaderContainer>
      <LogoSection>
        {/* Ao clicar na logo, abre ou fecha o menu */}
        <Logo src="/images/Logo.png" alt="Logo da Associação" onClick={handleLogoClick} />
        <MenuButton onClick={handleLogoClick}>MENU</MenuButton> {/* Botão de menu para dispositivos móveis */}
      </LogoSection>

      {/* Faz aparecer o menu apenas se ele estiver aberto */}
      {isMenuOpen && (
        <DropdownMenu>
          <DropdownItem as={Link} to="/donation">Doar Agora</DropdownItem>
          <DropdownItem as={Link} to="/">Tela Principal</DropdownItem>
        </DropdownMenu>
      )}
    </HeaderContainer>
  );
}

export default Header;

// Estilos com styled-components

const HeaderContainer = styled.div`
  background-color: #b36732;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
`;


const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
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

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  background-color: #b36732;
  width: 150px;
  border: 1px solid #000;
  border-radius: 5px;
  z-index: 100;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px;
  text-align: left;
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #d49058;
  }
`;
