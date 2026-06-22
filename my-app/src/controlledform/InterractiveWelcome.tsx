import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
    const [name, setName] = useState("")

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value

        setName(value)
    }


    return (
        <>
            <input type="text" value={name} onChange={handleChange} />
            <Welcome name={name}/>
        </>
    )
}
