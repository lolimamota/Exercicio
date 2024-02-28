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
  const Alert = ()=>{
    setTimeout(() => {
      alert('Vou te mandar pro Footer no futuro')
    }, 50);
  }
  

  const Alert2 = ()=>{
    setTimeout(() => {
      alert('A cabeça do jogo está na Header')
    }, 50);
  }

  const Alert3 = ()=>{
    setTimeout(() => {
      alert('Main o meeeeeeeeeeeeeeeiiiiioooooo')
    }, 50);
  }

  const Readme = ()=>{
    console.log("Este é um exercicio!")  
  }

  return (
    <Section>
    <h1  className='hover' onClick={Readme}>Frases para exibir</h1>
    <Nav>
      <Ul>
        <li  className='hover' onClick={Alert2}>Frase da Header</li>
        <li  className='hover' onClick={Alert3}>Frase da Main</li>
        <li  className='hover' onClick={Alert}>Frase do Footer</li>
      </Ul>
    </Nav>
    </Section>
  )
}

export default Header