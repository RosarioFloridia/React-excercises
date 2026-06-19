type Message = {
    age: number
}

export function Message({age}:Message) {
    return (
        <p>
            {age > 18 ? `Your age is ${age}`
            : "You are very young!"
            }
            </p>
    )
}