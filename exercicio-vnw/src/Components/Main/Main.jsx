import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card.jsx'

const Section = styled.section`
height: 70vh;
display: flex;
justify-content: space-evenly;
align-items:center;
font-family: "Montserrat Alternates", sans-serif;
`;

const Div = styled.div`
width: 65vw;
display: flex;
justify-content: space-around;
align-items:center;
margin-left: 12rem;
`;

function Main() {
  return (
    <Section>
    <Card text="Inspecione ou aperte F12"/>
    <Div>
    <Card text="Escolha a frase da Header"/>
    <Card text="Escolha a frase da Main"/>
    <Card text="Escolha a frase do Footer"/>
    </Div>
    </Section>
  )
}

export default Main