import React, { useState } from 'react'
import image from './Googleimg.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signin.css'
import { loginApi } from '../../services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SigninPage() {
    const [signObj,setSignObj] = useState({email:"",password:""})
    const [regexObj,setRegexObj] = useState({emailBorder:false,emailHelper:"",passwordBorder:false,passwordHelper:""})
    const takeEmail=(event)=>{
        //setSignObj({email:event.target.value})
        setSignObj(previousState=>({
            ...previousState,
            email:event.target.value
        }))
    }
    const takePassword=(event)=>{
       // setSignObj({password:event.target.value})
       setSignObj(previousState=>({
        ...previousState,
        password:event.target.value
       }))
    }
    const onSubmit=()=>{
        let emailTest = emailRegex.test(signObj.email)
        let passwordTest = passwordRegex.test(signObj.password)
        if(emailTest===false){
            setRegexObj(previousState=>({
                ...previousState,
               emailBorder:true,
               emailHelper:"enter Email"

               }))
        }
        else if(emailTest===true){
            setRegexObj(previousState=>({
                ...previousState,
               emailBorder:false,
               emailHelper:""

               }))
        }
        if(passwordTest===false){
            setRegexObj(previousState=>({
                ...previousState,
               passwordBorder:true,
               passwordHelper:"enter password"

               }))
        }
        else if(passwordTest===true){
            setRegexObj(previousState=>({
                ...previousState,
               passwordBorder:false,
               passwordHelper:""

               }))
        }
        if(emailTest === true && passwordTest === true){
            loginApi(signObj).then((response)=>{//give promises
                localStorage.setItem("token",response.data.id)
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
    
    console.log(signObj, "signIn");
    return (
        <div>
            <div className='out-BoxSI'>
                <div className='In-Box'>
                    <img src={image} alt="image" width='100%' height='100%'></img>
                </div>
                <div className='para'>
                    <p>Sign in</p>
                </div>
                <div className ='AccountAccount'>
                 <p>Use Your Google Account</p>
                </div>
                <div className='Email'>
                <TextField id="outlined-basic" label="EmailorPhone" variant="outlined" onChange={takeEmail}
                 error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
                <a>Forgot Email?</a>
                </div>
                <div className='Password'>
                    <TextField id="outlined-basic" label="Password" variant="outlined"  onChange={takePassword}
                    error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}/>
                    <a>Forgot Password</a>
                </div>
                <div className='class' >
                    <p>Not your computer? Use Guest mode to sign in privately.</p>
                    <a>Learn More</a>
                </div>
                <div className='clickbuttons'>
                    <Button variant="text">CreateAccount</Button>
                    <Button variant="contained" onClick={onSubmit}>Next</Button>
                    {/* <p>hello</p>
                    <MenuIcon/>  */}
                </div>

            </div>
        </div>


    )
}

export default SigninPage