import { useState, useEffect } from "react"

export function Clock() {
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