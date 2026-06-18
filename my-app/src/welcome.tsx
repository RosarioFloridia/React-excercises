import { Age } from "./age"

type WelcomeProps = {
    name: string,
}

export function Welcome ({name}: WelcomeProps) {
    return (
        <>
        <p>Welcome, <strong>{name}</strong></p>
        <Age age = {24}/>
       </>
    )
}