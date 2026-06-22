
import "./app.css"
import { Counter } from "./counter/Counter"
import { FirstMountLogger } from "./useRefEsercizio/FirstMountLogger"
import { FocusableInput } from "./useRefEsercizio/FocusableInput"
// import { InteractiveWelcome } from "./controlledform/InterractiveWelcome"
// import { Login } from "./controlledform/Login"


function App() {
  // function handleLogin(data:{
  //   username: string,
  //   password: string,
  //   remember: boolean,
  // }) {
  //   console.log(data)
  // }
  
  return (
    <>
      <div>
        <FocusableInput />
        <FirstMountLogger />
        <Counter initialValue={0} increment={1}/>
      </div>
    </>
  )
}

export default App
