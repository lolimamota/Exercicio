import React, {useState, useEffect}from 'react'

export default function Counter() {
    const [segundos, setSegundos] = useState(0);
    const [pause, setPause] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);

        // Limpe o intervalo quando o componente for desmontado
        return () => {
            clearInterval(intervalId);
        };
    }, [pause])
    return (
        <>
            <h2>{segundos} segundos</h2>
        </>
    );
}