import React, {useState, useEffect, useContext}from 'react'
import ClickContext from '../Contexts/ClickContext';

export default function Counter() {
    const {touch} = useContext(ClickContext);
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);
        if(touch){
            return clearInterval(intervalId)    
        }
    }, [touch])
    return (
        <>
            <h2>{segundos} segundos</h2>
        </>
    );
}