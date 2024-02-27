import { useState } from "react"
import { app } from "./firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
const auth = getAuth(app)

function App() {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const onChangeHandleusername=(e)=>{
    setEmail(e.target.value)
  }

  const onChangeHandlerPassword=(e)=>{
    setPassword(e.target.value)
  }

  const onChangeHandlerEmail=(e)=>{
    setEmail(e.target.value)
  }


  const OnClickHandler = () => {
    setEmail("")
    setUserName("")
    setPassword("")
    createUserWithEmailAndPassword(auth, email, password)
  }

  return (

    <div className="App">
      <input onChange={onChangeHandleusername} value={userName}></input>
      <input onChange={onChangeHandlerPassword} value={password}></input>
      <input onChange={onChangeHandlerEmail} value={email}></input>
      <button onClick={OnClickHandler}>save</button>
    </div>

  )
}
export default App;