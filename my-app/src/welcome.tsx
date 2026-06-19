import { Age } from "./age"
import { Message } from "./message"

type WelcomeProps = {
    name: string,
    age: number
}

export function Welcome ({name= "Guest", age}: WelcomeProps) {
    return (
        <>
        <p>Welcome, <strong>{name}</strong></p>
        
        {/* 1. Renderizza solo se age > 18 */}
        {age > 18 && <Age age={age}/>}

        {/* 2. Renderizza solo se age è presente */}
        {age && <Age age={age}/>}

        {/* 3. Renderizza solo se age > 18 e age < 65 */}
        {age > 18 && age < 65 && <Age age={age}/>}

        {/* 4. Renderizza solo se age > 18 e name === "John" */}
        {age > 18 && name === "John" && <Age age={age}/>}  
        
        {/* 5. Esempio con operatore ternario */}
        {age > 18 ? <Age age={age} /> : null}

        <Message age={age}/> 
       </>
    )
}