import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Data"
import { useState } from "react";
import { Card } from "@mui/material";
import {Avatar,Typography,TextField,Button,Box} from "@mui/material";
function Signup() {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("");

    const athu = getAuth(app)

    

    const HandlePassword = (e) => {
        setPassword(e.target.value)
        setPassword(e.target.value)
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        
        if (!password.match(lowerCase)) {
            setErrorMessage("Password should contains lowercase letters!")
        }
        else if (!password.match(upperCase)) {
            setErrorMessage("Password should contain uppercase letters!")
        }
        else if (!password.match(numbers)) {
            setErrorMessage("Password should contains numbers also!")
        } else if (password < 10) {
            setErrorMessage("Password length should be more than 10.")
        } else {
            setErrorMessage("Password is strong!")
        }
            
    }



    const HandleEmail = (e) => {
        setEmail(e.target.value)
    }

    const HandlerSaveButton= () => {
        setEmail("")

        setPassword("")

        createUserWithEmailAndPassword(
            athu,email, password
        ).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.error(error);
        });
    }


    return (
        <>
        <center>
                <Card sx={{ maxWidth: 300, marginTop: "100px", background: "white",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",color:"white"}} className='signup'>
                     <Avatar sx={{m:"20px"}} src="/broken-image.jpg" />
                    <Typography>Signup</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                label="Name..."
                                variant="standard"
                                color="secondary"
                                focused
                            
                            />

                            <TextField
                                label="Password"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandlePassword} value={password}
                            />

                            <TextField

                                label="Email"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandleEmail} value={email}
                            />
                            <p style={{ color: "red" }}>{errorMessage}</p>

                        </div>
                        <Button sx={{ width: "70%", borderRadius: "20px",m:"20px"}} variant='contained' onClick={HandlerSaveButton}>Save</Button>
                    </Box>
                </Card>
            </center >
        </>
    )
}
export default Signup;

