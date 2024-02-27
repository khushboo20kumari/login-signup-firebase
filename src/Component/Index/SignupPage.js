import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function SignupPage() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [data, setData] = useState([])

    const OnChangeHandlerUserName = (e) => {
        setUserName(e.target.value)
    }

    const OnChangeHandlerUserPassword = (e) => {
        setPassword(e.target.value)
    }

    const OnChangeHandlerUserEmail = (e) => {
        setEmail(e.target.value)
    }

    const OnClickSubmit = () => {
        createUserWithEmailAndPassword(Auth, email, password).then((value) => {
            alert("sign up successfully")
        })
    }
    return (
        <>
            <p>this is Signup component</p>
            <input className="userName" onChange={OnChangeHandlerUserName} value={userName}></input>
            <input className="Password" onChange={OnChangeHandlerUserPassword} value={password}></input>
            <input className="Email" onChange={OnChangeHandlerUserEmail} value={email}></input>
            <button onClick={OnClickSubmit}>submit</button>
        </>
    )
}
export default SignupPage;