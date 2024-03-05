import React, {useState} from 'react';
import styled from 'styled-components';

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
border-radius: 10px;`;

function Footer() {
const [time, setTime] = useState(0)
const [keep, setKeep] = useState()

// contador
  const Stater = ()=>{
    const Counter = setInterval(()=>{
      setTime((prevTime)=> prevTime + 1)
    }, 1000)
    setKeep(Counter)
    alert("Nananinanão!!! Quer pausar por que?");
    const button = document.querySelector('.display');
    button.classList.toggle('show');
  };

  const End = ()=> {clearInterval(keep)};

  return (
    <Section>
      <h2>Tempo que fiquei preso nessa página:</h2>
      <h4>{time}</h4>
      <Div>
        <Button onClick={Stater}>PARAR</Button>
        <Button className="display" onClick={End}>Desculpa!</Button>
      </Div>
    </Section>
  )
}

export default Footer