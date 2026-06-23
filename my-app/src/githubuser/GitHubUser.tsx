import { useEffect, useState } from "react"

interface GithubUserProps {
    username: string,
}
interface User  {
    login: string,
    name: string,
    id: number,
    bio: string,
    avatar_url: string,
}


export function GithubUser({ username }: GithubUserProps) {
    const [user, setUser] = useState<User | null>(null)
    
    async function fetchUser(username:string) {
        
        try{
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setUser(json)
        } catch (error) { 
            console.log(error) 
        }
        
    }
    if (!username) {
        return null
    }  


    useEffect(() => {
        fetchUser(username)
    }, [username])
    
    return (
        <div>
        {!user && <p>Loading...</p>}
        <h1>{user?.name}</h1>
        <p>{user?.bio}</p>
        <p>{user?.login}</p>
        <img src={user?.avatar_url} alt="User avatar" />
        </div>
    )
}