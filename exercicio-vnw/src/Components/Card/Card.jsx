import React from 'react';
import styled from 'styled-components';
import Seta from '../Main/image/seta1.png';

const Section = styled.section`
height: 40vh;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
font-size: 1.5rem;
`;

function Card({text}) {
  return (
    <Section>
    <img src={Seta} alt="uma seta apontada para cima" />
    <p>{text}</p>
    </Section>
  )
}

export default Card