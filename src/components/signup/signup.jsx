import React, { useState } from 'react'
import image from './Googleimg.png'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import './signup.css'
const firstnameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/
const lastnameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function SignupPage() {
  const [signupObj, setSignupObj] = useState({ firstname: "", lastname: "", service: "advance", email: "", password: "" })
  const [regexObj, setRegexObj1] = useState({ firstnameBorder: false, firstnameHelper: "", lastnameBorder: false, lastnameHelper: "", emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
  const takeFirstname = (event) => {
    //setSignupObj({firstname:event.target.value})
    setSignupObj(previousState => ({
      ...previousState,
      firstname: event.target.value
    }))
  }
  const takeLastname = (event) => {
    //setSignupObj({lastname:event.target.value})
    setSignupObj(previousState => ({
      ...previousState,
      lastname: event.target.value
    }))
  }
  const takeEmail = (event) => {
    // setSignupObj({email:event.target.value})
    setSignupObj(previousState => ({
      ...previousState,
      email: event.target.value
    }))

  }
  const takePassword = (event) => {
    //setSignupObj({password:event.target.value})
    setSignupObj(previousState => ({
      ...previousState,
      password: event.target.value
    }))

  }

  const onSubmit = () => {
    let firstnameTest = firstnameRegex.test(signupObj.firstname)
    let lastnameTest = lastnameRegex.test(signupObj.lastname)
    let emailTest = emailRegex.test(signupObj.email)
    let passwordTest = passwordRegex.test(signupObj.password)
    if (firstnameTest === false) {
      setRegexObj1(previousState => ({
        ...previousState,
        firstnameBorder: true,
        firstnameHelper: "enter firstname"

      }))
    }
    else if (firstnameTest === true) {
      setRegexObj1(previousState => ({
        ...previousState,
        firstnameBorder: false,
        firstnameHelper: ""

      }))
    }
    if (lastnameTest === false) {
      setRegexObj1(previousState => ({
        ...previousState,
        lastnameBorder: true,
        lastnameHelper: "enter lastname"

      }))
    }
    else if (lastnameTest === true) {
      setRegexObj1(previousState => ({
        ...previousState,
        lastnameBorder: false,
        lastnameHelper: ""

      }))
    }
    if (emailTest === false) {
      setRegexObj1(previousState => ({
        ...previousState,
        emailBorder: true,
        emailHelper: "enter email"

      }))
    }
    else if (emailTest === true) {
      setRegexObj1(previousState => ({
        ...previousState,
        emailBorder: false,
        emailHelper: ""

      }))
    }
    if (passwordTest === false) {
      setRegexObj1(previousState => ({
        ...previousState,
        passwordBorder: true,
        passwordHelper: "enter password"

      }))
    }
    else if (passwordTest === true) {
      setRegexObj1(previousState => ({
        ...previousState,
        passwordBorder: false,
        passwordHelper: ""

      }))
    }
  }
  console.log(signupObj, "Sign Up");

  return (
    <div>
      <div className='out-boxSU'>
        <div className='child1'>
          <img src={image} alt="image" width='30%' height='10%'></img>

          <div className='create'>
            <p>Create your Google Account</p>
          </div>
          <div className='name'>
            <TextField label="FirstName" id="outlined-size-small" defaultValue="Small" size="small" onChange={takeFirstname}
              error={regexObj.firstnameBorder} helperText={regexObj.firstnameHelper} />
            <TextField label="LastName" id="outlined-size-small" defaultValue="Small" size="small" onChange={takeLastname}
              errory={regexObj.lastnameBorder} helperText={regexObj.lastnameHelper} />
          </div>
          <div className='email'>
            <TextField label="Email" id="outlined-size-small" defaultValue="Small" size="small" onChange={takeEmail}
              error={regexObj.emailBorder} helperText={regexObj.emailHelper} /></div>
          <div className="letter" style={{ height: '20%', width: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <p>you can use letters,numbers & periods</p>
          </div>
          <div className='current'>
            <Button variant="text"> Use my current email address instead</Button>
          </div>
          <div className='confirmpassword'>
            <TextField label="Password" id="outlined-size-small" defaultValue="Small" size="small" onChange={takePassword}
              error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} />
            <TextField label="Confirm" id="outlined-size-small" size="small" />
          </div>
          <div className='characters'>
            <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
          </div >
          {/*<div style={{height:'40%',width:'50%',display:'flex',alignItems:'center',flexDirection:'row'}}>
        <Checkbox {...label} Show password label= "Show password"/>
  </div>*/}
          <div className='buttons'>
            <Button variant="text">Sign in instead</Button>
            <Button variant="contained" onClick={onSubmit} >Next</Button>
          </div>
        </div>
        <div className='child2'>
          <img src=" https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="image" width='50%' height='30%' alignItems='center'></img>
          <span>One account. All of Google working for you.</span>
        </div>
      </div>
    </div>



  )

}
export default SignupPage