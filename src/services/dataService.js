import axios from "axios";
const headerConfig = { 
    headers:{Authorization: localStorage.getItem('token')}
}
export const addNotes = (noteObj) =>{
  let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",noteObj,headerConfig)  
  return response  
}