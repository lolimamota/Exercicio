import React from 'react'
import styled from 'styled-components'

const Section = styled.section`display: flex;
justify-content: space-around;
align-items: center;
height: 10vh;
font-family: "Honk", system-ui;
font-size: 2rem;
`;

const Nav = styled.nav`display:flex;
justify-content: space-around;
align-items: center;
`;

const Ul = styled.ul`display:flex;
justify-content: space-evenly;
align-items: center;
width: 60vw;
`;


function Header() {
  return (
    <Section>
    <h1>Frases para exibir</h1>
    <Nav>
      <Ul>
        <li>Frase da Header</li>
        <li>Frase da Main</li>
        <li>Frase do Footer</li>
      </Ul>
    </Nav>
    </Section>
  )
}

export default Header