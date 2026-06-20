import { useState } from "react";

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

export function Counter({initialValue, increment}: CounterProps) {

    const [counter,SetCounter] = useState(initialValue)

    function handleCounterIncrement() {
        SetCounter((prevCounter) => prevCounter + increment)
        }

    function handleCounterDecrement() {
        SetCounter((prevCounter) => prevCounter - increment)
        }
    
    function reset() {
        SetCounter(initialValue)
        }
    
    return (
        <div>
            <CounterDisplay count = {counter} />

            <button onClick={handleCounterIncrement}>Incrementa</button>
            <button onClick={handleCounterDecrement}>Decrementa</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
