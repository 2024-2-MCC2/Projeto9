import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <NavContainer>
      <NavItem>
        <Link to="/">Home</Link>
        {/* Basicamente quanto clickar em Home manda para a pagina principal */}
      </NavItem>
      <NavItem>
        <Link to="/donation">Doe Agora</Link>
        {/* Quando clickar em Doe Agora, vai mandar para a página Doe Agora */}
      </NavItem>
    </NavContainer> 
 
  );
}

export default NavBar;

const NavContainer = styled.nav`
  background-color: #b36732;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.div`
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    color: #d49058;
  }
`;

