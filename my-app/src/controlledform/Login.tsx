import React, { useState } from "react"

type LoginData = {
    username: string;
    password: string;
    remember: boolean;
};

type LoginProps = {
    onLogin: (data: LoginData) => void;
};


export function Login({onLogin}:LoginProps) {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    
    function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }
    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }
    function handleRemember(event: React.ChangeEvent<HTMLInputElement>) {
        setRemember(event.target.checked)
    }

    function handleReset() {
        setUsername("")
        setPassword("")
        setRemember(false)
    }

    function handleLogin() {
        onLogin({
            username,
            password,
            remember,
        });
    }
    
    return (
        <form>
            <div >
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange}/>
            </div>

            <div >
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <label htmlFor="remember">
                    <input id="remember" type="checkbox" checked={remember} onChange={handleRemember}
                    />
                    Remember me
                </label>
            </div>
            <button type="button" disabled={!password.trim() && !username.trim()} onClick={handleLogin}>Login!</button>
            <button type="button" onClick={handleReset}>Reset!</button>
        </form>
    )
}

