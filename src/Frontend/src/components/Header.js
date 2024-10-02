import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false); // Lugar que Controla se o menu está aberto ou fechado. )
  // começa fechado Inicialmente fechado useState(false)

  // Função que alterna o estado do menu
  function handleLogoClick() {
    setMenuOpen(!isMenuOpen); // Inverte o valor de isMenuOpen : se estiver aberto, fecha; se estiver fechado, abre
  }

  return (
    <HeaderContainer>
      <LogoSection>
        {/* Ao clicar na logo ou no botão de menu, chama a função que abre ou fecha o menu */}
        <Logo src="/images/Logo.png" onClick={handleLogoClick} />
        <MenuButton onClick={handleLogoClick}>MENU</MenuButton> 
      </LogoSection>

      <TextSection>
        {/* Título e subtítulo do cabeçalho */}
        <h3>Associação Protege</h3>
        <p>Mãos que ajudam, transformam corações</p>
      </TextSection>

      {/* Se o menu estiver aberto (isMenuOpen for true), o dropdown aparece */}
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
  align-items: center;
  justify-content: space-between; 
  color: white;
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;  
  z-index: 1000;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: row;  
  // Muda o layout para uma linha em telas pequenas 
    justify-content: space-between; 
  // Deixa logo e menu na esquerda e texto na direita 
  }
`;

const TextSection = styled.div`
  display: center;  
  flex-direction: center;  
  justify-content: center;  
  text-align: center;  
  margin: 0 auto; 
  padding: 0;
  padding-right: 100px;

  @media (max-width: 768px) {
    text-align: right;  
    margin-left: auto;
  }

  h3 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  // Logo e Menu ficam à esquerda 
  margin: 0 20px 0px;

  @media (max-width: 768px) {
    justify-content: flex-start; 
  // Mantém a logo e o menu à esquerda 
  }
`;

const Logo = styled.img`
  height: 100px;
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
  // Posiciona o menu dropdown sobre os outros itens
  top: 80px;  
  // Espaçamento do topo
  left: 20px;  
  // Posição do menu na horizontal
  background-color: #b36732; 
  width: 150px; 
  // Largura fixa do menu
  border: 1px solid black;  
  border-radius: 5px;  
  // Bordas arredondadas
  z-index: 100; 
  // Garante que o menu fique acima de outros elementos
`;

const DropdownItem = styled(Link)`
  display: block; 
  padding: 10px;  
  text-align: left;  
  color: white; 
  text-decoration: none;  
  // Remove o sublinhado
  cursor: pointer; 
  // Cursor de "mão" ao passar sobre o item

  &:hover {
    background-color: #d49058;  
  // Muda a cor de fundo ao passar o mouse
  }
`;
