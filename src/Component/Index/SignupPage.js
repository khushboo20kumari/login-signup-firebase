import { useState } from "react";

function SignupPage() {

    const [userName,setUserName]=useState("")
    const [Password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    
    return (
        <>
            <p>this is Signup component</p>
            <input className="userName" onChange={OnChangeHandlerUserName}></input>
            <input className="Password" onChange={OnChangeHandlerUserPassword} ></input>
            <input className="Email" onChange={OnChangeHandlerUserEmail}></input>
        </>
    )
}
export default SignupPage;