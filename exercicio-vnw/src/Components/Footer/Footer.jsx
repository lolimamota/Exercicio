import React, {useEffect, useState} from 'react'

function Footer() {
//useEffect pra rederizar o contador
useEffect(()=>{
  const [time, setTime] = useState(0)
  const Counter = setInterval(()=>{
    
  })
})

  return (
    <section>
      <h2>Tempo que fiquei preso nessa página:</h2>
      <h4>tempo</h4>
      <div>
        <button>PARAR</button>
        <button>Desculpa!</button>
      </div>
    </section>
  )
}

export default Footer