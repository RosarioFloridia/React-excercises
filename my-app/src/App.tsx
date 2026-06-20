import { Counter } from "./counter/Counter"

function App() {

  return (
    <>
    <div>
      <Counter initialValue={0} increment={1}/>
    </div>
    </>
  )
}

export default App
