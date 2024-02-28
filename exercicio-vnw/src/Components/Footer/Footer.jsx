import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Counter from '../Card/Counter.jsx';
import useContext from '../Contexts/useContext.jsx';

const Section = styled.section`
display:flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
font-size: 1.5rem;
font-family: "Honk", system-ui;
height: 20vh;
`;

const Div = styled.div`
width: 50vw;
display: flex;
justify-content: space-evenly;
align-items: center;
font-size: 1.5rem;
`;

const Button = styled.button`
width: 10vw;
height: 5vh;
background-color: white;
color: black;
border: solid white;
border-radius: 10px;
`;

function Footer(){
  const [touch, setTouch] = useState(false);
  const Stop = ()=>{
    setTouch(!touch);
    alert("Nananinanão!!! Quer pausar por que?");
    const button = document.querySelector('.display');
    button.classList.toggle('show');
  };

  return (
    <Section>
    <h2>Tempo que fiquei preso nessa page:</h2>
    <Div>
    <Counter/>
    <Button onClick={Stop}>PAUSE</Button>
    <Button className='display'>Desculpa !</Button>
    </Div>
    </Section>
  )
}

export default Footer
