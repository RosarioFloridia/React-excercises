import { useEffect, useRef, useState } from "react";

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
    const [counter,setCounter] = useState(initialValue)
    
    const directionRef = useRef<string | null>(null);
    const previousDirectionRef = useRef<string | null>(null);
    
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

        let newDirection: string | null = null

        if (counter > initialValue ){
            newDirection = "up";
        } else if (counter < initialValue) {
            newDirection = "down"
        }

        directionRef.current = newDirection;
        
        if (directionRef.current !== previousDirectionRef.current) {
            console.log(directionRef.current)
            previousDirectionRef.current = directionRef.current
        }
    }, [counter, initialValue])



    return (
        <div>
            <CounterDisplay count = {counter} />

            <button onClick={handleCounterIncrement}>Incrementa</button>
            <button onClick={handleCounterDecrement}>Decrementa</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
