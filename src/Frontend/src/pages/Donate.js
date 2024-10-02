import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import VoceSabia from '../components/VoceSabiaDonate';
import Rodape from '../components/Rodape';
import BotaoDoar from '../components/BotaoDonate';




// Tem que fazer ainda essa pagina muito provavel criar mais components e linkar aqui que nem com a pagina principal

function Donate() {
  return (
      <div>
        <NavBar />

        <VoceSabia />

        <Rodape />
      </div>
  );
}

const Background = styled.body`
background-image: url(https://www.neipies.com/desenhos-de-arvores-das-criancas-podem-indicar-suas-personalidades/);
`

const Titulo = styled.h1`
color: #b36732;

`

const TituloESub = styled.div`
text-align: center;
`


const AsideContainer = styled.aside`

`





export default Donate;