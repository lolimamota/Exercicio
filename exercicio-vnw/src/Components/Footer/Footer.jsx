import React, {useState} from 'react'
import { useEffect } from 'react'

function Footer() {
const [time, setTime] = useState(0)
const [keep, setKeep] = useState()

// contador
  const Stater = ()=>{
    const Counter = setInterval(()=>{
      setTime((prevTime)=> prevTime + 1)
    }, 1000)
    setKeep(Counter)
  };

  const End = ()=> {clearInterval(keep)};

  return (
    <section>
      <h2>Tempo que fiquei preso nessa página:</h2>
      <h4>{time}</h4>
      <div>
        <button>PARAR</button>
        <button className="display" onClick={End}>Desculpa!</button>
      </div>
    </section>
  )
}

export default Footer