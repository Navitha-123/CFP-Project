import axios from 'axios'
export const loginApi = (signinObj) =>{
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",signinObj)
    return response 
} 
export const signupApi = (signupObj) =>{
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",signupObj)
    return response
}
