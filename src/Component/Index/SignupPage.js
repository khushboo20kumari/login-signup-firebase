function SignupPage() {

    
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