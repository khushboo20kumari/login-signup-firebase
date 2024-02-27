import { app } from "./firebase"
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
const auth = getAuth(app)

function App() {

  const OnClickHandler = () => {
    createUserWithEmailAndPassword(auth,)
  }
  
  return (

    <div className="App">
      <input onChange={onChangeHandleusername}></input>
      <input onChange={onChangeHandlerPassword}></input>
      <input onChange={onChangeHandlerEmail}></input>
      <button onClick={OnClickHandler}>save</button>
    </div>

  )
}
export default App;