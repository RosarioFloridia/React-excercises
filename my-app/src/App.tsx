import "./app.css"
import { Colors, arrayColors } from "./colors/Colors"

//  LIST OF NOT USED IMPORTS
// import { Counter } from "./counter/Counter"
// import { FirstMountLogger } from "./useRefEsercizio/FirstMountLogger"
// import { FocusableInput } from "./useRefEsercizio/FocusableInput"
// // import { InteractiveWelcome } from "./controlledform/InterractiveWelcome"
// // import { Login } from "./controlledform/Login"


function App() {
  
  return (
    <>
      <div>
        <Colors items={arrayColors} />
      </div>
    </>
  )
}

export default App
