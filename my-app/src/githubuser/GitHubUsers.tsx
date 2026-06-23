import { useEffect, useState } from "react"
import { GithubUser } from "./GitHubUser"


type User = {
    login: string,
    name: string,
    id: number,
    bio: string,
    avatar_url: string,
}


function GitHubListUsers({ user, onClick }: { 
    user: User
    onClick: () => void
 }) {
    console.log(user)
    return <li className="avatar" onClick={onClick}>{user.login}</li>
}


export function GitHubUsers() {
    const [users, setUsers] = useState<User[] | null>(null)
    const [selectedUsername, setSelectedUsername] = useState<string | null>(null)
    
    async function fetchUsers() {
        try{
            const response = await fetch(`https://api.github.com/users`)
            const json = await response.json()
            setUsers(json)

            console.log(users)
        } catch (error) { 
            console.log(error) 
        }
        
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        <div>
            <ul>
                {users?.map(user => (
                    <GitHubListUsers key={user.id} user={user} onClick={() => setSelectedUsername(user.login)}/>
                ))}
            </ul>
            {selectedUsername && <GithubUser username={selectedUsername} />}
        </div>
    )
}