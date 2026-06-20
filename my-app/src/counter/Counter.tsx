import { useEffect, useState } from "react";
import "./Counter.css"

type CounterProps = {
    initialValue: number,
    increment: number,
}

type CounterDisplayProps = {
    count: number,
}

function CounterDisplay({count}: CounterDisplayProps) {
    return (
        <h2>{count}</h2>
    )
}

function Clock() {
    const [currentTime, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])
    return (
        <div>
            <h2>{currentTime.toLocaleTimeString()}</h2>
        </div>  
    )
}

export function Counter({initialValue, increment}: CounterProps) {

    const [counter,setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter((prevCounter) => prevCounter + increment)
        }

    function handleCounterDecrement() {
        setCounter((prevCounter) => prevCounter - increment)
        }
    
    function reset() {
        setCounter(initialValue)
        }

    useEffect(() => {
        console.log("Valore corrente del counter:", counter)
    }, [counter])
    return (
        <div>
            <CounterDisplay count = {counter} />

            <button onClick={handleCounterIncrement}>Incrementa</button>
            <button onClick={handleCounterDecrement}>Decrementa</button>
            <button onClick={reset}>Reset</button>
            <Clock />
        </div>
    )
}
