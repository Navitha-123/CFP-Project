import React from 'react'
import { useState } from 'react'
import Header from '../header/header'
import Note1 from '../takenote1/note1'
import Note2 from '../takenote2/note2'
import Note3 from '../takenote3/note3'

function Dashboard() {
    const [toggle,setToggle] = useState(false)
    const listenToNote1 = () =>{
        setToggle(true)
      }
     const listenToNote2 = ()=>{
      setToggle(false)
     }
   

  return (
    <div>
       <Header/>
       {/* <Note2 noteHandler = {listenToNote2}/> */}
       <div>\
        {
          toggle ? <Note2 listenToNote2 = {listenToNote2}/>  :  <Note1 listenToNote1 = {listenToNote1}/> 
         /*  toggle ? (<div> <Note2/>  :  <Note1 listenToNote1 = {listenToNote1}/> </div>) : (<div> <Note1/>:<Note2 listenToNote2={listenToNote2}/></div>) */
  
          /*   toggle ? <Note2/>  :  <Note1 listenToNote1 = {listenToNote1}/> */  /* ? toggle  ? <Note1/>:<Note2 listenToNote2={listenToNote2}/>  */
           /* toggle === false ? <Note2/>  :  <Note1 listenToNote1 = {listenToNote1}/> ===  false ? <Note1/>  :  <Note1 listenToNote2 = {listenToNote2}/> */
        
        }
        
       </div>
       
    </div>
  )
}
export default Dashboard