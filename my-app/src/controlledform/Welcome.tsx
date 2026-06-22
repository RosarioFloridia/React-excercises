type Welcome = {
    name: string
} 

export function Welcome({name}: Welcome) {
    return (
        <h1>Welcome: {name}</h1>
    )
}