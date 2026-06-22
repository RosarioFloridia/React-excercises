
import "./app.css"
import { InteractiveWelcome } from "./controlledform/InterractiveWelcome"
import { Login } from "./controlledform/Login"


function App() {
  function handleLogin(data:{
    username: string,
    password: string,
    remember: boolean,
  }) {
    console.log(data)
  }
  
  return (
    <>
    <div>
      <InteractiveWelcome/>
    </div>
    <div>
      <Login onLogin={handleLogin}/>
    </div>
    </>
  )
}

export default App
